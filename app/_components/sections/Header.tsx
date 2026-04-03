"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/app/_components/shared";

type HeaderProps = {
  brandName: string;
};

export default function Header({ brandName }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 backdrop-blur">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-white text-navy shadow-sm">
            WE
          </span>
          <div className="leading-tight">
            <div className="font-heading text-sm font-bold tracking-wide text-navy">{brandName}</div>
            <div className="text-xs text-foreground/70">Leave Friday. Return Sunday.</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-foreground/80 md:flex">
          <a href="#" className="hover:text-foreground">
            Home
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Our Plan
          </a>
          <a href="#itinerary" className="hover:text-foreground">
            Itinerary
          </a>
          <a href="#experience" className="hover:text-foreground">
            About
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact Us
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="we-button inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white/60 text-foreground shadow-sm backdrop-blur transition hover:bg-white md:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <a
            href="#pricing"
            className="we-button hidden rounded-full border border-border bg-white/50 px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white md:inline-flex"
          >
            View Plans
          </a>
          <a
            href="#booking"
            className="we-button hidden items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover md:inline-flex"
          >
            Book Your Weekend
          </a>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={[
          "md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 -z-10 bg-black/20"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-6xl px-5">
          <div className="mt-2 overflow-hidden rounded-3xl border border-border bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur transition">
            <div className="grid gap-1 p-3 text-sm font-semibold text-foreground/80">
              <a href="#" className="we-button rounded-2xl px-4 py-3 hover:bg-white" onClick={() => setOpen(false)}>
                Home
              </a>
              <a
                href="#pricing"
                className="we-button rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                Our Plan
              </a>
              <a
                href="#itinerary"
                className="we-button rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                Itinerary
              </a>
              <a
                href="#experience"
                className="we-button rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="we-button rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </a>
            </div>

            <div className="flex items-center gap-3 border-t border-border p-3">
              <a
                href="#pricing"
                className="we-button inline-flex h-11 flex-1 items-center justify-center rounded-2xl border border-border bg-white px-4 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
                onClick={() => setOpen(false)}
              >
                View Plans
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div className="mx-auto w-full max-w-6xl px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="we-button inline-flex h-12 items-center justify-center gap-2 bg-brand px-4 text-sm font-semibold text-white"
            >
              <Icon className="text-white" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
              <span>Get a Callback</span>
            </a>
            <a
              href="tel:+919643906583"
              onClick={() => setOpen(false)}
              className="we-button inline-flex h-12 items-center justify-center gap-2 bg-white px-4 text-sm font-semibold text-foreground"
            >
              <Icon
                className="text-foreground"
                path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
              />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
