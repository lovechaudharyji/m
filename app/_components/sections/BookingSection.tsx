"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
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
    encodeURIComponent("Hi! I want to book MountAura. Please share available dates and seats."),
  );

  return (
    <section
      id="booking"
      className="relative bg-[linear-gradient(180deg,#0ea5e9_0%,#e0f2fe_55%,#ffffff_100%)] py-14 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="grid gap-8 rounded-3xl border border-border bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.14)] lg:grid-cols-2 lg:items-center lg:p-10">
          <div className="relative overflow-hidden rounded-3xl bg-white">
            <div className="flex flex-col items-center justify-center gap-6 p-8 sm:p-10 lg:h-full">
              <Image
                src="/images/mountaura.png"
                alt="MountAura"
                width={800}
                height={800}
                className="h-52 w-auto object-contain sm:h-72 lg:h-[380px]"
                priority
              />
              <div className="text-center">
                <div className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                  MountAura
                </div>
                <div className="mt-2 text-sm font-semibold text-foreground/70 sm:text-base">
                  Feel the Aura of Mountains
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-6 sm:p-8">
            <div className="text-center">
              <div className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">
                Reserve Your Spot
              </div>
              <div className="mt-2 text-sm text-foreground/70">Instant confirmation. No hidden costs.</div>
            </div>

            <form onSubmit={onSubmit} className="mt-6 grid gap-5">
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
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon className="text-white" path="M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z" />
                  <span>Submit</span>
                </span>
              </button>

              <a
                href={quickWhatsAppHref}
                target="_blank"
                rel="noreferrer"
                className="we-button inline-flex h-12 w-full items-center justify-center rounded-full border border-border bg-white px-7 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon className="text-success-strong" path="M21.05 11.2A9.85 9.85 0 0011.2 1.35a9.85 9.85 0 00-8.4 15l-1.1 4 4.1-1.08A9.86 9.86 0 0011.2 21.05 9.85 9.85 0 0021.05 11.2z M11.2 19.2c-1.63 0-3.2-.42-4.6-1.2l-.33-.2-2.43.64.65-2.37-.22-.35a8.02 8.02 0 01-1.28-4.33 8.04 8.04 0 018.01-8.01 8.05 8.05 0 018.01 8.02 8.04 8.04 0 01-8.01 8.01z M15.86 13.24c-.26-.13-1.54-.76-1.78-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1.01-.15.17-.3.2-.56.07-.26-.13-1.1-.4-2.09-1.28-.77-.68-1.3-1.52-1.45-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.2-.48-.41-.41-.58-.42h-.49c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14 0 1.26.93 2.47 1.06 2.64.13.17 1.83 2.79 4.44 3.91.62.27 1.1.43 1.48.55.62.2 1.18.17 1.63.1.5-.08 1.54-.63 1.76-1.24.22-.6.22-1.11.15-1.22-.07-.11-.24-.17-.5-.3z" />
                  <span>WhatsApp Now</span>
                </span>
              </a>

              <div className="text-center text-xs font-semibold text-foreground/60">
                By submitting, you&apos;ll be redirected to WhatsApp with your details pre-filled.
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
