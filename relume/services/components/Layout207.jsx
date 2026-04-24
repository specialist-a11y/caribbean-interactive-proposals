"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Layout207() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="/images/services-feature.jpg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="mb-3 font-semibold md:mb-4">Strategy</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Sales enablement for Caribbean markets
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Optimize your proposal process and master the closing techniques
              that work across CARICOM. We audit your current approach and
              unlock the revenue sitting on the table.
            </p>
            <div className="grid grid-cols-1 gap-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>Proposal optimization tailored to regional dynamics</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>Digital sales process refinement for Caribbean teams</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume logo"
                    className="size-6"
                  />
                </div>
                <p>Closing techniques proven in island and mainland markets</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Discuss" variant="secondary">
                Discuss
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
      </div>
    </section>
  );
}
