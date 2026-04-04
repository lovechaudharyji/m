import Link from "next/link";
import Header from "@/app/_components/sections/Header";
import FooterSection from "@/app/_components/sections/FooterSection";
import { Icon } from "@/app/_components/shared";

const sections = [
  {
    title: "Booking & Payment",
    items: [
      "Minimum 50% advance payment required to confirm booking.",
      "Remaining amount must be paid before trip departure.",
    ],
  },
  {
    title: "Cancellation Policy",
    items: [
      "7 days before trip: 80% refund.",
      "4–6 days before trip: 50% refund.",
      "Less than 3 days: No refund.",
    ],
  },
  {
    title: "Travel & Safety",
    items: [
      "Participants must follow instructions of the trip leader.",
      "Company is not responsible for personal injuries or loss of belongings.",
      "Trek is subject to weather conditions.",
    ],
  },
  {
    title: "Changes & Delays",
    items: [
      "Itinerary may change due to weather or operational reasons.",
      "No refund for unused services.",
    ],
  },
  {
    title: "Behavior Policy",
    items: [
      "Misconduct or illegal activities will lead to immediate removal without refund.",
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header brandName="MountAura" />

      <main className="mx-auto w-full max-w-6xl px-5 pb-12 pt-28 sm:pb-16 sm:pt-32">
        <Link
          href="/"
          className="we-button inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
        >
          <Icon className="text-foreground" path="M15 18l-6-6 6-6" />
          <span>Back</span>
        </Link>

        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-xs font-extrabold tracking-widest text-brand uppercase">
            <Icon className="text-brand" path="M4 19.5A2.5 2.5 0 006.5 22H20 M4 4.5A2.5 2.5 0 016.5 2H20v20 M6 2v20" />
            <span>Terms & Conditions</span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Clear policies for a smooth trip
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/70 sm:text-lg">
            Please read these terms carefully before booking. By confirming your slot, you agree to the policies below.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-border bg-white/70 p-7 shadow-sm backdrop-blur">
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-navy">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-brand" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <FooterSection brandName="MountAura" />
    </div>
  );
}
