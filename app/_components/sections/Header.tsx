"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@/app/_components/shared";

type HeaderProps = {
  brandName: string;
};

type ContactApiResponse = {
  contacts?: Array<{ number?: string; email?: string }>;
};

export default function Header({ brandName }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [mobilePlansOpen, setMobilePlansOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [remoteNumbers, setRemoteNumbers] = useState<string[] | null>(null);
  const pathname = usePathname();

  const closeMenu = () => {
    setOpen(false);
    setMobilePlansOpen(false);
  };

  const closeContact = () => {
    setContactOpen(false);
  };

  const openContact = () => {
    closeMenu();
    setContactOpen(true);
  };

  const openBooking = (pkg: "adventure" | "resort" = "adventure") => {
    if (window.location.pathname === "/") {
      window.dispatchEvent(new CustomEvent("we:open-booking-form", { detail: { package: pkg } }));
      return;
    }
    window.location.href = "/#booking";
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (contactOpen) {
        closeContact();
        return;
      }
      if (open) closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, contactOpen]);

  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        const res = await fetch("/api/contact", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as ContactApiResponse;
        const contacts = data.contacts ?? [];

        const numbers = Array.from(
          new Set(
            contacts
              .map((c) => c.number?.trim())
              .filter((v): v is string => Boolean(v)),
          ),
        );

        if (cancelled) return;
        setRemoteNumbers(numbers.length ? numbers : []);
      } catch {
        if (cancelled) return;
        setRemoteNumbers([]);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const contactLoading = remoteNumbers === null;
  const contactNumbers = remoteNumbers && remoteNumbers.length ? remoteNumbers : ["9643906583", "6284846470"];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 backdrop-blur">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-transparent">
            <Image src="/images/mountaura.png" alt={brandName} width={64} height={64} className="h-full w-full object-contain" priority />
          </span>
          <div className="leading-tight">
            <div className="font-heading text-lg font-extrabold tracking-wide text-navy sm:text-xl">
              {brandName}
            </div>
            <div className="text-xs text-foreground/70">Feel the Aura of mountain</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-base font-semibold text-foreground/80 md:flex">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <div className="group relative">
            <button type="button" className="inline-flex items-center gap-1 hover:text-foreground">
              <span>Our Plan</span>
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="pointer-events-none absolute left-0 top-full mt-2 w-72 translate-y-1 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-border bg-white/95 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur">
                <div className="grid gap-1 p-2 text-sm font-semibold text-foreground">
                  <Link
                    href="/adventure"
                    className="we-button flex items-center justify-between rounded-2xl px-3 py-2 transition hover:bg-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className="text-foreground" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                      <span>Adventure Plan</span>
                    </span>
                    <Icon className="text-foreground/60" path="M9 18l6-6-6-6" />
                  </Link>
                  <Link
                    href="/comfort"
                    className="we-button flex items-center justify-between rounded-2xl px-3 py-2 transition hover:bg-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon
                        className="text-foreground"
                        path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                      />
                      <span>Resort Plan</span>
                    </span>
                    <Icon className="text-foreground/60" path="M9 18l6-6-6-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="/itinerary" className="hover:text-foreground">
            Itinerary
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() =>
              setOpen((v) => {
                const next = !v;
                if (!next) setMobilePlansOpen(false);
                return next;
              })
            }
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
            <Link
              href="/#booking"
              className="we-button inline-flex items-center gap-2 rounded-full border border-border bg-white/50 px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white"
            >
              <Icon
                className="text-foreground"
                path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
              />
              <span>Talk to Expert</span>
            </Link>
            <div className="pointer-events-none absolute right-0 top-full mt-2 w-72 translate-y-1 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-border bg-white/95 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur">
                <div className="grid gap-2 p-3 text-sm font-semibold text-foreground/80">
                  {contactLoading ? (
                    <>
                      <div className="flex items-center gap-2">
                        <Icon className="text-brand" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
                        <span className="h-4 w-24 animate-pulse rounded bg-foreground/10" />
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          className="text-brand"
                          path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
                        />
                        <span className="h-4 w-24 animate-pulse rounded bg-foreground/10" />
                      </div>
                    </>
                  ) : (
                    contactNumbers.slice(0, 2).map((num, idx) => (
                      <div key={num} className="flex items-center gap-2">
                        <Icon
                          className="text-brand"
                          path={
                            idx === 0
                              ? "M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z"
                              : "M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
                          }
                        />
                        <span>{num}</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="we-button hidden items-center justify-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover md:inline-flex"
            onClick={() => openBooking("adventure")}
          >
            Book Your Weekend
          </button>
        </div>
      </div>

      {contactOpen ? (
        <div className="fixed inset-0 z-[60] flex items-end md:hidden">
          <div className="absolute inset-0 bg-black/35" onClick={closeContact} aria-hidden="true" />
          <div className="relative w-full">
            <div className="mx-auto w-full max-w-6xl px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
              <div className="overflow-hidden rounded-3xl border border-border bg-white/95 shadow-[0_30px_80px_rgba(15,23,42,0.22)] backdrop-blur">
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <div className="font-heading text-base font-extrabold tracking-tight text-navy">Call to Expert</div>
                  <button
                    type="button"
                    onClick={closeContact}
                    aria-label="Close"
                    className="we-button inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-white text-foreground shadow-sm"
                  >
                    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l-12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid gap-2 p-4 text-sm font-semibold text-foreground/80">
                  {contactLoading ? (
                    <>
                      <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Icon className="text-brand" path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z" />
                          <span className="h-4 w-28 animate-pulse rounded bg-foreground/10" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-10 w-10 animate-pulse rounded-2xl bg-foreground/10" />
                          <span className="h-10 w-10 animate-pulse rounded-2xl bg-foreground/10" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3">
                        <div className="flex items-center gap-2">
                          <Icon className="text-brand" path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z" />
                          <span className="h-4 w-28 animate-pulse rounded bg-foreground/10" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-10 w-10 animate-pulse rounded-2xl bg-foreground/10" />
                          <span className="h-10 w-10 animate-pulse rounded-2xl bg-foreground/10" />
                        </div>
                      </div>
                    </>
                  ) : (
                    contactNumbers.slice(0, 6).map((number) => (
                      <div
                        key={number}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-white px-4 py-3"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="text-brand" path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z" />
                          <span>{number}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href={`tel:+91${number}`}
                            onClick={closeContact}
                            className="we-button inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-white text-foreground shadow-sm"
                            aria-label={`Call ${number}`}
                          >
                            <Icon
                              className="text-foreground"
                              path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
                            />
                          </a>
                          <a
                            href={`https://wa.me/91${number}`}
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeContact}
                            className="we-button inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-white text-[#25D366] shadow-sm"
                            aria-label={`WhatsApp ${number}`}
                          >
                            <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        id="mobile-menu"
        className={[
          "absolute inset-x-0 top-full md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="fixed inset-0 bg-black/20" onClick={closeMenu} aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-5">
          <div className="mt-2 overflow-hidden rounded-3xl border border-border bg-white/90 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur transition">
            <div className="grid gap-1 p-3 text-base font-semibold text-foreground/80">
              <Link
                href="/"
                className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white"
                onClick={closeMenu}
              >
                <Icon className="text-foreground/70" path="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M9 22V12h6v10" />
                <span>Home</span>
              </Link>
              <button
                type="button"
                className="we-button flex items-center justify-between rounded-2xl px-4 py-3 hover:bg-white"
                onClick={() => setMobilePlansOpen((v) => !v)}
              >
                <span className="inline-flex items-center gap-3">
                  <Icon
                    className="text-foreground/70"
                    path="M9 2h6M9 4h6M9 2v2M15 2v2M7 4h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z M8 10h8 M8 14h8 M8 18h6"
                  />
                  <span>Our Plan</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  width={18}
                  height={18}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={["transition", mobilePlansOpen ? "rotate-180" : ""].join(" ")}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {mobilePlansOpen ? (
                <div className="grid gap-1 pl-8">
                  <Link
                    href="/adventure"
                    className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 text-sm hover:bg-white"
                    onClick={closeMenu}
                  >
                    <Icon className="text-foreground/70" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                    <span>Adventure Plan</span>
                  </Link>
                  <Link
                    href="/comfort"
                    className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 text-sm hover:bg-white"
                    onClick={closeMenu}
                  >
                    <Icon
                      className="text-foreground/70"
                      path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                    />
                    <span>Resort Plan</span>
                  </Link>
                </div>
              ) : null}
              <Link
                href="/itinerary"
                className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white"
                onClick={closeMenu}
              >
                <Icon
                  className="text-foreground/70"
                  path="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z M12 10a3 3 0 110-6 3 3 0 010 6z"
                />
                <span>Itinerary</span>
              </Link>
              <Link
                href="/contact"
                className="we-button flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white"
                onClick={closeMenu}
              >
                <Icon className="text-foreground/70" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
                <span>Contact Us</span>
              </Link>
            </div>

            <div className="flex items-center gap-3 border-t border-border p-3">
              <button
                type="button"
                className="we-button inline-flex h-11 flex-1 items-center justify-center rounded-2xl border border-border bg-white px-4 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
                onClick={openContact}
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <Icon
                    className="text-foreground"
                    path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
                  />
                  <span>Talk to Expert</span>
                </span>
              </button>
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
                  closeMenu();
                  openBooking("adventure");
              }}
              className="we-button inline-flex h-12 items-center justify-center gap-2 bg-brand px-4 text-sm font-semibold text-white"
            >
              <Icon className="text-white" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
              <span>Get a Callback</span>
            </button>
            <button
              type="button"
              onClick={openContact}
              className="we-button inline-flex h-12 items-center justify-center gap-2 bg-white px-4 text-sm font-semibold text-foreground"
            >
              <Icon
                className="text-foreground"
                path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z"
              />
              <span>Call to Expert</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
