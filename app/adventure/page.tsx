import Image from "next/image";
import { Icon } from "@/app/_components/shared";
import Header from "@/app/_components/sections/Header";
import FooterSection from "@/app/_components/sections/FooterSection";
import BookingSection from "@/app/_components/sections/BookingSection";

const fridayItems = [
  {
    time: "",
    title: "Departure from Delhi NCR",
    description:
      "Board the MountAura Traveller from a central pick-up point. Meet your fellow travellers, exchange stories, and kick off the adventure.",
    iconPath: "M5 16l3-8h8l3 8 M7 16v4 M17 16v4 M6 20h12 M7 12h10 M9 8V6a1 1 0 011-1h4a1 1 0 011 1v2",
  },
  {
    time: "",
    title: "Ice-Breakers & Games",
    description: "Fun introductions and group games to break the ice. New friendships begin here!",
    iconPath:
      "M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M13 7a4 4 0 11-8 0 4 4 0 018 0 M23 21v-2a4 4 0 00-3-3.87 M19 7a4 4 0 010 7.75",
  },
  {
    time: "",
    title: "Music, Snacks & Vibes",
    description: "Music, chai & munchies as the city fades behind you. Enjoy the night highway views.",
    iconPath: "M9 18V5l12-2v13 M9 18a3 3 0 11-6 0 3 3 0 016 0z M21 16a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    time: "",
    title: "Rest & Recharge",
    description: "Recline your seats, put on your playlist, and drift off. You'll wake up to mountain air.",
    iconPath:
      "M12 2a10 10 0 100 20 10 10 0 000-20z M12 6v6l4 2",
  },
] as const;

const saturdayItems = [
  {
    time: "6:30 AM",
    title: "Arrive in Kangra Valley",
    description:
      "Step out to crisp mountain air. Feel the aura of the Himalayas as you breathe in the freshness of pine-scented mornings.",
    iconPath: "M12 2v2 M4.22 4.22l1.42 1.42 M2 12h2 M4.22 19.78l1.42-1.42 M12 20v2 M19.78 19.78l-1.42-1.42 M20 12h2 M19.78 4.22l-1.42 1.42 M6 14l2-2 2 2 4-4 4 4",
  },
  {
    time: "7:00 AM",
    title: "Hotel Check-in & Freshen Up",
    description: "Quick freshen-up at a comfortable Dharamshala hotel. Hot water showers, change into trekking gear.",
    iconPath: "M3 21V5a2 2 0 012-2h14a2 2 0 012 2v16 M7 21V7 M11 21v-8 M15 21v-4",
  },
  {
    time: "8:00 AM",
    title: "Breakfast + 2 Hrs Rest",
    description: "Hearty breakfast — paranthas, chai, omelette. Rest and recharge for the trek ahead.",
    iconPath:
      "M4 11h16 M6 11l1 10h10l1-10 M9 11V7a3 3 0 016 0v4",
  },
  {
    time: "10:00 AM",
    title: "Bhagsu Nag Temple & Pool",
    description:
      "Visit the ancient temple at Bhagsu Nag. Take a refreshing dip in the natural pool surrounded by mountains.",
    iconPath: "M3 19c2-2 4-2 6 0s4 2 6 0 4-2 6 0 M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0",
  },
  {
    time: "10:15 AM",
    title: "Triund Trek Begins!",
    description:
      "Start from Bhagsu Waterfall. The trail winds through oak and rhododendron forests with stunning views at every turn.",
    iconPath: "M3 20l7-12 4 7 3-5 4 10H3z",
  },
  {
    time: "1:00 PM",
    title: "Scenic Viewpoints",
    description:
      "Panoramic Dhauladhar range views and sun-kissed valleys. Capture your best moments on the trail.",
    iconPath: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z M12 12a3 3 0 100-6 3 3 0 000 6z",
  },
  {
    time: "3:30 PM",
    title: "Reach Triund Top!",
    description:
      "The iconic meadow at 2,850m. Set up camp with 360° mountain views. The Dhauladhar peaks tower right in front of you.",
    iconPath: "M3 20l9-16 9 16H3z M12 10v10",
  },
  {
    time: "6:00 PM",
    title: "Bonfire, Games & New Bonds",
    description:
      "Gather around the bonfire under a blanket of stars. Music, stories, laughter, and memories that last forever.",
    iconPath:
      "M12 2s4 4 4 8a4 4 0 11-8 0c0-4 4-8 4-8z M8 21h8",
  },
  {
    time: "8:30 PM",
    title: "Dinner at Campsite",
    description:
      "Hot food and chai served under the Milky Way. Nothing tastes better than dinner at 9,350 feet.",
    iconPath: "M4 3h16 M6 3v9a3 3 0 003 3h6a3 3 0 003-3V3",
  },
] as const;

