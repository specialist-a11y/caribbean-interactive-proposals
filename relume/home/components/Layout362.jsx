"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

/* Inline mock-ups that will be replaced by generated images once kie.ai credits are topped up.
   Swap src in <img> tags to /images/pdf-messy.jpg and /images/proposal-interactive.jpg */

function PdfMockup() {
  return (
    <div
      className="flex size-full min-h-[200px] flex-col items-center justify-center gap-3 p-6"
      style={{ background: "linear-gradient(145deg, #1a1a2e 0%, #2a2a3e 100%)" }}
    >
      {[90, 70, 85, 60, 75].map((w, i) => (
        <div
          key={i}
          style={{
            height: 8,
            width: `${w}%`,
            background: i === 0 ? "#555" : "#333",
            borderRadius: 2,
            opacity: 0.8,
          }}
        />
      ))}
      <div
        style={{
          marginTop: 8,
          padding: "6px 16px",
          background: "#444",
          borderRadius: 3,
          fontSize: 11,
          color: "#888",
          letterSpacing: "0.05em",
        }}
      >
        proposal_final_v3.pdf
      </div>
    </div>
  );
}

function InteractiveMockup() {
  return (
    <div
      className="flex size-full min-h-[200px] flex-col justify-between p-6"
      style={{
        background: "linear-gradient(145deg, var(--cip-navy) 0%, var(--cip-navy-mid) 100%)",
        borderLeft: "2px solid var(--cip-gold)",
      }}
    >
      <div>
        <div
          style={{
            height: 10,
            width: "55%",
            background: "var(--cip-gold)",
            borderRadius: 2,
            marginBottom: 8,
          }}
        />
        {[80, 65].map((w, i) => (
          <div
            key={i}
            style={{
              height: 6,
              width: `${w}%`,
              background: "rgba(248,245,240,0.25)",
              borderRadius: 2,
              marginBottom: 6,
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <div
          style={{
            flex: 1,
            height: 32,
            background: "var(--cip-gold)",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 700,
            color: "var(--cip-navy-dark)",
            letterSpacing: "0.08em",
          }}
        >
          SIGN & PAY
        </div>
        <div
          style={{
            width: 32,
            height: 32,
            border: "1px solid rgba(201,150,62,0.4)",
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
}

export function Layout362() {
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={{ background: "var(--cip-navy-dark)" }}
    >
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p
              className="mb-3 font-semibold md:mb-4"
              style={{ color: "var(--cip-gold)" }}
            >
              Compare
            </p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              PDF versus interactive
            </h2>
            <p className="md:text-md" style={{ color: "var(--cip-muted)" }}>
              See what you're missing with static documents
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:gap-8 lg:grid-cols-2">
          {/* Problem card */}
          <div
            className="grid grid-cols-1 items-start sm:grid-cols-2"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex h-full flex-col justify-center p-6">
              <p
                className="mb-2 text-sm font-semibold"
                style={{ color: "var(--cip-coral)" }}
              >
                Problem
              </p>
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                Static PDFs kill momentum
              </h3>
              <p style={{ color: "var(--cip-muted)" }}>
                No visibility into client engagement or decision-making
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                <Button
                  title="Explore"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Explore
                </Button>
              </div>
            </div>
            <PdfMockup />
          </div>
          {/* Solution card */}
          <div
            className="grid grid-cols-1 items-start sm:grid-cols-2"
            style={{ border: "1px solid rgba(201,150,62,0.3)" }}
          >
            <div className="flex h-full flex-col justify-center p-6">
              <p
                className="mb-2 text-sm font-semibold"
                style={{ color: "var(--cip-gold)" }}
              >
                Solution
              </p>
              <h3 className="mb-2 text-xl font-bold md:text-2xl">
                Interactive proposals that convert
              </h3>
              <p style={{ color: "var(--cip-muted)" }}>
                Real-time analytics show exactly when clients review pricing
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                <Button
                  title="Discover"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Discover
                </Button>
              </div>
            </div>
            <InteractiveMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
