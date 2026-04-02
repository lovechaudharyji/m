"use client";

import { cn, Icon, Reveal } from "@/app/_components/shared";

const steps = [
  {
    day: "Friday",
    time: "7:00 PM",
    title: "Departure",
    desc: "Board the bus. Meet your crew. Music, snacks, and good vibes on the road.",
    side: "right" as const,
    iconPath: "M4 7h16M6 11h12M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z",
  },
  {
    day: "Saturday",
    time: "All Day",
    title: "The Experience",
    desc: "Trek to Triund or check into the resort. Bonfire night under a million stars.",
    side: "left" as const,
    iconPath: "M3 20l7-12 4 7 3-5 4 10H3z",
  },
  {
    day: "Sunday",
    time: "Evening",
    title: "Return Home",
    desc: "Back in the city by evening. Refreshed, recharged, ready for Monday.",
    side: "right" as const,
    iconPath: "M10 19l-7-7 7-7M3 12h14a4 4 0 014 4v3",
  },
] as const;

export default function BlueprintSection() {
  return (
    <section id="itinerary" className="relative py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Your Weekend Blueprint
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            48 hours. Maximum impact.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />

          <div className="space-y-8 sm:space-y-10">
            {steps.map((s, idx) => (
              <Reveal key={s.title} delayMs={120 * idx} className="relative">
                <div className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 lg:block">
                  <div className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.10)]" />
                </div>

                <div
                  className={cn(
                    "mx-auto w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur",
                    "lg:w-[calc(50%-2.25rem)]",
                    s.side === "right" ? "lg:ml-[calc(50%+2.25rem)]" : "lg:mr-[calc(50%+2.25rem)]",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-500/15">
                      <Icon className="text-sky-300" path={s.iconPath} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <div className="text-sm font-semibold text-white/85">{s.day}</div>
                        <div className="text-xs font-semibold text-white/50">{s.time}</div>
                      </div>
                      <div className="mt-1 font-heading text-lg font-extrabold tracking-tight text-white">{s.title}</div>
                      <p className="mt-2 text-sm leading-6 text-white/65">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
