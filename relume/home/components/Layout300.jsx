"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const FEATURES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.9" />
        <rect x="4" y="14" width="18" height="3" rx="1.5" fill="currentColor" opacity="0.6" />
        <rect x="4" y="20" width="22" height="3" rx="1.5" fill="currentColor" opacity="0.4" />
        <rect x="22" y="18" width="6" height="8" rx="1" fill="currentColor" opacity="0.9" />
      </svg>
    ),
    title: "Interactive pricing tables",
    desc: "Display USD and local currency rates dynamically for regional clients",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 16 L14 22 L24 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      </svg>
    ),
    title: "Integrated e-signatures",
    desc: "Legally binding signatures without leaving the proposal platform",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.5" />
        <rect x="12" y="10" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      </svg>
    ),
    title: "Mobile responsiveness",
    desc: "Clients review proposals on phones and tablets seamlessly",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polyline points="4,24 10,14 16,18 22,8 28,12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        <circle cx="10" cy="14" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="22" cy="8" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
    title: "Read analytics",
    desc: "Know when prospects view, which sections matter, and when to follow up",
  },
];

export function Layout300() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--cip-navy)" }}
    >
      <div className="container">
        <div className="flex flex-col items-start">
          <div className="mx-auto mb-12 w-full max-w-lg items-start justify-between gap-5 md:mb-18 lg:mb-20">
            <p
              className="mb-3 text-center font-semibold md:mb-4"
              style={{ color: "var(--cip-gold)" }}
            >
              Features
            </p>
            <h2 className="mb-5 text-center text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What makes proposals work in the Caribbean
            </h2>
            <p
              className="text-center md:text-md"
              style={{ color: "var(--cip-muted)" }}
            >
              Every feature built for regional business needs. Track engagement,
              close faster, and expand across CARICOM with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="w-full">
                <div
                  className="mb-5 flex items-center justify-center md:mb-6"
                  style={{ color: "var(--cip-gold)", height: 64 }}
                >
                  {f.icon}
                </div>
                <h3 className="mb-3 text-center text-xl font-bold md:mb-4 md:text-2xl">
                  {f.title}
                </h3>
                <p className="text-center" style={{ color: "var(--cip-muted)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
            <Button title="Explore" variant="secondary">
              Explore
            </Button>
            <Button
              title="Learn"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
            >
              Learn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
