import Link from "next/link";

const terms = [
  "Bookings are confirmed only after payment and availability verification.",
  "Advance payments are non-refundable unless explicitly stated otherwise.",
  "Full payment is required before the trip start date.",
  "A valid government ID is mandatory for all travelers.",
  "No-show or late arrival may result in missed services with no refund.",
  "Itinerary may change due to weather, safety, road conditions, or operational reasons.",
  "The organizer is not responsible for loss of personal belongings.",
] as const;

export default function TermsPage() {
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
            Terms
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
        <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Terms
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            These terms help set clear expectations for bookings, safety, and operations.
          </p>

          <ul className="mt-8 space-y-2 text-sm font-semibold text-foreground/80">
            {terms.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
