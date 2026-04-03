"use client";

import { useEffect, useMemo, useState } from "react";
import { cn, Icon, Reveal } from "@/app/_components/shared";

type Plan = {
  title: string;
  icon: "mountain" | "hotel";
  subtitle?: string;
  price: string;
  earlyBird: string;
  features: string[];
  popular: boolean;
};

const plans: Plan[] = [
  {
    title: "Adventure Plan",
    icon: "mountain",
    subtitle: "1 Night / 2 Days Plan",
    price: "₹5,499",
    earlyBird: "₹4,699",
    features: [
      "Transport: Volvo Delhi to Dharamshala",
      "Triund Trek (Guide Experience)",
      "Camping under the stars",
      "Bonfire Night",
      "Dinner and Breakfast",
      "Group photograph and fun activities",
      "Meet new connections",
    ],
    popular: false,
  },
  {
    title: "Resort Plan",
    icon: "hotel",
    subtitle: "2 Nights / 3 Days Plan",
    price: "₹6,999",
    earlyBird: "₹5,799",
    features: [
      "Transport: Volvo Delhi to Dharamshala",
      "Hotel stay (1 night)",
      "McLeod Ganj market",
      "Dalai Lama Monastery",
      "HPCA Stadium",
      "Triund Trek (Guide Experience)",
      "Camping under the stars",
      "Bonfire Night",
      "Dinner and Breakfast",
      "Group photograph and fun activities",
      "Meet new connections",
    ],
    popular: true,
  },
];

