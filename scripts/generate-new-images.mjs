import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "../public/images");
const API_KEY = "f94fce9efddae321794ebd0b478c8fec";
const BASE_URL = "https://api.kie.ai/api/v1";

const images = [
  {
    // HERO — Barbados feel: coral stone buildings, low-rise tropical architecture, calm harbour
    name: "hero-dark-caribbean",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "16:9",
    prompt:
      "Confident Caribbean male executive in a sharp dark suit sitting at a sleek modern glass desk reviewing an interactive HTML business proposal on a MacBook Pro, large floor-to-ceiling windows behind him showing a Barbados coastal scene at golden hour — calm turquoise harbour water, low-rise coral stone and white colonial buildings along the waterfront, palm trees, no skyscrapers, warm amber and deep navy tones, premium B2B corporate atmosphere, cinematic shallow depth of field, photorealistic, ultra high detail",
  },
  {
    // INDUSTRY: Agencies — Caribbean creative studio, digital work
    name: "industry-agencies",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "3:2",
    prompt:
      "Modern Caribbean creative agency studio interior, exposed concrete walls with colourful campaign artwork pinned up, large iMac screens showing vibrant digital pitch decks, warm natural daylight through open louvred windows, tropical plants, young diverse team working at standing desks, gold and navy brand palette, energetic creative atmosphere, photorealistic",
  },
  {
    // INDUSTRY: Construction — Caribbean contractor, home services
    name: "industry-construction",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "3:2",
    prompt:
      "Caribbean construction site with a newly built coral stone residential home, a professional contractor in a hard hat and business casual shirt reviewing architectural blueprints on a tablet, bright tropical sunshine, lush green garden, ocean visible in the background, trustworthy and professional atmosphere, photorealistic",
  },
  {
    // INDUSTRY: Corporate — FMCG regional brand, Caribbean boardroom
    name: "industry-corporate",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "3:2",
    prompt:
      "Sleek Caribbean corporate boardroom with glass walls overlooking a tropical city skyline, three executives in sharp business attire reviewing FMCG product branding documents spread across a modern conference table, dark navy and gold interior design, premium corporate atmosphere, soft directional lighting, photorealistic",
  },
  {
    // INDUSTRY: Hospitality — Caribbean resort, tourism service provider
    name: "industry-hospitality",
    ext: "jpg",
    model: "nano-banana-2",
    resolution: "2K",
    aspect_ratio: "3:2",
    prompt:
      "Luxury Caribbean beachfront resort infinity pool at sunset, pristine white sand, calm turquoise water, elegant open-air pavilion with dark wood and white linen, a hospitality manager in smart resort attire using an iPad, warm golden hour light, aspirational premium travel atmosphere, photorealistic",
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

async function pollTask(taskId, maxAttempts = 72, intervalMs = 5000) {
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
    if (i % 6 === 0) console.log(`  [${taskId.slice(-6)}] waiting… (${(i * intervalMs) / 1000}s)`);
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
  console.log(`Submitting ${images.length} tasks…\n`);

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

  console.log("\nDone. Hard-refresh http://localhost:3001");
}

main().catch(console.error);
