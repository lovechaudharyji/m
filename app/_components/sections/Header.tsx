"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl border border-border bg-transparent shadow-sm">
            <Image src="/images/mountaura.png" alt={brandName} width={64} height={64} className="h-full w-full object-contain" priority />
          </span>
          <div className="leading-tight">
            <div className="font-heading text-lg font-extrabold tracking-wide text-navy sm:text-xl">
              {brandName}
            </div>
            <div className="text-xs text-foreground/70">Feel the Aura of mountain</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-base font-semibold text-foreground/80 md:flex">
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
          <div className="group relative hidden md:inline-flex">
            <a
              href="#booking"
              className="we-button inline-flex items-center gap-2 rounded-full border border-border bg-white/50 px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white"
            >
              <Icon
                className="text-foreground"
                path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
              />
              <span>Talk to Expert</span>
            </a>
            <div className="pointer-events-none absolute right-0 top-full mt-2 w-72 translate-y-1 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-border bg-white/95 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur">
                <div className="grid gap-2 p-3 text-sm font-semibold text-foreground/80">
                  <div className="flex items-center gap-2">
                    <Icon className="text-brand" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
                    <span>9643906583</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      className="text-brand"
                      path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
                    />
                    <span>96433906583</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="we-button hidden items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover md:inline-flex"
            onClick={() => window.dispatchEvent(new CustomEvent("we:open-booking-form", { detail: { package: "adventure" } }))}
          >
            Book Your Weekend
          </button>
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
            <div className="grid gap-1 p-3 text-base font-semibold text-foreground/80">
              <a
                href="#"
                className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                <Icon className="text-foreground/70" path="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M9 22V12h6v10" />
                <span>Home</span>
              </a>
              <a
                href="#pricing"
                className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                <Icon
                  className="text-foreground/70"
                  path="M9 2h6M9 4h6M9 2v2M15 2v2M7 4h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z M8 10h8 M8 14h8 M8 18h6"
                />
                <span>Our Plan</span>
              </a>
              <a
                href="#itinerary"
                className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                <Icon
                  className="text-foreground/70"
                  path="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z M12 10a3 3 0 110-6 3 3 0 010 6z"
                />
                <span>Itinerary</span>
              </a>
              <a
                href="#experience"
                className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                <Icon
                  className="text-foreground/70"
                  path="M12 22a10 10 0 110-20 10 10 0 010 20z M12 16v-4 M12 8h.01"
                />
                <span>About</span>
              </a>
              <a
                href="#contact"
                className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setOpen(false)}
              >
                <Icon className="text-foreground/70" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
                <span>Contact Us</span>
              </a>
            </div>

            <div className="flex items-center gap-3 border-t border-border p-3">
              <a
                href="#booking"
                className="we-button inline-flex h-11 flex-1 items-center justify-center rounded-2xl border border-border bg-white px-4 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
                onClick={() => setOpen(false)}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon
                    className="text-foreground"
                    path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
                  />
                  <span>Talk to Expert</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
        <div className="mx-auto w-full max-w-6xl px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-white/90 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new CustomEvent("we:open-booking-form", { detail: { package: "adventure" } }));
              }}
              className="we-button inline-flex h-12 items-center justify-center gap-2 bg-brand px-4 text-sm font-semibold text-white"
            >
              <Icon className="text-white" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
              <span>Get a Callback</span>
            </button>
            <a
              href="tel:+919643906583"
              onClick={() => setOpen(false)}
              className="we-button inline-flex h-12 items-center justify-center gap-2 bg-white px-4 text-sm font-semibold text-foreground"
            >
              <Icon
                className="text-foreground"
                path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
              />
              <span>Call to Expert</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