const sundayItems = [
  {
    time: "5:30 AM",
    title: "Sunrise Between Dhauladhar Peaks",
    description:
      "Wake up to a once-in-a-lifetime sunrise. Golden light spills between the snow-capped peaks — pure magic.",
    iconPath: "M12 2v2 M4.22 4.22l1.42 1.42 M2 12h2 M20 12h2 M19.78 4.22l-1.42 1.42 M6 18h12 M8 14l2 2 2-2 2 2 2-2",
  },
  {
    time: "7:00 AM",
    title: "Breakfast at Camp",
    description:
      "Hot tea and breakfast with mountain views. Pack up camp and get ready for descent.",
    iconPath:
      "M4 11h16 M6 11l1 10h10l1-10 M9 11V7a3 3 0 016 0v4",
  },
  {
    time: "8:00 AM",
    title: "Descend from Triund",
    description: "Take the scenic route down. Enjoy the fresh morning air and capture last moments with the mountains.",
    iconPath: "M12 5v14 M19 12l-7 7-7-7",
  },
  {
    time: "11:00 AM",
    title: "Dalai Lama Monastery",
    description:
      "If time permits, visit the serene complex. Experience Tibetan culture and peaceful prayer halls.",
    iconPath:
      "M12 3l8 5v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V8l8-5z M9 12h6 M12 9v6",
  },
  {
    time: "12:30 PM",
    title: "McLeodganj Market",
    description:
      "Browse souvenirs and grab momos from a street stall. The perfect end to a perfect weekend.",
    iconPath:
      "M6 6h15l-1.5 9h-13L5 3H2 M7 20a1 1 0 100 2 1 1 0 000-2z M17 20a1 1 0 100 2 1 1 0 000-2z",
  },
] as const;

