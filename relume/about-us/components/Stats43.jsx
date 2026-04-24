"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Stats43() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Impact</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Numbers that prove interactive proposals work
            </h2>
            <p className="md:text-md">
              Caribbean businesses using CIP have transformed their deal flow.
              The results speak clearly—faster closes, higher engagement, and
              stronger client relationships across the region.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <div className="border border-border-primary p-8">
              <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
                Deals closed faster
              </h3>
              <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                42%
              </p>
              <div className="my-4 h-px w-full bg-border-primary" />
              <p className="text-right">
                Average reduction in proposal-to-signature time across all
                regions
              </p>
            </div>
            <div className="border border-border-primary p-8">
              <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
                Countries served
              </h3>
              <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                15+
              </p>
              <div className="my-4 h-px w-full bg-border-primary" />
              <p className="text-right">
                CARICOM nations and Caribbean territories actively using our
                platform
              </p>
            </div>
            <div className="border border-border-primary p-8">
              <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
                Client win rate increase
              </h3>
              <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                38%
              </p>
              <div className="my-4 h-px w-full bg-border-primary" />
              <p className="text-right">
                Typical improvement in proposal acceptance rates within first
                six months
              </p>
            </div>
            <div className="border border-border-primary p-8">
              <h3 className="mb-8 text-md font-bold leading-[1.4] md:mb-10 md:text-xl lg:mb-12">
                Average deal value growth
              </h3>
              <p className="text-right text-10xl font-bold leading-[1.3] md:text-[4rem] lg:text-[5rem]">
                27%
              </p>
              <div className="my-4 h-px w-full bg-border-primary" />
              <p className="text-right">
                Clients report higher proposal values and stronger negotiation
                positions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
