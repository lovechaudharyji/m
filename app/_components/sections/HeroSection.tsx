"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, MountReveal, useParallax } from "@/app/_components/shared";

export default function HeroSection() {
  const heroBgRef = useRef<HTMLDivElement | null>(null);
  useParallax(heroBgRef, 0.14);
  const [typedTitle, setTypedTitle] = useState("");

  useEffect(() => {
    const fullText = "Escape the 9–5.";
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setTypedTitle(fullText.slice(0, i));
      if (i >= fullText.length) window.clearInterval(id);
    }, 70);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative z-0 min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div ref={heroBgRef} className="absolute inset-0">
          <div className="absolute inset-0 scale-110">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/hm.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-5 pt-24 text-center sm:pt-28">
        <MountReveal>
          <p className="mb-6 font-heading text-sm font-semibold tracking-widest text-brand uppercase sm:text-base">
            Leave Friday. Return Sunday. Zero Leaves.
          </p>
        </MountReveal>

        <MountReveal delayMs={150}>
          <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="relative inline-flex items-baseline">
              <span aria-label="Escape the 9–5.">{typedTitle}</span>
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[1em] w-[2px] bg-current align-baseline"
                style={{ animation: "we-caret-blink 0.9s step-end infinite" }}
              />
            </span>
            <br />
            <span className="text-brand">Live the Weekend.</span>
          </h1>
        </MountReveal>

        <MountReveal delayMs={300}>
          <p className="mb-10 max-w-2xl font-sans text-base leading-relaxed text-foreground/70 sm:text-lg md:text-xl">
            Friday night departure. Sunday return.
            <br className="hidden sm:block" />
            Adventure or luxury — you choose.
          </p>
        </MountReveal>

        <MountReveal
          delayMs={450}
          className="mb-12 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <a
            href="#booking"
            className="we-button inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand px-8 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover"
          >
            <Icon className="text-white" path="M5 12h14M13 5l7 7-7 7" />
            <span>Book Your Weekend</span>
          </a>
          <a
            href="#pricing"
            className="we-button inline-flex h-14 items-center justify-center rounded-full border border-border bg-white/60 px-8 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition hover:bg-white"
          >
            View Plans
          </a>
        </MountReveal>

        <MountReveal delayMs={600} className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {[
            { icon: "users", text: "100+ Professionals Joined" },
            { icon: "shield", text: "Safe & Organized" },
            { icon: "star", text: "Hassle-Free Experience" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-sm text-foreground/70 shadow-sm backdrop-blur transition hover:bg-white"
            >
              {badge.icon === "users" ? (
                <Icon
                  className="text-brand"
                  path="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.13a4 4 0 010 7.75M20 21v-2a4 4 0 00-3-3.87M10 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : badge.icon === "shield" ? (
                <Icon
                  className="text-brand"
                  path="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                />
              ) : (
                <Icon
                  className="text-brand"
                  path="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              )}
              <span className="font-sans">{badge.text}</span>
            </div>
          ))}
        </MountReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div style={{ animation: "we-float-y 2s ease-in-out infinite" }}>
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-border pt-2">
            <div className="h-2 w-1 rounded-full bg-brand" />
          </div>
        </div>
      </div>
    </section>
  );
}
