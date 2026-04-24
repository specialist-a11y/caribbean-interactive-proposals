"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

const STEPS = [
  {
    number: "01",
    title: "Audit",
    desc: "We review your existing proposal structure and identify the conversion gaps costing you deals.",
    accent: "var(--cip-gold)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="2.5" opacity="0.9" />
        <path d="M31 31 L40 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        <path d="M17 22 h10 M22 17 v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
    detail: "PDF analysis · Gap report · Strategy call",
  },
  {
    number: "02",
    title: "Build",
    desc: "Our team designs and launches your interactive web proposal — live in days, not weeks.",
    accent: "var(--cip-coral)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" opacity="0.9" />
        <path d="M16 38 h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <path d="M24 34 v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <rect x="14" y="18" width="8" height="5" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="26" y="18" width="8" height="2" rx="1" fill="currentColor" opacity="0.3" />
        <rect x="26" y="22" width="5" height="2" rx="1" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    detail: "Brand design · Pricing calculator · E-signature",
  },
  {
    number: "03",
    title: "Send & Close",
    desc: "Deploy to prospects and watch real-time analytics show exactly when and how they engage.",
    accent: "#5cb85c",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path d="M8 24 L20 36 L40 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        <circle cx="20" cy="36" r="3" fill="currentColor" opacity="0.4" />
        <circle cx="40" cy="12" r="3" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    detail: "Live analytics · View tracking · Follow-up alerts",
  },
];

export function Timeline18() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--cip-navy-dark)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p
              className="mb-3 font-semibold md:mb-4"
              style={{ color: "var(--cip-gold)" }}
            >
              Process
            </p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              From PDF to closed deal in days
            </h2>
            <p className="md:text-md" style={{ color: "var(--cip-muted)" }}>
              Three steps from your current static proposal to an interactive
              proposal that tracks every view and closes deals faster.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Button title="Get started" variant="secondary">
                Get started
              </Button>
              <Button
                title="See how it works"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                See how it works
              </Button>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Connector line (desktop only, between cards) */}
              {i < STEPS.length - 1 && (
                <div
                  className="absolute right-0 top-[3.25rem] hidden h-[2px] w-1/2 translate-x-full md:block"
                  style={{ background: `linear-gradient(to right, ${step.accent}, ${STEPS[i + 1].accent})`, opacity: 0.35, zIndex: 1 }}
                />
              )}

              <div
                className="relative mx-3 flex flex-col rounded-sm p-8 md:mx-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderTop: `3px solid ${step.accent}`,
                }}
              >
                {/* Step number badge */}
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="text-5xl font-black leading-none tracking-tight opacity-20"
                    style={{ color: step.accent }}
                  >
                    {step.number}
                  </span>
                  <div style={{ color: step.accent }}>{step.icon}</div>
                </div>

                <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                  {step.title}
                </h3>
                <p className="mb-6 leading-relaxed" style={{ color: "var(--cip-muted)" }}>
                  {step.desc}
                </p>

                {/* Detail tags */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {step.detail.split(" · ").map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm px-2.5 py-1 text-xs font-medium"
                      style={{
                        background: `${step.accent}18`,
                        color: step.accent,
                        border: `1px solid ${step.accent}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile vertical connector */}
              {i < STEPS.length - 1 && (
                <div
                  className="mx-auto my-2 w-[2px] md:hidden"
                  style={{ height: 32, background: `linear-gradient(to bottom, ${step.accent}, ${STEPS[i + 1].accent})`, opacity: 0.35 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
