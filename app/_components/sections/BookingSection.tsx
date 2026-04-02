"use client";

import { useState, type FormEvent } from "react";
import { cn, Icon, Reveal } from "@/app/_components/shared";

type BookingSectionProps = {
  whatsappHref: string;
};

export default function BookingSection({ whatsappHref }: BookingSectionProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "adventure" as "adventure" | "resort",
  });

  const [submitState, setSubmitState] = useState<"idle" | "success">("idle");

  const buildWhatsAppUrl = (message: string) => {
    const base = whatsappHref.trim() || "https://wa.me/";
    const hasQuery = base.includes("?");
    const hasTextParam = /[?&]text=/.test(base);

    if (hasTextParam) {
      return base.replace(/([?&]text=)[^&]*/i, `$1${message}`);
    }

    return `${base}${hasQuery ? "&" : "?"}text=${message}`;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi! Reserve my spot.\n\nName: ${form.name || "-"}\nPhone: ${form.phone || "-"}\nEmail: ${form.email || "-"}\nPlan: ${
        form.plan === "adventure" ? "Adventure" : "Resort"
      }\n\nI want instant confirmation if seats are available.`,
    );
    setSubmitState("success");
    window.setTimeout(() => setSubmitState("idle"), 5000);
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
  };

  const quickWhatsAppHref = buildWhatsAppUrl(
    encodeURIComponent("Hi! I want to book my weekend escape. Please share available dates and seats."),
  );

  return (
    <section id="booking" className="relative bg-white py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="grid gap-8 rounded-3xl border border-border bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.14)] lg:grid-cols-2 lg:items-center lg:p-10">
          <div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
              Don&apos;t Scroll.
              <br />
              <span className="text-accent">Book Your Escape.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-foreground/70 sm:text-lg">
              Limited seats. Weekends fill fast. Secure yours now.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="we-button inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover"
              >
                <Icon className="text-white" path="M5 12h14M13 5l7 7-7 7" />
                <span>Join Next Trip</span>
              </a>
              <a
                href={quickWhatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="we-button inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-7 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
            <div className="text-center">
              <div className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                Reserve Your Spot
              </div>
              <div className="mt-2 text-sm text-foreground/70">Instant confirmation. No hidden costs.</div>
            </div>

            <form
              onSubmit={onSubmit}
              className="mt-6 rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-8"
            >
              <div className="grid gap-5">
                {submitState === "success" ? (
                  <div className="rounded-2xl border border-success/30 bg-success-soft px-4 py-3 text-sm font-semibold text-foreground">
                    <div className="flex items-center gap-2">
                      <Icon className="text-success-strong" path="M20 6L9 17l-5-5" />
                      <span>Spot Reserved! We&apos;ll contact you shortly.</span>
                    </div>
                    <div className="mt-1 text-xs font-semibold text-foreground/70">
                      Check WhatsApp for instant confirmation.
                    </div>
                  </div>
                ) : null}

                <label className="grid gap-1.5">
                  <span className="text-sm font-semibold text-foreground/80">Name</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    required
                    className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-foreground/40 focus:border-brand/60"
                    placeholder="Your full name"
                  />
                </label>

                <label className="grid gap-1.5">
                  <span className="text-sm font-semibold text-foreground/80">Phone</span>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                    required
                    inputMode="tel"
                    className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-foreground/40 focus:border-brand/60"
                    placeholder="+91 98765 43210"
                  />
                </label>

                <label className="grid gap-1.5">
                  <span className="text-sm font-semibold text-foreground/80">Email</span>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    required
                    type="email"
                    inputMode="email"
                    className="h-11 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none placeholder:text-foreground/40 focus:border-brand/60"
                    placeholder="name@company.com"
                  />
                </label>

                <div className="grid gap-2">
                  <div className="text-sm font-semibold text-foreground/80">Plan</div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setForm((s) => ({ ...s, plan: "adventure" }))}
                      className={cn(
                        "we-button h-11 rounded-2xl border border-border bg-white px-4 text-sm font-semibold text-foreground transition hover:bg-white/80",
                        form.plan === "adventure" ? "border-brand/60 ring-2 ring-brand/20" : "",
                      )}
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        <Icon className="text-foreground" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                        <span>Adventure</span>
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm((s) => ({ ...s, plan: "resort" }))}
                      className={cn(
                        "we-button h-11 rounded-2xl border border-border bg-white px-4 text-sm font-semibold text-foreground transition hover:bg-white/80",
                        form.plan === "resort" ? "border-brand/60 ring-2 ring-brand/20" : "",
                      )}
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        <Icon
                          className="text-foreground"
                          path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                        />
                        <span>Resort</span>
                      </span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="we-button inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:opacity-95"
                >
                  Reserve via WhatsApp
                </button>

                <div className="text-center text-xs font-semibold text-foreground/60">
                  By submitting, you&apos;ll be redirected to WhatsApp with your details pre-filled.
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