export default function PricingSection() {
  const [open, setOpen] = useState(false);
  const [unlockedPackages, setUnlockedPackages] = useState({
    adventure: false,
    resort: false,
  });
  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    email: "",
    package: "adventure" as "adventure" | "resort",
  });

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const onOpenBookingForm = (event: Event) => {
      const detail = (event as CustomEvent).detail as { package?: unknown } | undefined;
      const pkg = detail?.package === "resort" ? "resort" : "adventure";
      setForm((s) => ({ ...s, package: pkg }));
      setOpen(true);
    };

    window.addEventListener("we:open-booking-form", onOpenBookingForm as EventListener);
    return () => window.removeEventListener("we:open-booking-form", onOpenBookingForm as EventListener);
  }, []);

  const quickWhatsAppHref = useMemo(() => {
    const message = [
      "Hi! I want to book a weekend escape.",
      "",
      `Name: ${form.fullName.trim() || "-"}`,
      `Contact: ${form.contact.trim() || "-"}`,
      `Email: ${form.email.trim() || "-"}`,
      `Package: ${form.package === "adventure" ? "Adventure" : "Resort"}`,
    ].join("\n");

    return `https://wa.me/919643906583?text=${encodeURIComponent(message)}`;
  }, [form]);

  const openForPlan = (pkg: "adventure" | "resort") => {
    setForm((s) => ({ ...s, package: pkg }));
    setOpen(true);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(quickWhatsAppHref, "_blank", "noreferrer");
    setUnlockedPackages({ adventure: true, resort: true });
    setOpen(false);
  };

  return (
    <section
      id="pricing"
      className="bg-[linear-gradient(180deg,#0ea5e9_0%,#7dd3fc_38%,#e0f2fe_70%,#ffffff_100%)] py-14 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            No hidden costs. No surprises.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan, idx) => {
            const pkg = plan.icon === "mountain" ? "adventure" : "resort";
            const unlocked = unlockedPackages[pkg];

            return (
              <Reveal
                key={plan.title}
                delayMs={150 * idx}
                className={cn(
                  "relative rounded-3xl border border-border bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)]",
                  plan.popular ? "ring-2 ring-brand/30" : "",
                )}
              >
                {plan.popular ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                ) : null}

                <div className="mb-6 flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft">
                    {plan.icon === "mountain" ? (
                      <Icon className="text-brand" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                    ) : (
                      <Icon
                        className="text-brand"
                        path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="font-heading text-xl font-extrabold text-navy">{plan.title}</div>
                    {plan.subtitle ? (
                      <div className="mt-0.5 text-sm font-semibold text-foreground/60">{plan.subtitle}</div>
                    ) : null}
                  </div>
                </div>

                <div className="mb-6">
                  <div className={cn("font-heading text-4xl font-extrabold text-navy", unlocked ? "" : "select-none blur-sm")}>
                    {plan.earlyBird}
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-foreground/70">
                    <span className="transition line-through">{plan.price}</span>
                    <span className="rounded-full border border-border bg-brand-soft px-2.5 py-1 text-xs font-bold text-brand">
                      Original Price
                    </span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3 text-sm text-foreground/75">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-success-strong">✓</span>
                      <span className="font-semibold">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="grid gap-3">
                  <button
                    type="button"
                    className="we-button inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:bg-brand-hover"
                    onClick={() => openForPlan(pkg)}
                  >
                    See Price
                  </button>
                  <a
                    href={plan.icon === "hotel" ? "/comfort" : "#itinerary"}
                    className="we-button inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-white px-7 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
                  >
                    Read More
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={200} className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-semibold text-white/80">
          <Icon className="text-white/80" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
          <span>Limited seats only — weekends fill fast · Instant confirmation · No hidden costs</span>
        </Reveal>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-50",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-hidden="true" />
        <div className="absolute inset-0 grid place-items-center px-5 py-8">
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_90px_rgba(15,23,42,0.28)]"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <div>
                <div className="font-heading text-lg font-extrabold text-navy">Talk to Expert</div>
                <div className="mt-0.5 text-sm font-semibold text-foreground/60">Fill your details and select a package.</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="we-button grid h-10 w-10 place-items-center rounded-2xl border border-border bg-white text-foreground shadow-sm transition hover:bg-white/80"
                aria-label="Close"
              >
                <Icon className="text-foreground" path="M6 6l12 12M18 6l-12 12" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="grid gap-5 p-6">
              <label className="grid gap-1.5">
                <span className="text-sm font-semibold text-foreground/80">Full Name</span>
                <input
                  value={form.fullName}
                  onChange={(e) => setForm((s) => ({ ...s, fullName: e.target.value }))}
                  required
                  className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-foreground/40 focus:border-brand/60"
                  placeholder="Your full name"
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-sm font-semibold text-foreground/80">Contact</span>
                <input
                  value={form.contact}
                  onChange={(e) => setForm((s) => ({ ...s, contact: e.target.value }))}
                  required
                  inputMode="tel"
                  className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-foreground/40 focus:border-brand/60"
                  placeholder="Your phone number"
                />
              </label>

              <label className="grid gap-1.5">
                <span className="text-sm font-semibold text-foreground/80">Email</span>
                <input
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  required
                  type="email"
                  className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-foreground/40 focus:border-brand/60"
                  placeholder="name@company.com"
                />
              </label>

              <div className="grid gap-2">
                <div className="text-sm font-semibold text-foreground/80">Package</div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <label
                    className={cn(
                      "we-button flex h-11 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-border bg-white px-4 text-sm font-semibold text-foreground transition hover:bg-white/80",
                      form.package === "adventure" ? "border-brand/60 ring-2 ring-brand/20" : "",
                    )}
                  >
                    <input
                      type="radio"
                      name="package"
                      value="adventure"
                      checked={form.package === "adventure"}
                      onChange={() => setForm((s) => ({ ...s, package: "adventure" }))}
                      className="sr-only"
                    />
                    <Icon className="text-foreground" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                    <span>Adventure</span>
                  </label>
                  <label
                    className={cn(
                      "we-button flex h-11 cursor-pointer items-center justify-center gap-2 rounded-2xl border border-border bg-white px-4 text-sm font-semibold text-foreground transition hover:bg-white/80",
                      form.package === "resort" ? "border-brand/60 ring-2 ring-brand/20" : "",
                    )}
                  >
                    <input
                      type="radio"
                      name="package"
                      value="resort"
                      checked={form.package === "resort"}
                      onChange={() => setForm((s) => ({ ...s, package: "resort" }))}
                      className="sr-only"
                    />
                    <Icon
                      className="text-foreground"
                      path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                    />
                    <span>Resort</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="we-button inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:bg-brand-hover"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
