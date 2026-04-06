"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";

export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Icon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className ?? ""}
      width={20}
      height={20}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export function MountReveal({
  children,
  delayMs = 0,
  className,
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      className={[
        "transition duration-700 ease-out will-change-transform",
        mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className ?? "",
      ].join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

export function Reveal({
  children,
  delayMs = 0,
  className,
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el || visible) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [visible]);

  return (
    <div
      ref={elRef}
      className={[
        "transition duration-700 ease-out will-change-transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className ?? "",
      ].join(" ")}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}

export function useParallax(ref: RefObject<HTMLElement | null>, strength: number) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId = 0;

    const update = () => {
      const y = window.scrollY * strength;
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref, strength]);
}

export function PageLoadGate({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative flex min-h-full w-full flex-1 flex-col">
      {children}
      {!ready ? (
        <div className="pointer-events-none fixed inset-0 z-[70] bg-background">
          <div className="mx-auto w-full max-w-6xl px-5">
            <div className="flex h-20 items-center justify-between">
              <div className="h-10 w-32 animate-pulse rounded-2xl bg-foreground/10" />
              <div className="flex gap-2">
                <div className="h-11 w-11 animate-pulse rounded-2xl bg-foreground/10 md:hidden" />
                <div className="hidden h-10 w-56 animate-pulse rounded-full bg-foreground/10 md:block" />
                <div className="hidden h-10 w-40 animate-pulse rounded-full bg-foreground/10 md:block" />
              </div>
            </div>

            <div className="mt-10 grid gap-6">
              <div className="h-12 w-3/4 animate-pulse rounded-2xl bg-foreground/10" />
              <div className="h-5 w-2/3 animate-pulse rounded-2xl bg-foreground/10" />
              <div className="h-5 w-1/2 animate-pulse rounded-2xl bg-foreground/10" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="h-44 animate-pulse rounded-3xl bg-foreground/10" />
                <div className="h-44 animate-pulse rounded-3xl bg-foreground/10" />
              </div>
              <div className="mt-2 grid gap-4 sm:grid-cols-3">
                <div className="h-40 animate-pulse rounded-3xl bg-foreground/10" />
                <div className="h-40 animate-pulse rounded-3xl bg-foreground/10" />
                <div className="h-40 animate-pulse rounded-3xl bg-foreground/10" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

