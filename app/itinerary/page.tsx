"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Eye, FileText } from "lucide-react";
import Image from "next/image";
import Header from "@/app/_components/sections/Header";
import FooterSection from "@/app/_components/sections/FooterSection";
import WhyChooseUsSection from "@/app/_components/sections/WhyChooseUsSection";

type ItineraryApiResponse = {
  pdfs?: Array<{ title: string; url: string; filename?: string; thumbnailUrl?: string }>;
};

export default function ItineraryPage() {
  const [pdfs, setPdfs] = useState<Array<{ title: string; url: string; filename?: string; thumbnailUrl?: string }> | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      try {
        const res = await fetch("/api/contact", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed");
        const data = (await res.json()) as ItineraryApiResponse;
        if (cancelled) return;
        setPdfs(data.pdfs ?? []);
      } catch {
        if (cancelled) return;
        setPdfs([]);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const items = useMemo(() => (pdfs ?? []).slice(0, 2), [pdfs]);
  const isLoading = pdfs === null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header brandName="MountAura" />

      <main className="pt-24">
        <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:py-14">
          <div className="rounded-3xl bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.14)] sm:p-10">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="mx-auto">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-foreground/70">
                  <FileText className="h-4 w-4 text-brand" />
                  <span>Itinerary</span>
                </div>
                <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">Trip Itinerary PDFs</h1>
                <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-foreground/70">
                  View online or download the itinerary PDFs from Airtable.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {isLoading ? (
                <>
                  <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <div className="h-44 w-full animate-pulse bg-foreground/10" />
                    <div className="p-6">
                      <div className="h-5 w-36 animate-pulse rounded bg-foreground/10" />
                      <div className="mt-3 h-6 w-44 animate-pulse rounded bg-foreground/10" />
                      <div className="mt-2 h-4 w-56 animate-pulse rounded bg-foreground/10" />
                      <div className="mt-4 h-4 w-64 animate-pulse rounded bg-foreground/10" />
                      <div className="mt-6 flex gap-3">
                        <div className="h-11 w-28 animate-pulse rounded-full bg-foreground/10" />
                        <div className="h-11 w-32 animate-pulse rounded-full bg-foreground/10" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    <div className="h-44 w-full animate-pulse bg-foreground/10" />
                    <div className="p-6">
                      <div className="h-5 w-36 animate-pulse rounded bg-foreground/10" />
                      <div className="mt-3 h-6 w-44 animate-pulse rounded bg-foreground/10" />
                      <div className="mt-2 h-4 w-56 animate-pulse rounded bg-foreground/10" />
                      <div className="mt-4 h-4 w-64 animate-pulse rounded bg-foreground/10" />
                      <div className="mt-6 flex gap-3">
                        <div className="h-11 w-28 animate-pulse rounded-full bg-foreground/10" />
                        <div className="h-11 w-32 animate-pulse rounded-full bg-foreground/10" />
                      </div>
                    </div>
                  </div>
                </>
              ) : items.length ? (
                items.map((pdf) => (
                  <div key={pdf.url} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                    {(() => {
                      const filename = (pdf.filename ?? "").toLowerCase();
                      const meta =
                        filename.includes("3999") || pdf.title.toLowerCase().includes("adventure")
                          ? {
                              duration: "3 Nights / 2 Days",
                              name: "Adventure Plan",
                              route: "Delhi to Dharamshala",
                              desc: "Weekend Escape — Triund Trek & Camping",
                            }
                          : {
                              duration: "4 Nights / 3 Days",
                              name: "Resort Plan",
                              route: "Delhi to Dharamshala",
                              desc: "Resort Plan — McLeodganj Stay + Triund Trek & Camping",
                            };

                      return (
                        <>
                          <div className="relative h-44 w-full border-b border-border bg-white">
                            {pdf.thumbnailUrl ? (
                              <Image src={pdf.thumbnailUrl} alt={meta.name} width={1200} height={600} className="h-full w-full object-cover" />
                            ) : (
                              <div className="grid h-full w-full place-items-center bg-brand/10">
                                <FileText className="h-10 w-10 text-brand" />
                              </div>
                            )}
                            <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/30 bg-black/25 px-3 py-1 text-xs font-extrabold tracking-wider text-white uppercase backdrop-blur">
                              {meta.duration}
                            </div>
                          </div>

                          <div className="p-6">
                            <div className="font-heading text-xl font-extrabold text-navy">{meta.name}</div>
                            <div className="mt-1 text-sm font-semibold text-foreground/70">{meta.route}</div>
                            <p className="mt-3 text-sm font-semibold text-foreground/60">{meta.desc}</p>

                            <div className="mt-6 flex flex-wrap gap-3">
                              <a
                                href={pdf.url}
                                target="_blank"
                                rel="noreferrer"
                                className="we-button inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80"
                              >
                                <Eye className="h-4 w-4" />
                                <span>View</span>
                              </a>
                              <a
                                href={pdf.url}
                                download={pdf.filename ?? "itinerary.pdf"}
                                className="we-button inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-brand-hover"
                              >
                                <Download className="h-4 w-4" />
                                <span>Download</span>
                              </a>
                            </div>

                            <div className="mt-4 truncate text-xs font-semibold text-foreground/50">
                              {pdf.filename ?? "itinerary.pdf"}
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-border bg-card p-6 text-sm font-semibold text-foreground/70 md:col-span-2">
                  No PDF found in Airtable (Pdf field).
                </div>
              )}
            </div>
          </div>
        </section>

        <WhyChooseUsSection />
      </main>

      <FooterSection brandName="MountAura" />
    </div>
  );
}
