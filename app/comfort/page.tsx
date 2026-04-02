import Link from "next/link";

export default function ComfortPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-10 border-b border-border bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/#experience" className="we-button inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-white/80">
            <span>← Back</span>
          </Link>
          <div className="font-heading text-sm font-extrabold tracking-widest text-foreground/70 uppercase">
            Tripogram Club
          </div>
        </div>
      </div>

      <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
              <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                Comfort Track
              </div>
              <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                McLeodganj + Triund Trek
              </h1>
              <p className="mt-4 text-base leading-7 text-foreground/70 sm:text-lg">
                A perfect blend of spirituality, culture, and adventure in the heart of Himachal Pradesh.
              </p>

              <div className="mt-8 space-y-3 text-sm leading-7 text-foreground/80">
                <p>
                  McLeodganj, known for its Tibetan influence, peaceful monasteries, and vibrant streets, sets the tone for a soulful escape.
                </p>
                <p>
                  From here begins the scenic trek to Triund — a moderately challenging hike that rewards you with breathtaking views of the Dhauladhar range and the Kangra Valley.
                </p>
                <p>
                  Surrounded by lush forests and cool mountain air, camping at Triund under a starlit sky is a truly magical experience.
                </p>
                <p>
                  This trip is ideal for nature lovers and adventure seekers craving a refreshing Himalayan getaway.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur">
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy">
                Brief Itinerary
              </h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Day 1
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>Reach McLeod Ganj</li>
                    <li>Check-in hotel</li>
                    <li>Local sightseeing</li>
                    <li>Dalai Lama Monastery</li>
                    <li>Café hopping</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Day 2
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>Breakfast</li>
                    <li>Start Triund Trek</li>
                    <li>Reach summit & set up camp</li>
                    <li>Music & bonfire</li>
                    <li>Dinner</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Day 3
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>Breakfast</li>
                    <li>Check out from camp</li>
                    <li>Trek down</li>
                    <li>Café hopping</li>
                    <li>Drive back to Delhi</li>
                    <li>Reach Delhi</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Trip Route
                  </div>
                  <div className="mt-4 text-sm font-semibold text-foreground/80">
                    Delhi → McLeod Ganj → Dalai Lama Temple → HPCA Stadium → Triund Trek → Return
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur">
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy">
                Detailed Itinerary
              </h2>

              <div className="mt-6 grid gap-5">
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Day 0
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>Departure in evening</li>
                    <li>Assemble at pickup point</li>
                    <li>Briefing by trip leader</li>
                    <li>Dinner halt (not included)</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Day 1
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>Arrival in McLeodganj</li>
                    <li>Hotel check-in</li>
                    <li>Explore flea market</li>
                    <li>Visit Bhagsu Waterfall</li>
                    <li>Visit Dalai Lama Monastery</li>
                    <li>Café exploration</li>
                    <li>Dinner & overnight stay</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Day 2
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>Breakfast</li>
                    <li>Begin trek to Triund</li>
                    <li>Enjoy Dhauladhar & Kangra views</li>
                    <li>Reach campsite</li>
                    <li>Dinner & overnight under stars</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Day 3
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>Breakfast</li>
                    <li>Trek down</li>
                    <li>Visit Dalai Lama Temple</li>
                    <li>Explore Dharamshala Stadium & tea gardens</li>
                    <li>Return journey</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur">
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy">
                Inclusions & Exclusions
              </h2>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Inclusions
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>Entire travel as per itinerary</li>
                    <li>Accommodation (Deluxe Hotel & Dorm Camps)</li>
                    <li>4 meals: Day 1 Dinner · Day 2 Breakfast & Dinner · Day 3 Breakfast</li>
                    <li>Bonfire & Music (8–10 PM)</li>
                    <li>Trip captain</li>
                    <li>Driver charges, toll tax, parking</li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6">
                  <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                    Exclusions
                  </div>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/80">
                    <li>GST 5% extra</li>
                    <li>Lunch</li>
                    <li>Natural calamity expenses</li>
                    <li>Entry fees / camera fees</li>
                    <li>Medical & insurance</li>
                    <li>Personal expenses (laundry, drinks, etc.)</li>
                    <li>Anything not mentioned in inclusions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur">
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-navy">
                Terms & Conditions
              </h2>
              <ul className="mt-6 space-y-2 text-sm font-semibold text-foreground/80">
                <li>Advance is non-refundable</li>
                <li>Full payment required before trip</li>
                <li>Valid ID mandatory</li>
                <li>No booking transfer</li>
                <li>No refund for unused services</li>
                <li>Company not responsible for lost items</li>
                <li>Must arrive 30 mins before departure</li>
                <li>No drinking/smoking during journey</li>
                <li>Misconduct not tolerated</li>
                <li>Changes may occur due to weather, safety, etc.</li>
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
                <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                  Contact
                </div>
                <div className="mt-4 grid gap-3 text-sm font-semibold text-foreground/80">
                  <a className="we-button rounded-2xl border border-border bg-white/70 px-4 py-3 transition hover:bg-white" href="https://www.tripogramclub.com" target="_blank" rel="noreferrer">
                    www.tripogramclub.com
                  </a>
                  <a className="we-button rounded-2xl border border-border bg-white/70 px-4 py-3 transition hover:bg-white" href="tel:+918287876816">
                    +91 8287876816
                  </a>
                  <a className="we-button rounded-2xl border border-border bg-white/70 px-4 py-3 transition hover:bg-white" href="tel:+919317335532">
                    +91 9317335532
                  </a>
                  <a className="we-button rounded-2xl border border-border bg-white/70 px-4 py-3 transition hover:bg-white" href="mailto:mail@tripogramclub.com">
                    mail@tripogramclub.com
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
                <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
                  Quick Info
                </div>
                <div className="mt-5 grid gap-3">
                  {[
                    { k: "Duration", v: "2N/3D" },
                    { k: "Start/End", v: "Delhi" },
                    { k: "Departure", v: "8:30 PM – 9 PM" },
                    { k: "Arrival", v: "5 AM – 6 AM" },
                    { k: "Transport", v: "Innova / Tempo Traveller" },
                    { k: "Stay", v: "Hotel + Camps" },
                    { k: "Group Size", v: "16–24" },
                    { k: "Group Type", v: "Mixed" },
                  ].map((row) => (
                    <div key={row.k} className="flex items-center justify-between rounded-2xl border border-border bg-white/70 px-4 py-3">
                      <div className="text-sm font-semibold text-foreground/70">{row.k}</div>
                      <div className="text-sm font-extrabold text-navy">{row.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

