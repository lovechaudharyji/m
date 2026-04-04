"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { cn, Icon, Reveal } from "@/app/_components/shared";

export default function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "adventure" as "adventure" | "resort",
  });

  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string>("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitState === "submitting") return;
    setSubmitState("submitting");
    setSubmitError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.name,
          contact: form.phone,
          email: form.email,
          package: form.plan,
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

      setSubmitState("success");
      window.setTimeout(() => setSubmitState("idle"), 5000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Could not save details. Please try again.");
      setSubmitState("error");
    }
  };

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
                    <span>Submitted! We&apos;ll contact you shortly.</span>
                  </div>
                </div>
              ) : null}

              {submitState === "error" ? (
                <div className="rounded-2xl border border-[#ef4444]/30 bg-[#fef2f2] px-4 py-3 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Icon className="text-[#ef4444]" path="M12 9v4m0 4h.01M10.29 3.86l-7.4 12.82A2 2 0 004.62 20h14.76a2 2 0 001.73-3.32l-7.4-12.82a2 2 0 00-3.42 0z" />
                    <span>{submitError || "Could not save details. Please try again."}</span>
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
                disabled={submitState === "submitting"}
                className="we-button inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:opacity-95"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon className="text-white" path="M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z" />
                  <span>{submitState === "submitting" ? "Saving..." : "Submit"}</span>
                </span>
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
