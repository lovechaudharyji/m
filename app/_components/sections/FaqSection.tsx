"use client";

import { useState } from "react";
import { cn, Icon, Reveal } from "@/app/_components/shared";

const faqs = [
  {
    q: "Do I need to take leave from work?",
    a: "No. Trips typically start Friday night and wrap up on Sunday, so they fit around a standard 9–5 schedule.",
  },
  {
    q: "Is it suitable for first-timers?",
    a: "Yes. The experience is guided and organized end-to-end with a clear itinerary and support throughout the trip.",
  },
  {
    q: "What is included in the plan?",
    a: "Inclusions depend on the plan you choose. Key items are listed on the pricing cards, and the full itinerary is shared on confirmation.",
  },
  {
    q: "Can I switch between Adventure and Resort?",
    a: "Yes, switching is possible before the trip, subject to availability for the selected date.",
  },
  {
    q: "How do I get pickup details and timings?",
    a: "Once you reserve your spot, we share pickup points, timings, and the checklist on WhatsApp for quick coordination.",
  },
  {
    q: "What should I carry?",
    a: "A government ID, comfortable clothing, a light jacket, personal medication (if any), and essentials like a water bottle and chargers.",
  },
] as const;

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
            FAQs
          </div>
          <h2 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            Clear answers for a smooth booking and a hassle-free weekend.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={item.q} delayMs={70 * idx}>
                <div className="overflow-hidden rounded-3xl border border-border bg-card/70 shadow-sm backdrop-blur">
                  <button
                    type="button"
                    className="glass-hover flex w-full items-center justify-between gap-4 px-6 py-3 text-left sm:px-8 sm:py-3"
                    onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
                  >
                    <div className="min-w-0 font-heading text-base font-extrabold text-navy sm:text-lg">
                      {item.q}
                    </div>
                    <div
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-border bg-white/70 text-brand shadow-sm backdrop-blur transition",
                        isOpen ? "bg-brand text-white" : "hover:bg-white",
                      )}
                    >
                      <div className={cn("transition", isOpen ? "rotate-180" : "")}>
                        <Icon
                          className={isOpen ? "text-white" : "text-brand"}
                          path="M6 9l6 6 6-6"
                        />
                      </div>
                    </div>
                  </button>

                  <div
                    className={cn(
                      "grid overflow-hidden px-6 transition-[grid-template-rows,opacity] duration-300 sm:px-8",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0 pb-5 text-sm leading-7 text-foreground/70 sm:text-base">
                      {item.a}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
