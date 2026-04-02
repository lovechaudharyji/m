"use client";

import { cn, Icon, Reveal } from "@/app/_components/shared";

const plans = [
  {
    title: "Adventure Plan",
    icon: "mountain",
    price: "₹4,500",
    earlyBird: "₹4,000",
    features: ["Triund Trek", "Camping + Bonfire", "All Meals Included", "Transport Covered", "Expert Guides"],
    popular: false,
  },
  {
    title: "Resort Plan",
    icon: "hotel",
    price: "₹4,000",
    earlyBird: "₹3,700",
    features: ["Premium Resort Stay", "Music & Entertainment", "Gourmet Meals", "Transport Covered", "Leisure Activities"],
    popular: true,
  },
] as const;

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-20">
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">No hidden costs. No surprises.</p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
        {plans.map((plan, idx) => (
          <Reveal
            key={plan.title}
            delayMs={150 * idx}
            className={cn(
              "relative rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur",
              plan.popular ? "ring-2 ring-accent" : "",
            )}
          >
            {plan.popular ? (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                Most Popular
              </div>
            ) : null}

            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black/5">
                {plan.icon === "mountain" ? (
                  <Icon className="text-navy" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                ) : (
                  <Icon
                    className="text-navy"
                    path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                  />
                )}
              </div>
              <div className="font-heading text-xl font-extrabold text-foreground">{plan.title}</div>
            </div>

            <div className="mb-6">
              <span className="font-heading text-4xl font-extrabold text-foreground">{plan.earlyBird}</span>
              <span className="ml-2 text-sm font-semibold text-foreground/50 line-through">{plan.price}</span>
              <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-accent">
                <Icon className="text-accent" path="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                Early Bird Offer
              </div>
            </div>

            <ul className="mb-8 space-y-3 text-sm text-foreground/80">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-success-strong">✓</span>
                  <span className="font-semibold">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#booking"
              className="we-button inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover"
            >
              Reserve Spot
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delayMs={200} className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-semibold text-foreground/60">
        <Icon className="text-foreground/60" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
        <span>Limited seats only — weekends fill fast · Instant confirmation · No hidden costs</span>
      </Reveal>
    </section>
  );
}
