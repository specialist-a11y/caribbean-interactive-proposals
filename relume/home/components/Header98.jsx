"use client";

import { Button } from "@relume_io/relume-ui";

export function Header98() {
  return (
    <section
      id="relume"
      className="px-[5%] py-12 md:py-16 lg:py-20"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <img
        src="/images/hero-dark-caribbean.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
        style={{ zIndex: 0, opacity: 0.55 }}
      />
      <div className="container relative">
        {/* Gold radial accent */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 65% 40%, rgba(201,150,62,0.18) 0%, transparent 55%)",
          }}
        />
        <div className="relative z-10 flex min-h-[34rem] flex-col items-center justify-center p-8 text-center md:min-h-[44rem] md:p-16">
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--cip-gold)" }}
          >
            Caribbean Interactive Proposals
          </p>
          <div className="w-full max-w-2xl">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Close Caribbean deals{" "}
              <em
                className="not-italic"
                style={{ color: "var(--cip-gold)" }}
              >
                faster
              </em>{" "}
              today
            </h1>
            <p
              className="mx-auto max-w-lg text-text-alternative md:text-md"
              style={{ color: "rgba(248,245,240,0.75)" }}
            >
              Stop losing high-ticket proposals to static PDFs. Interactive HTML
              proposals track every view, click, and signature—giving you the
              edge to win more business across the Caribbean.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10">
            <Button title="Get started" variant="primary">
              Get started
            </Button>
            <Button title="Learn more" variant="secondary-alt">
              Learn more
            </Button>
          </div>
        </div>
        {/* Bottom fade */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--cip-navy-dark))",
          }}
        />
      </div>
    </section>
  );
}
