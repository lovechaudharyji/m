"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
    subtitle: "3 Nights / 2 Days Plan",
    price: "₹4,499",
    earlyBird: "₹3,999",
    features: [
      "Departure from Delhi NCR (MountAura Traveller)",
      "Ice-breaker games & group introductions",
      "Arrival in Kangra Valley",
      "Hotel check-in & freshen up (Breakfast and rest)",
      "Visit Bhagsu Nag Temple & natural pool",
      "Start Triund trek (Scenic viewpoints & Dhauladhar view)",
      "Reach Triund Top & camp setup",
      "Bonfire, games & social time (Dinner at campsite)",
      "Sunrise view over Dhauladhar peaks (Breakfast at campsite)",
      "Visit Dalai Lama Monastery (if time permits)",
      "Explore McLeodganj Market",
      "Departure from Dharamshala (Arrival in Delhi NCR)",
    ],
    popular: false,
  },
  {
    title: "Resort Plan",
    icon: "hotel",
    subtitle: "4 Nights / 3 Days Plan",
    price: "₹6,999",
    earlyBird: "₹5,799",
    features: [
      "Departure from Delhi NCR (MountAura Traveller)",
      "Ice-breaker games & group introductions",
      "Arrival in Kangra Valley",
      "Maa Chamunda Devi Temple",
      "Dalai Lama Monastery",
      "McLeodganj Hotel Check-in + Market Walk",
      "Breakfast",
      "Bhagsu Nag Temple + Natural Swimming Pool",
      "Bhagsu Waterfall + Spiritual Aura",
      "Dalai Lama Monastery",
      "Dinner (Himachal Pradesh Special Kangri Dham) + Overnight Stay",
      "Breakfast",
      "Start Triund trek (Scenic viewpoints & Dhauladhar view)",
      "Reach Triund Top & camp setup",
      "Bonfire, games & social time (Dinner at campsite)",
      "Sunrise view over Dhauladhar peaks (Breakfast at campsite)",
      "HPCA Dharamshala Cricket Stadium",
      "Tea Gardens",
      "Return Departure",
    ],
    popular: true,
  },
];

