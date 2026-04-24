"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Layout369() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Offerings</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              What we deliver
            </h2>
            <p className="md:text-md">
              Relationship-driven solutions built for Caribbean business growth
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 border border-border-primary sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Proposals</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Interactive HTML business proposals for high-ticket deals
                  </h3>
                  <p>
                    Track engagement, close faster, seal agreements across the
                    region
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
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
              <div className="flex items-center justify-center">
                <img
                  src="/images/services-portrait.jpg"
                  alt="Relume placeholder image 3"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Strategy</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Deal-closing strategy
                  </h3>
                  <p>
                    Audit your current process and unlock hidden revenue
                    opportunities
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Discuss"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Discuss
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/services-feature.jpg"
                  alt="Relume placeholder image 1"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col border border-border-primary">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold">Strategy</p>
                  <h3 className="mb-2 text-xl font-bold md:text-2xl">
                    Deal-closing strategy
                  </h3>
                  <p>
                    Audit your current process and unlock hidden revenue
                    opportunities
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Button
                    title="Discuss"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Discuss
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/services-feature.jpg"
                  alt="Relume placeholder image 2"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
