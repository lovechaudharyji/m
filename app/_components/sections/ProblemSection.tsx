"use client";

import { Icon, Reveal } from "@/app/_components/shared";

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 bg-[linear-gradient(180deg,rgba(14,165,233,0.62)_0%,rgba(56,189,248,0.22)_38%,rgba(224,242,254,1)_70%,rgba(255,255,255,1)_100%)]">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Sound Familiar?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            The modern professional&apos;s dilemma.
          </p>
        </Reveal>

        <div className="mb-14 mt-10 grid gap-6 sm:grid-cols-3">
          {[
            { icon: "clock", text: "No time for long vacations" },
            { icon: "calendarX", text: "Leave approval? Forget it." },
            { icon: "frown", text: "Weekends wasted on the couch" },
          ].map((p, idx) => (
            <Reveal
              key={p.text}
              delayMs={150 * idx}
              className="group relative flex flex-col items-center gap-4 rounded-3xl border border-border bg-white/60 p-8 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_24px_70px_rgba(14,165,233,0.18)]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand/12 transition group-hover:bg-brand/18">
                {p.icon === "clock" ? (
                  <Icon
                    className="text-brand"
                    path="M12 6v6l4 2M12 22a10 10 0 110-20 10 10 0 010 20z"
                  />
                ) : p.icon === "calendarX" ? (
                  <Icon
                    className="text-brand"
                    path="M8 2v4M16 2v4M3 6h18v16H3V6zM9 12l6 6M15 12l-6 6"
                  />
                ) : (
                  <Icon
                    className="text-brand"
                    path="M12 22a10 10 0 110-20 10 10 0 010 20zM8 9h.01M16 9h.01M8 16c1.2-1 2.6-1.5 4-1.5s2.8.5 4 1.5"
                  />
                )}
              </div>
              <p className="font-heading text-lg font-semibold text-foreground">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-brand/30 bg-brand-soft px-8 py-4 shadow-sm">
            <Icon className="text-brand" path="M5 12h14M13 5l7 7-7 7" />
            <span className="font-heading text-xl font-extrabold text-foreground sm:text-2xl">
              We fix that.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
