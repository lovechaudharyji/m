import { Reveal } from "../shared";
import type { ReactNode } from "react";

export default function ShowcaseStripSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(2,132,199,0.14),transparent_60%),linear-gradient(180deg,#0b1220,#0b1a2a)]" />
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-white">
            <div className="relative flex h-28 items-center sm:h-36">
              <Marquee>
                <MarqueeText>your amazing store with Shopify</MarqueeText>
              </Marquee>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="we-marquee w-[200%]">
      <div className="flex w-1/2 flex-nowrap items-center">{children}</div>
      <div className="flex w-1/2 flex-nowrap items-center">{children}</div>
    </div>
  );
}

function MarqueeText({ children }: { children: ReactNode }) {
  return (
    <span className="mr-12 shrink-0 whitespace-nowrap font-heading text-5xl font-extrabold tracking-tight text-foreground/10 sm:text-6xl md:text-7xl">
      {children}
    </span>
  );
}
