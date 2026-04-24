"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const INDUSTRY_ACCENTS = [
  "var(--cip-gold)",
  "#5ca85c",
  "var(--cip-coral)",
  "#7b68ee",
];

const INDUSTRIES = [
  {
    label: "Agencies",
    title: "Digital agencies pitching regional campaigns",
    desc: "Showcase creative work with interactive mockups",
    img: "/images/industry-agencies.jpg",
  },
  {
    label: "Construction",
    title: "Home services and building contractors",
    desc: "Present project timelines and material costs dynamically",
    img: "/images/industry-construction.jpg",
  },
  {
    label: "Corporate",
    title: "FMCG and regional brand partnerships",
    desc: "Multi-currency pricing for CARICOM expansion",
    img: "/images/industry-corporate.jpg",
  },
  {
    label: "Hospitality",
    title: "Tourism and resort service providers",
    desc: "Embed pricing, availability, and booking links seamlessly",
    img: "/images/industry-hospitality.jpg",
  },
];

export function Layout399() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--cip-navy-dark)" }}
    >
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p
              className="mb-3 font-semibold md:mb-4"
              style={{ color: "var(--cip-gold)" }}
            >
              Industries
            </p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Built for Caribbean business
            </h2>
            <p className="md:text-md" style={{ color: "var(--cip-muted)" }}>
              Every sector benefits from proposals that perform
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <div
              key={industry.label}
              className="flex flex-col overflow-hidden"
              style={{ border: `1px solid rgba(255,255,255,0.07)` }}
            >
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p
                    className="mb-2 text-sm font-semibold"
                    style={{ color: INDUSTRY_ACCENTS[i] }}
                  >
                    {industry.label}
                  </p>
                  <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-2xl">
                    {industry.title}
                  </h3>
                  <p style={{ color: "var(--cip-muted)" }}>{industry.desc}</p>
                </div>
                <div className="mt-5 md:mt-6">
                  <Button
                    title="View"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    View
                  </Button>
                </div>
              </div>
              <div className="w-full overflow-hidden" style={{ height: 160 }}>
                <img
                  src={industry.img}
                  alt={industry.label}
                  className="size-full object-cover"
                  style={{ opacity: 0.85 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
