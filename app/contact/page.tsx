"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Header from "@/app/_components/sections/Header";
import FooterSection from "@/app/_components/sections/FooterSection";

type ContactApiResponse = {
  contacts?: Array<{ number?: string; email?: string }>;
};

function FacebookIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ContactHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/images/train.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Available 24/7
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-5xl font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl"
        >
          Talk to Our{" "}
          <span className="bg-clip-text text-transparent [background-image:linear-gradient(90deg,#e0f2fe_0%,#0ea5e9_55%,#ffffff_100%)]">
            Experts
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-7 max-w-xl text-base font-semibold leading-relaxed text-white/75 sm:text-lg"
        >
          Have a trip in mind? Our specialists are just a call or message away. Let&apos;s plan your next MountAura
          weekend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#experts"
            className="we-button inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition duration-300 hover:bg-brand-hover"
          >
            Get in Touch
          </a>
          <a
            href="#form"
            className="we-button inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-7 text-sm font-semibold text-white/90 shadow-sm backdrop-blur transition hover:bg-white/15"
          >
            Send Message
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-white/60" />
      </motion.div>
    </section>
  );
}

function ContactInfo() {
  const [remoteNumbers, setRemoteNumbers] = useState<string[] | null>(null);
  const [remoteEmails, setRemoteEmails] = useState<string[] | null>(null);

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

        const emails = Array.from(
          new Set(
            contacts
              .map((c) => c.email?.trim())
              .filter((v): v is string => Boolean(v)),
          ),
        );

        if (cancelled) return;
        setRemoteNumbers(numbers.length ? numbers : []);
        setRemoteEmails(emails.length ? emails : []);
      } catch {
        if (cancelled) return;
        setRemoteNumbers([]);
        setRemoteEmails([]);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const isLoading = remoteNumbers === null || remoteEmails === null;

  const numbers = useMemo(() => (remoteNumbers && remoteNumbers.length ? remoteNumbers : ["9643906583"]), [remoteNumbers]);
  const emails = useMemo(
    () => (remoteEmails && remoteEmails.length ? remoteEmails : ["mountauraofficial@gmail.com"]),
    [remoteEmails],
  );

  const contactItems = useMemo(
    () =>
      [
        {
          icon: Phone,
          label: "Call Us",
          value: numbers[0] ?? "9643906583",
          href: `tel:+91${numbers[0] ?? "9643906583"}`,
        },
        {
          icon: Phone,
          label: "Call Now",
          value: numbers[1] ?? numbers[0] ?? "9643906583",
          href: `tel:+91${numbers[1] ?? numbers[0] ?? "9643906583"}`,
        },
        {
          icon: Mail,
          label: "Email Us",
          value: emails[0] ?? "mountauraofficial@gmail.com",
          href: `mailto:${emails[0] ?? "mountauraofficial@gmail.com"}`,
        },
        {
          icon: Mail,
          label: "Support Email",
          value: emails[1] ?? emails[0] ?? "mountauraofficial@gmail.com",
          href: `mailto:${emails[1] ?? emails[0] ?? "mountauraofficial@gmail.com"}`,
        },
      ] as const,
    [emails, numbers],
  );

  const socials = useMemo(
    () => [
      { name: "Facebook", href: "https://facebook.com/", icon: FacebookIcon },
      { name: "Instagram", href: "https://instagram.com/", icon: InstagramIcon },
      { name: "Twitter", href: "https://twitter.com/", icon: TwitterIcon },
      { name: "LinkedIn", href: "https://linkedin.com/", icon: LinkedInIcon },
    ],
    [],
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-3xl font-extrabold text-navy">Contact Details</h2>
        <p className="mt-3 text-sm font-semibold text-foreground/70">
          Reach out through any channel below. We typically respond within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {contactItems.map((item, i) => (
          <motion.a
            key={`${item.label}-${i}`}
            href={isLoading ? undefined : item.href}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            aria-disabled={isLoading}
            tabIndex={isLoading ? -1 : 0}
            className={[
              "we-button rounded-2xl border border-border bg-card p-4 text-center shadow-sm transition sm:p-6",
              isLoading ? "pointer-events-none" : "hover:-translate-y-0.5 hover:shadow-md",
            ].join(" ")}
          >
            <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-brand/20 sm:mb-4 sm:h-14 sm:w-14">
              <item.icon className="h-5 w-5 text-brand" />
            </div>
            <h3 className="font-heading text-sm font-extrabold text-foreground sm:text-lg">{item.label}</h3>
            <p className="mt-2 break-all text-xs font-semibold leading-relaxed text-foreground/70 sm:text-sm">
              {isLoading ? (
                <span className="mx-auto block h-3 w-24 animate-pulse rounded bg-foreground/10 sm:h-4 sm:w-32" />
              ) : (
                item.value
              )}
            </p>
          </motion.a>
        ))}
      </div>

      <div>
        <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-foreground/60">Follow Us</p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="we-button grid h-11 w-11 place-items-center rounded-2xl border border-border bg-white/70 text-foreground/70 shadow-sm backdrop-blur transition hover:bg-brand hover:text-white"
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header brandName="MountAura" />
      <main>
        <ContactHero />

        <section id="experts" className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-20">
          <div className="grid gap-8 rounded-3xl border border-border bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.14)] lg:p-10">
            <ContactInfo />
          </div>
        </section>
      </main>
      <FooterSection brandName="MountAura" />
    </div>
  );
}
