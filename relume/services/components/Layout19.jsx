"use client";

import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function Layout19() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Proposals</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Interactive HTML proposals that close Caribbean deals
            </h2>
            <p className="mb-5 md:mb-6 md:text-md">
              Stop sending static PDFs. Send trackable, mobile-ready proposals
              that show you exactly when prospects engage, what they read, and
              when they're ready to sign. Built for agencies, construction
              firms, corporate brands, and hospitality leaders across the
              Caribbean.
            </p>
            <ul className="my-4 list-disc pl-5">
              <li className="my-1 self-start pl-2">
                <p>Real-time engagement tracking and read analytics</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Integrated e-signature and payment processing</p>
              </li>
              <li className="my-1 self-start pl-2">
                <p>Mobile-responsive design for island markets</p>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Start" variant="secondary">
                Start
              </Button>
              <Button
                title="Details"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Details
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/services-feature.jpg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
