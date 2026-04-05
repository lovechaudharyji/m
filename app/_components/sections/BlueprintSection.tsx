"use client";

import { useState } from "react";
import { cn, Icon, Reveal } from "@/app/_components/shared";

type BlueprintStep = {
  day: string;
  time: string;
  title: string;
  desc: string[];
  side: "left" | "right";
  iconPath: string;
};

const resortSteps: BlueprintStep[] = [
  {
    day: "Thursday",
    time: "Night",
    title: "Departure",
    desc: ["Departure from Delhi NCR (MountAura Traveller)",
      "Ice-breaker games & group introductions",
      "Music, snacks & highway vibes",
      "Overnight journey & rest",],
    side: "right",
    iconPath: "M4 7h16M6 11h12M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z",
  },
  {
    day: "Friday",
    time: "All Day",
    title: "Hotel + Sightseeing",
    desc: [
      "Arrive in Kangra Valley",
      "Maa Chamunda Devi Temple",
      "Visit Dalai Lama Monastery.",
      "McLeodganj Hotel Check-in + Market Walk",
      "Breakfast",
      "Bhagsu Nag Temple + Natural Swimming Pool",
      "Bhagsu Waterfall + Spiritual Aura",
      "Dalai Lama Monastery",
      "Dinner (Himachal Pradesh Special Kangri Dham) + Overnight Stay",
    ],
    side: "left",
    iconPath:
      "M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4",
  },
  {
    day: "Saturday",
    time: "All Day",
    title: "Triund Trek + Camp",
    desc: [
      "Start Triund trek.",
      "Enjoy beautiful views and waterfalls along the way.",
      "Reach campsite and camp under the stars.",
      "Dinner at campsite.",
      "Activities: bonfire, making new friends, photography, and fun activities.",
      "Overnight stay in camp.",
    ],
    side: "right",
    iconPath: "M3 20l7-12 4 7 3-5 4 10H3z",
  },
  {
    day: "Sunday",
    time: "Evening",
    title: "Return to Delhi",
    desc: [
      "Breakfast at campsite.",
      "Trek down to base.",
      "HPCA Dharamshala Cricket Stadium.",
      "Tea Gardens",
      "Depart for Delhi by bus.",
    ],
    side: "left",
    iconPath: "M10 19l-7-7 7-7M3 12h14a4 4 0 014 4v3",
  },
  {
    day: "Monday",
    time: "Morning",
    title: "Arrive",
    desc: ["Arrive in Delhi."],
    side: "right",
    iconPath: "M12 2v20M5 9l7-7 7 7",
  },
];

const adventureSteps: BlueprintStep[] = [
  {
    day: "Day 0",
    time: "Friday Night",
    title: "Departure & Journey",
    desc: [
      "Departure from Delhi NCR (MountAura Traveller)",
      "Ice-breaker games & group introductions",
      "Music, snacks & highway vibes",
      "Overnight journey & rest",
    ],
    side: "right",
    iconPath: "M4 7h16M6 11h12M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5z",
  },
  {
    day: "Day 1",
    time: "Saturday",
    title: "Trek & Camping Experience",
    desc: [
      "Arrival in Kangra Valley",
      "Hotel check-in & freshen up",
      "Breakfast and rest",
      "Visit Bhagsu Nag Temple & natural pool",
      "Waterfall stop & photos (Bhagsu Waterfall vibes)",
      "Start Triund trek",
      "Scenic viewpoints & photography",
      "Reach Triund Top & camp setup",
      "Make new friends, fun games & strong bonds",
      "Dinner at campsite",
    ],
    side: "left",
    iconPath: "M3 20l7-12 4 7 3-5 4 10H3z",
  },
  {
    day: "Day 2",
    time: "Sunday",
    title: "Sunrise & Return",
    desc: [
      "Sunrise view over Dhauladhar peaks",
      "Breakfast at campsite",
      "Descend from Triund",
      "Visit Dalai Lama Monastery (if time permits)",
      "Explore McLeodganj Market",
      "Return Journey",
      "Departure from Dharamshala",
      "Arrival in Delhi NCR",
    ],
    side: "right",
    iconPath: "M10 19l-7-7 7-7M3 12h14a4 4 0 014 4v3",
  },
];

export default function BlueprintSection() {
  const [plan, setPlan] = useState<"adventure" | "resort">("adventure");
  const steps = plan === "adventure" ? adventureSteps : resortSteps;

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
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              className={cn(
                "we-button inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition duration-300 sm:w-auto",
                plan === "adventure"
                  ? "bg-brand text-white hover:bg-brand-hover"
                  : "border border-white/20 bg-white/10 text-white hover:bg-white/15",
              )}
              onClick={() => setPlan("adventure")}
            >
              <Icon className="text-white" path="M3 20l7-12 4 7 3-5 4 10H3z" />
              <span>Adventure Plan</span>
            </button>
            <button
              type="button"
              className={cn(
                "we-button inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold shadow-sm backdrop-blur transition sm:w-auto",
                plan === "resort"
                  ? "bg-brand text-white hover:bg-brand-hover"
                  : "border border-white/20 bg-white/10 text-white hover:bg-white/15",
              )}
              onClick={() => setPlan("resort")}
            >
              <Icon
                className="text-white"
                path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
              />
              <span>Resort Plan</span>
            </button>
          </div>
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
                      {s.desc.length <= 1 ? (
                        <p className="mt-2 text-sm leading-6 text-white/65">{s.desc[0]}</p>
                      ) : (
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-white/65">
                          {s.desc.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      )}
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