function Timeline({
  items,
  borderClassName,
  badgeClassName,
  timeClassName = "text-foreground/60",
  titleClassName = "text-navy",
  descriptionClassName = "text-foreground/70",
}: {
  items: readonly { time: string; title: string; description: string; iconPath: string }[];
  borderClassName: string;
  badgeClassName: string;
  timeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <div className={["relative pl-8 border-l-2 space-y-10", borderClassName].join(" ")}>
      {items.map((item) => (
        <div key={`${item.time}-${item.title}`} className="relative">
          <div className={["absolute -left-[2.55rem] top-0.5 grid h-10 w-10 place-items-center rounded-full border border-border shadow-sm", badgeClassName].join(" ")}>
            <Icon className="text-white" path={item.iconPath} />
          </div>
          <span className={["text-xs font-semibold tracking-widest uppercase", timeClassName].join(" ")}>{item.time}</span>
          <h3 className={["mt-1 font-heading text-lg font-extrabold tracking-tight", titleClassName].join(" ")}>{item.title}</h3>
          <p className={["mt-1 text-sm font-semibold leading-relaxed", descriptionClassName].join(" ")}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function AdventurePlanPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header brandName="MountAura" />

      <main>
        <section className="relative min-h-[700px] overflow-hidden">
          <Image
            src="/images/p7.webp"
            alt="Dhauladhar mountain range at golden hour"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[700px] w-full max-w-6xl flex-col items-center justify-center px-5 pt-28 text-center sm:pt-32">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-extrabold tracking-widest text-white uppercase backdrop-blur">
              <Icon className="text-brand" path="M3 20l7-12 4 7 3-5 4 10H3z" />
              <span>MountAura Travels</span>
              <Icon className="text-brand" path="M3 20l7-12 4 7 3-5 4 10H3z" />
            </div>

            <h1 className="font-heading text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Delhi to Dharamshala
            </h1>
            <p className="mt-4 font-heading text-lg font-extrabold text-white/80 sm:text-xl md:text-2xl">
              Weekend Escape — Triund Trek & Camping
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-white/10 bg-black/25 px-6 py-4 text-sm font-semibold text-white/85 backdrop-blur">
              <div className="flex items-center gap-2">
                <Icon className="text-white" path="M8 7V3M16 7V3M4 11h16M5 5h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                <span>Friday Night – Sunday Evening</span>
              </div>
              <div className="hidden h-4 w-px bg-white/25 sm:block" />
              <div className="flex items-center gap-2">
                <Icon className="text-white" path="M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M13 7a4 4 0 11-8 0 4 4 0 018 0 M23 21v-2a4 4 0 00-3-3.87 M19 7a4 4 0 010 7.75" />
                <span>Group Trip · Make New Friends</span>
              </div>
            </div>

            <a
              href="#itinerary"
              className="mt-14 inline-flex flex-col items-center gap-2 text-xs font-extrabold tracking-widest text-white/70 uppercase transition hover:text-brand"
            >
              <span>Explore Itinerary</span>
              <Icon className="text-current" path="M12 5v14 M19 12l-7 7-7-7" />
            </a>
          </div>
        </section>

        <section className="bg-navy px-5 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="text-xs font-extrabold tracking-widest text-brand uppercase">Day Zero</div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Friday Night
            </h2>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/70 sm:text-lg">
              The journey begins. Hop on the MountAura traveller, meet new people, play games, and let the excitement build as Delhi fades away.
            </p>

            <div className="mt-12">
              <Timeline
                items={fridayItems}
                borderClassName="border-white/15"
                badgeClassName="bg-brand"
                timeClassName="text-white/70"
                titleClassName="text-white"
                descriptionClassName="text-white/70"
              />
            </div>
          </div>
        </section>

        <section id="itinerary" className="bg-background px-5 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="text-xs font-extrabold tracking-widest text-brand uppercase">Day One</div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
              Saturday — The Adventure
            </h2>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-foreground/70 sm:text-lg">
              From the sacred Bhagsu Nag Temple to the legendary Triund summit. A day packed with views and unforgettable campfire nights.
            </p>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Timeline items={saturdayItems} borderClassName="border-border" badgeClassName="bg-navy" />

              <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <Image
                    src="/images/p5.webp"
                    alt="Triund trek trail"
                    width={1280}
                    height={720}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <Image
                    src="/images/p1.webp"
                    alt="Bonfire and friends at campsite"
                    width={1280}
                    height={720}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur">
                  <h4 className="font-heading text-lg font-extrabold tracking-tight text-navy">Trek Highlights</h4>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/75">
                    <li>Dhauladhar Range — snow-capped peaks at arm&apos;s reach</li>
                    <li>Rhododendron & oak forest trail</li>
                    <li>McLeodganj panoramic views</li>
                    <li>Camping at 2,850m altitude</li>
                    <li>Milky Way visible on clear nights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card/70 px-5 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <div className="space-y-6 lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <Image
                    src="/images/p2.webp"
                    alt="Sunrise over Himalayan peaks"
                    width={1280}
                    height={720}
                    className="h-80 w-full object-cover"
                  />
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-sm backdrop-blur">
                  <h4 className="font-heading text-lg font-extrabold tracking-tight text-navy">Return Journey</h4>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/70">
                    Board the MountAura traveller by 2:00 PM from Dharamshala. Reach Delhi NCR by 11:00 PM – 12:00 AM.
                    Share photos, exchange numbers, and carry memories that last forever.
                  </p>
                </div>
              </div>

              <div>
                <div className="text-xs font-extrabold tracking-widest text-brand uppercase">Day Two</div>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
                  Sunday — Golden Morning
                </h2>
                <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-foreground/70 sm:text-lg">
                  Witness a Himalayan sunrise, explore Tibetan culture, and carry home stories worth telling.
                </p>

                <div className="mt-12">
                  <Timeline items={sundayItems} borderClassName="border-border" badgeClassName="bg-brand" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BookingSection />
      </main>

      <FooterSection brandName="MountAura" />
    </div>
  );
}
