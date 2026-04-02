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
    <section id="faq" className="relative overflow-hidden py-14 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_10%_0%,rgba(14,165,233,0.14),transparent_60%),radial-gradient(900px_circle_at_90%_10%,rgba(2,132,199,0.12),transparent_60%),linear-gradient(180deg,rgba(255,255,255,1),rgba(255,255,255,1))]" />
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4">
            <div className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur">
              <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                Support
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                FAQs
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground/70">
                Clear answers for a smooth booking and a hassle-free weekend.
              </p>

              <div className="mt-6 grid gap-3 text-sm font-semibold text-foreground/70">
                <div className="flex items-center gap-2">
                  <Icon className="text-brand" path="M20 6L9 17l-5-5" />
                  <span>Instant confirmation on WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon className="text-brand" path="M8 2v4M16 2v4M3 6h18v16H3V6zM7 13l2 2 4-4" />
                  <span>Weekend-friendly schedule</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon className="text-brand" path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <span>Safe & organized experience</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl border border-border bg-card/70 shadow-sm backdrop-blur">
              <div className="divide-y divide-border">
                {faqs.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <Reveal key={item.q} delayMs={70 * idx} className="px-6 py-5 sm:px-8">
                      <button
                        type="button"
                        className="glass-hover flex w-full items-start justify-between gap-5 text-left"
                        onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
                      >
                        <div className="min-w-0">
                          <div className="font-heading text-base font-extrabold text-foreground sm:text-lg">
                            {item.q}
                          </div>
                          <div className="mt-1 text-sm text-foreground/60">Click to view details</div>
                        </div>
                        <div
                          className={cn(
                            "glass-hover grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-border bg-white/60 text-brand shadow-sm backdrop-blur transition",
                            isOpen ? "bg-brand text-white" : "hover:bg-white",
                          )}
                        >
                          {isOpen ? (
                            <Icon className={isOpen ? "text-white" : "text-brand"} path="M5 12h14" />
                          ) : (
                            <Icon className={isOpen ? "text-white" : "text-brand"} path="M12 5v14M5 12h14" />
                          )}
                        </div>
                      </button>

                      <div
                        className={cn(
                          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="min-h-0 pt-4 text-sm leading-7 text-foreground/70 sm:text-base">
                          {item.a}
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
