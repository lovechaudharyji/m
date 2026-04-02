import Link from "next/link";

const conditions = [
  "Participants must follow the trip captain’s instructions at all times.",
  "Alcohol, smoking, and prohibited substances may be restricted during transit and activities.",
  "Any misconduct or unsafe behavior can lead to removal from the trip without refund.",
  "Activities may require a basic fitness level; join at your own discretion.",
  "Medical conditions should be disclosed in advance; carry personal medication if required.",
  "The organizer may request ID verification for safety and compliance.",
  "By booking, you agree to receive trip updates via WhatsApp or email.",
] as const;

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-10 border-b border-border bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <Link
            href="/#contact"
            className="we-button inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
          >
            <span>← Back</span>
          </Link>
          <div className="font-heading text-sm font-extrabold tracking-widest text-foreground/70 uppercase">
            Conditions
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Conditions
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            These conditions support safety, fairness, and smooth trip operations for everyone.
          </p>

          <ul className="mt-8 space-y-2 text-sm font-semibold text-foreground/80">
            {conditions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
