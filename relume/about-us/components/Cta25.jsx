"use client";

import { Button } from "@relume_io/relume-ui";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Ready to elevate
        </h2>
        <p className="md:text-md">
          Let's build relationships that close deals across the Caribbean.
          Contact us for a consultation and discover how interactive proposals
          transform your business development.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Contact">Contact</Button>
          <Button title="Learn" variant="secondary">
            Learn
          </Button>
        </div>
      </div>
    </section>
  );
}
