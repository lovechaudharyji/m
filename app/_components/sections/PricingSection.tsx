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
    <section id="pricing" className="py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            No hidden costs. No surprises.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan, idx) => (
            <Reveal
              key={plan.title}
              delayMs={150 * idx}
              className={cn(
                "relative rounded-3xl border border-white/10 bg-white/[0.08] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur",
                plan.popular ? "ring-2 ring-sky-300/70" : "",
              )}
            >
              {plan.popular ? (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-400 px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
              ) : null}

              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                {plan.icon === "mountain" ? (
                  <Icon className="text-sky-200" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                ) : (
                  <Icon
                    className="text-sky-200"
                    path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                  />
                )}
              </div>
                <div className="font-heading text-xl font-extrabold text-white">{plan.title}</div>
              </div>

              <div className="mb-6">
                <span className="font-heading text-4xl font-extrabold text-white">{plan.earlyBird}</span>
                <span className="ml-2 text-sm font-semibold text-white/45 line-through">{plan.price}</span>
                <div className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-sky-200">
                  <Icon className="text-sky-200" path="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                Early Bird Offer
              </div>
              </div>

              <ul className="mb-8 space-y-3 text-sm text-white/75">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-emerald-300">✓</span>
                    <span className="font-semibold">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="we-button inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:bg-brand-hover"
              >
                Reserve Spot
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={200} className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-semibold text-white/70">
          <Icon className="text-white/70" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
          <span>Limited seats only — weekends fill fast · Instant confirmation · No hidden costs</span>
        </Reveal>
      </div>
    </section>
  );
}
