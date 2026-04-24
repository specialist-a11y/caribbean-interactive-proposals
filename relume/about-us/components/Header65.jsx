"use client";

import { Button } from "@relume_io/relume-ui";

export function Header65() {
  return (
    <section id="relume" style={{ background: "var(--cip-hero-gradient)" }} className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-3 font-semibold text-text-alternative md:mb-4">
          About
        </p>
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Who we are
        </h1>
        <p className="text-text-alternative md:text-md">
          We modernize how Caribbean businesses win deals by replacing static
          PDFs with interactive, trackable proposals that clients actually
          engage with.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Explore">Explore</Button>
          <Button title="Discover" variant="secondary-alt">
            Discover
          </Button>
        </div>
      </div>
      <img
        src="/images/hero-dark-caribbean.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
        style={{ zIndex: 0, opacity: 0.5 }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          zIndex: 1,
          background: "radial-gradient(ellipse at 70% 45%, rgba(201,150,62,0.12) 0%, transparent 55%)",
        }}
      />
    </section>
  );
}
