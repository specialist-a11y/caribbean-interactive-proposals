import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "../public/images");
const API_KEY = "f94fce9efddae321794ebd0b478c8fec";
const BASE_URL = "https://api.kie.ai/api/v1";

// Prompts mapped 1-to-1 with the wireframe sections
const images = [
  {
    // HERO — B2B SaaS hero, Caribbean executive reviewing an interactive proposal
    name: "hero-dark-caribbean",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "16:9",
    prompt:
      "Confident Caribbean male executive in a sharp dark suit sitting at a sleek modern glass desk, reviewing a beautifully designed interactive HTML business proposal on a MacBook Pro, large floor-to-ceiling windows showing a Caribbean harbour skyline at dusk, warm gold and deep navy tones, premium B2B corporate atmosphere, cinematic shallow depth of field, photorealistic, ultra high detail",
  },
  {
    // PROBLEM SIDE — frustration with static PDFs, Caribbean office context
    name: "pdf-messy",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "3:2",
    prompt:
      "Frustrated Caribbean businesswoman in professional attire sitting at a cluttered office desk, surrounded by printed PDF proposals, ring binders and scattered papers, looking exasperated at an old laptop screen, harsh fluorescent overhead lighting, dull grey corporate office, no windows, photorealistic",
  },
  {
    // SOLUTION SIDE — interactive proposal on screen, premium feel
    name: "proposal-interactive",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "3:2",
    prompt:
      "Ultra-modern dark navy web application on a MacBook screen showing a premium interactive business proposal with a gold-accented pricing calculator, digital signature field, and client analytics dashboard, sleek minimal UI, glowing interface, dark background, product photography style, no people, photorealistic",
  },
  {
    // TARGET AUDIENCE — digital agencies, Caribbean creative team
    name: "services-feature",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "3:2",
    prompt:
      "Diverse Caribbean creative agency team of 3 young professionals gathered around a large monitor showing a vibrant interactive pitch deck, modern open-plan office with exposed concrete walls and tropical plants, natural daylight, collaborative energy, photorealistic",
  },
  {
    // TARGET AUDIENCE — construction / home services Caribbean contractor
    name: "services-portrait",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "2:3",
    prompt:
      "Caribbean male construction contractor in business casual attire presenting a digital proposal on an iPad to a homeowner couple across a kitchen table, architectural blueprints and laptop visible on the table, bright natural lighting, professional and trustworthy atmosphere, photorealistic",
  },
  {
    // PROCESS / HOW IT WORKS — hands-on laptop building proposal
    name: "process-step",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "1:1",
    prompt:
      "Close-up of Caribbean professional hands typing on a MacBook keyboard, the screen clearly showing an interactive HTML proposal being built with colourful sections, pricing tables and a signature block, dark minimal desk workspace, single warm desk lamp, shallow depth of field, cinematic, photorealistic",
  },
  {
    // TESTIMONIAL / SOCIAL PROOF — credible Caribbean business executive headshot
    name: "professional-headshot",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "1:1",
    prompt:
      "Professional Caribbean male executive headshot, late 30s, warm confident smile, dark navy business suit with pocket square, modern blurred glass office background, soft warm studio lighting, high-end corporate portrait photography, photorealistic",
  },
  {
    // BLOG / EDITORIAL — Caribbean B2B business context
    name: "blog-editorial",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "16:9",
    prompt:
      "Caribbean B2B sales meeting in a sleek modern boardroom, three professionals around a glass conference table reviewing proposal documents on laptops and tablets, floor-to-ceiling windows with a tropical city skyline, navy and gold colour palette, premium corporate atmosphere, photorealistic",
  },
];

async function createTask(image) {
  const res = await fetch(`${BASE_URL}/jobs/createTask`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: image.model,
      input: {
        prompt: image.prompt,
        aspect_ratio: image.aspect_ratio,
        resolution: image.resolution,
        output_format: image.ext,
      },
    }),
  });
  const json = await res.json();
  if (json.code !== 200) throw new Error(`Task creation failed: ${json.msg}`);
  return json.data.taskId;
}

async function pollTask(taskId, maxAttempts = 60, intervalMs = 5000) {
  for (let i = 0; i < maxAttempts; i++) {
    await new Promise((r) => setTimeout(r, intervalMs));
    const res = await fetch(`${BASE_URL}/jobs/recordInfo?taskId=${taskId}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const json = await res.json();
    if (json.code !== 200) throw new Error(`Poll failed: ${json.msg}`);
    const { state, resultJson } = json.data;
    if (state === "success") {
      const { resultUrls } = JSON.parse(resultJson);
      return resultUrls[0];
    }
    if (state === "failed") throw new Error(`Task failed`);
    if (i % 6 === 0) console.log(`  [${taskId.slice(-6)}] waiting… (${i * intervalMs / 1000}s)`);
  }
  throw new Error(`Timed out waiting for task ${taskId}`);
}

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(destPath, buf);
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Submitting ${images.length} tasks to kie.ai (nano-banana-2 @ 2K)...\n`);

  const tasks = await Promise.all(
    images.map(async (img) => {
      const taskId = await createTask(img);
      console.log(`  ✦ ${img.name} → ${taskId}`);
      return { ...img, taskId };
    })
  );

  console.log("\nPolling for results…");

  await Promise.all(
    tasks.map(async (task) => {
      try {
        const url = await pollTask(task.taskId);
        const dest = join(OUTPUT_DIR, `${task.name}.${task.ext}`);
        await downloadImage(url, dest);
        console.log(`  ✓ ${task.name}.jpg saved`);
      } catch (err) {
        console.error(`  ✗ ${task.name}: ${err.message}`);
      }
    })
  );

  console.log("\nAll done. Refresh http://localhost:3001 to see the new images.");
}

main().catch(console.error);
