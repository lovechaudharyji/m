"use client";

import { Icon, Reveal } from "@/app/_components/shared";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type FooterSectionProps = {
  brandName: string;
  socialLinks?: Partial<{
    instagram: string;
    twitter: string;
    discord: string;
    whatsapp: string;
  }>;
};

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="we-button group grid h-11 w-11 place-items-center rounded-2xl border border-border bg-white/60 text-foreground/75 shadow-sm backdrop-blur transition hover:border-brand/30 hover:bg-brand hover:text-white"
    >
      {children}
    </a>
  );
}

type ContactApiResponse = {
  contacts?: Array<{ number?: string; email?: string }>;
};

export default function FooterSection({ brandName, socialLinks }: FooterSectionProps) {
  const links = {
    instagram: "#",
    twitter: "#",
    discord: "#",
    whatsapp: "/#booking",
    ...socialLinks,
  };

  const [contactLoading, setContactLoading] = useState(true);
  const [remoteNumber, setRemoteNumber] = useState<string | null>(null);
  const [remoteEmail, setRemoteEmail] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        const res = await fetch("/api/contact", { cache: "no-store" });
        if (res.ok) {
          const data = (await res.json()) as ContactApiResponse;
          const contacts = data.contacts ?? [];

          const number = contacts
            .map((c) => c.number?.trim())
            .find((v): v is string => Boolean(v));

          const email = contacts
            .map((c) => c.email?.trim())
            .find((v): v is string => Boolean(v));

          if (cancelled) return;
          if (number) setRemoteNumber(number);
          if (email) setRemoteEmail(email);
        }
      } catch {
      } finally {
        if (cancelled) return;
        setContactLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const phoneNumber = remoteNumber ?? "9643906583";
  const emailAddress = remoteEmail ?? "lovechaudhary6583@gmail.com";

  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-12">
        <Reveal className="grid gap-10 md:grid-cols-4 md:items-start">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image src="/images/mountaura.png" alt={brandName} width={44} height={44} className="h-11 w-11 object-contain" />
              <div>
                <div className="font-heading text-xl font-extrabold tracking-tight text-navy">{brandName}</div>
                <div className="text-xs font-semibold text-foreground/70">Feel the Aura of Mountains</div>
              </div>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-foreground/70">
              Built for busy professionals who want a real weekend without taking leaves.
            </p>

            <div className="mt-6 rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur">
              <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                Apps Coming Soon
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-semibold text-foreground/80">
                  <Icon className="text-foreground/80" path="M9 18h6M10 22h4M7 2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
                  <span>iOS</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-2 text-sm font-semibold text-foreground/80">
                  <Icon className="text-foreground/80" path="M9 18h6M10 22h4M7 2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" />
                  <span>Android</span>
                </span>
              </div>
              <div className="mt-3 text-sm font-semibold text-foreground/60">
                We’re building the mobile experience — stay tuned.
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="font-heading text-sm font-extrabold tracking-widest text-foreground uppercase">
              Quick Links
            </div>
            <div className="grid gap-2 text-sm font-semibold text-foreground/70">
              <Link className="transition hover:text-foreground" href="/#experience">
                Experience
              </Link>
              <Link className="transition hover:text-foreground" href="/#pricing">
                Pricing
              </Link>
              <Link className="transition hover:text-foreground" href="/#itinerary">
                Itinerary
              </Link>
              <Link className="transition hover:text-foreground" href="/#faq">
                FAQs
              </Link>
              <Link className="transition hover:text-foreground" href="/#gallery">
                Gallery
              </Link>
              <Link className="transition hover:text-foreground" href="/#booking">
                Booking
              </Link>
              <Link className="transition hover:text-foreground" href="/comfort">
                Comfort Details
              </Link>
              <Link className="transition hover:text-foreground" href="/terms">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur">
              <div className="font-heading text-sm font-extrabold tracking-widest text-foreground uppercase">
                Contact
              </div>

              <div className="mt-4 grid gap-2 text-sm font-semibold text-foreground/70">
                {contactLoading ? (
                  <div className="grid gap-2">
                    <div className="inline-flex items-center gap-2">
                      <Icon className="text-brand" path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z" />
                      <span className="h-4 w-28 animate-pulse rounded bg-foreground/10" />
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <Icon className="text-brand" path="M4 4h16v16H4z M22 6l-10 7L2 6" />
                      <span className="h-4 w-44 animate-pulse rounded bg-foreground/10" />
                    </div>
                  </div>
                ) : (
                  <>
                    <a className="inline-flex items-center gap-2 transition hover:text-foreground" href={`tel:+91${phoneNumber}`}>
                      <Icon className="text-brand" path="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.31 1.7.57 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.58a2 2 0 012.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0122 16.92z" />
                      <span>{phoneNumber}</span>
                    </a>
                    <a className="inline-flex items-center gap-2 transition hover:text-foreground" href={`mailto:${emailAddress}`}>
                      <Icon className="text-brand" path="M4 4h16v16H4z M22 6l-10 7L2 6" />
                      <span>{emailAddress}</span>
                    </a>
                  </>
                )}
                <div className="mt-2 flex items-center gap-2">
                  <Icon className="text-brand" path="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z" />
                  <span>Instant confirmation on WhatsApp</span>
                </div>
              </div>

              <Link
                href="/#booking"
                className="we-button mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover"
              >
                <Icon className="text-white" path="M5 12h14M13 5l7 7-7 7" />
                <span>Book Now</span>
              </Link>

              <div className="mt-6">
                <div className="mb-3 font-heading text-sm font-extrabold text-foreground">Follow us</div>
                <div className="flex items-center gap-3">
                  <SocialLink href={links.instagram} label="Instagram">
                    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </SocialLink>

                  <SocialLink href={links.twitter} label="Twitter">
                    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </SocialLink>

                  <SocialLink href={links.discord} label="Discord">
                    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                    </svg>
                  </SocialLink>

                  <SocialLink href={links.whatsapp} label="WhatsApp">
                    <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-xs font-semibold text-foreground/60 sm:flex-row">
          <span>© {new Date().getFullYear()} {brandName}. All rights reserved.</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link className="transition hover:text-foreground" href="/terms">
              Terms & Conditions
            </Link>
            <span className="inline-flex items-center gap-2">
              <Icon className="text-brand" path="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              <span>Made for weekends</span>
            </span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