export default function PricingSection() {
  const [open, setOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const restoreFocusTimeoutRef = useRef<number | null>(null);
  const autoCloseTimeoutRef = useRef<number | null>(null);
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
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const closeModal = () => {
    if (autoCloseTimeoutRef.current !== null) {
      window.clearTimeout(autoCloseTimeoutRef.current);
      autoCloseTimeoutRef.current = null;
    }
    if (restoreFocusTimeoutRef.current !== null) {
      window.clearTimeout(restoreFocusTimeoutRef.current);
      restoreFocusTimeoutRef.current = null;
    }
    setOpen(false);
    setSubmitState("idle");
    setSubmitError("");
    const el = lastFocusRef.current;
    restoreFocusTimeoutRef.current = window.setTimeout(() => el?.focus?.(), 0);
  };

  useEffect(() => {
    setPortalReady(true);
    return () => {
      if (autoCloseTimeoutRef.current !== null) {
        window.clearTimeout(autoCloseTimeoutRef.current);
        autoCloseTimeoutRef.current = null;
      }
      if (restoreFocusTimeoutRef.current !== null) {
        window.clearTimeout(restoreFocusTimeoutRef.current);
        restoreFocusTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 0);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    const onOpenBookingForm = (event: Event) => {
      const detail = (event as CustomEvent).detail as { package?: unknown } | undefined;
      const pkg = detail?.package === "resort" ? "resort" : "adventure";
      lastFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setForm((s) => ({ ...s, package: pkg }));
      setSubmitState("idle");
      setSubmitError("");
      setOpen(true);
    };

    window.addEventListener("we:open-booking-form", onOpenBookingForm as EventListener);
    return () => window.removeEventListener("we:open-booking-form", onOpenBookingForm as EventListener);
  }, []);

  const openForPlan = (pkg: "adventure" | "resort") => {
    if (autoCloseTimeoutRef.current !== null) {
      window.clearTimeout(autoCloseTimeoutRef.current);
      autoCloseTimeoutRef.current = null;
    }
    if (restoreFocusTimeoutRef.current !== null) {
      window.clearTimeout(restoreFocusTimeoutRef.current);
      restoreFocusTimeoutRef.current = null;
    }
    lastFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setForm((s) => ({ ...s, package: pkg }));
    setSubmitState("idle");
    setSubmitError("");
    setOpen(true);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState === "submitting") return;
    setSubmitState("submitting");
    setSubmitError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          contact: form.contact,
          email: form.email,
          package: form.package,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string; details?: string; status?: number }
          | null;
        const message = data?.error?.trim() || "Could not save details. Please try again.";
        const details = data?.details?.trim();
        throw new Error(details ? `${message} (${details})` : message);
      }

      setUnlockedPackages({ adventure: true, resort: true });
      setSubmitState("success");
      if (autoCloseTimeoutRef.current !== null) {
        window.clearTimeout(autoCloseTimeoutRef.current);
        autoCloseTimeoutRef.current = null;
      }
      autoCloseTimeoutRef.current = window.setTimeout(() => {
        setForm((s) => ({ ...s, fullName: "", contact: "", email: "" }));
        closeModal();
      }, 1200);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Could not save details. Please try again.");
      setSubmitState("error");
    }
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
                  {plan.features.map((f, idx) => (
                    <li key={`${plan.title}-${idx}`} className="flex items-center gap-2">
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
                    <span className="inline-flex items-center justify-center gap-2">
                      <Icon className="text-white" path="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z M4 20v-1a6 6 0 0112 0v1H4z M16 20v-1c0-1.2-.35-2.31-.95-3.25A6 6 0 0120 19v1h-4z" />
                      <span>See Price</span>
                    </span>
                  </button>
                  <a
                    href={plan.icon === "hotel" ? "/comfort" : "/adventure"}
                    className="we-button inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-white px-7 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      <Icon className="text-foreground" path="M14 3h7v7 M10 14L21 3 M5 7h4 M5 12h6 M5 17h10" />
                      <span>Read More</span>
                    </span>
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={200} className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-semibold text-black">
          <Icon className="text-black" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
          <span>Limited seats only — weekends fill fast · Instant confirmation · No hidden costs</span>
        </Reveal>
      </div>

      {portalReady && open
        ? createPortal(
            <div className="fixed inset-0 z-50">
              <div className="absolute inset-0 bg-black/40" onClick={closeModal} aria-hidden="true" />
              <div className="absolute inset-0 overflow-y-auto">
                <div className="min-h-full flex items-start justify-center px-5 py-8 sm:items-center">
                  <div
                    role="dialog"
                    aria-modal="true"
                    className="w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_90px_rgba(15,23,42,0.28)]"
                  >
                    <div className="flex items-center justify-between border-b border-border px-6 py-5">
                      <div>
                        <div className="font-heading text-lg font-extrabold text-navy">Talk to Expert</div>
                        <div className="mt-0.5 text-sm font-semibold text-foreground/60">
                          Fill your details and select a package.
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={closeModal}
                        className="we-button grid h-10 w-10 place-items-center rounded-2xl border border-border bg-white text-foreground shadow-sm transition hover:bg-white/80"
                        aria-label="Close"
                      >
                        <Icon className="text-foreground" path="M6 6l12 12M18 6l-12 12" />
                      </button>
                    </div>

                    <form onSubmit={onSubmit} className="grid gap-5 p-6">
                      {submitState === "success" ? (
                        <div className="rounded-2xl border border-success/30 bg-success-soft px-4 py-3 text-sm font-semibold text-foreground">
                          <div className="flex items-center gap-2">
                            <Icon className="text-success-strong" path="M20 6L9 17l-5-5" />
                            <span>Submitted! We&apos;ll contact you shortly.</span>
                          </div>
                        </div>
                      ) : null}
                      {submitState === "error" ? (
                        <div className="rounded-2xl border border-[#ef4444]/30 bg-[#fef2f2] px-4 py-3 text-sm font-semibold text-foreground">
                          <div className="flex items-center gap-2">
                            <Icon
                              className="text-[#ef4444]"
                              path="M12 9v4m0 4h.01M10.29 3.86l-7.4 12.82A2 2 0 004.62 20h14.76a2 2 0 001.73-3.32l-7.4-12.82a2 2 0 00-3.42 0z"
                            />
                            <span>{submitError || "Could not save details. Please try again."}</span>
                          </div>
                        </div>
                      ) : null}
                      <label className="grid gap-1.5">
                        <span className="text-sm font-semibold text-foreground/80">Full Name</span>
                        <input
                          ref={firstFieldRef}
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
                        disabled={submitState === "submitting" || submitState === "success"}
                        className="we-button inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_20px_70px_rgba(0,0,0,0.25)] transition duration-300 hover:bg-brand-hover"
                      >
                        {submitState === "submitting" ? "Saving..." : submitState === "success" ? "Saved" : "Submit"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
