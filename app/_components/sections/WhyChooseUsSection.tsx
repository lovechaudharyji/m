"use client";

import { Icon, Reveal } from "@/app/_components/shared";

const reasons = [
  {
    icon: "calendarCheck",
    title: "No Leave Required",
    desc: "Friday night to Sunday. Your manager won’t even know.",
  },
  {
    icon: "shield",
    title: "Safe & Guided",
    desc: "Experienced leaders, first-aid ready, organized trips.",
  },
  {
    icon: "compass",
    title: "Corporate-Friendly",
    desc: "Perfect for team outings and corporate retreats.",
  },
  {
    icon: "shuffle",
    title: "Flexible Plans",
    desc: "Adventure or comfort — switch plans before the trip.",
  },
] as const;

export default function WhyChooseUsSection() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-foreground/70">Built for busy professionals.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              delayMs={100 * i}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-brand/20">
                {r.icon === "calendarCheck" ? (
                  <Icon className="text-brand" path="M8 2v4M16 2v4M3 6h18v16H3V6zM7 13l2 2 4-4" />
                ) : r.icon === "shield" ? (
                  <Icon className="text-brand" path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                ) : r.icon === "compass" ? (
                  <Icon
                    className="text-brand"
                    path="M12 22a10 10 0 110-20 10 10 0 010 20zM14.5 9.5l-2 6-6 2 2-6 6-2z"
                  />
                ) : (
                  <Icon
                    className="text-brand"
                    path="M16 3h5v5M8 21H3v-5M21 8c-2 0-4.5 1-6 2.5S12 14 8 14s-6 2-6 6"
                  />
                )}
              </div>
              <h3 className="font-heading text-lg font-extrabold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{r.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
