"use client";

import { Icon, Reveal } from "@/app/_components/shared";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-14 sm:py-20 bg-[linear-gradient(180deg,#0ea5e9_0%,#7dd3fc_38%,#e0f2fe_70%,#ffffff_100%)]"
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
            Two Ways to Experience
          </h2>
          <p className="mt-4 text-base text-foreground/70 sm:text-lg">Same trip. Different vibes.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Reveal className="group overflow-hidden rounded-3xl border border-border bg-card/70 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md">
            <div className="relative h-56 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/gallery-trek.jpg')" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.55))]" />
              <div className="absolute bottom-4 left-6 font-heading text-2xl font-extrabold text-white">
                <span className="inline-flex items-center gap-2">
                  <Icon className="text-white" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                  <span>Adventure Track</span>
                </span>
              </div>
            </div>
            <div className="space-y-4 p-6">
              {[
                { icon: "mountain", text: "Triund Trek" },
                { icon: "tent", text: "Camping Under Stars" },
                { icon: "flame", text: "Bonfire & Stories" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-success-soft">
                    {f.icon === "mountain" ? (
                      <Icon className="text-success-strong" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                    ) : f.icon === "tent" ? (
                      <Icon className="text-success-strong" path="M3 20L12 4l9 16M12 4v16" />
                    ) : (
                      <Icon
                        className="text-success-strong"
                        path="M12 22c4-3 6-6 6-10a6 6 0 00-12 0c0 4 2 7 6 10z"
                      />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            delayMs={80}
            className="group overflow-hidden rounded-3xl border border-border bg-card/70 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-56 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/gallery-resort.jpg')" }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.55))]" />
              <div className="absolute bottom-4 left-6 font-heading text-2xl font-extrabold text-white">
                <span className="inline-flex items-center gap-2">
                  <Icon
                    className="text-white"
                    path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                  />
                  <span>Comfort Track</span>
                </span>
              </div>
            </div>
            <div className="space-y-4 p-6">
              {[
                { icon: "hotel", text: "Premium Resort Stay" },
                { icon: "music", text: "Music & Chill" },
                { icon: "wine", text: "Gourmet Experience" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft">
                    {f.icon === "hotel" ? (
                      <Icon
                        className="text-brand"
                        path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                      />
                    ) : f.icon === "music" ? (
                      <Icon
                        className="text-brand"
                        path="M9 18V5l12-2v13M9 18a2 2 0 11-4 0 2 2 0 014 0zm12-2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    ) : (
                      <Icon className="text-brand" path="M8 2h8v6a4 4 0 01-8 0V2zM6 22h12" />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{f.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
