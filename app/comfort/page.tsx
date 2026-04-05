import Image from "next/image";
import { Icon } from "@/app/_components/shared";
import Header from "@/app/_components/sections/Header";
import FooterSection from "@/app/_components/sections/FooterSection";
import BookingSection from "@/app/_components/sections/BookingSection";

const thursdayItems = [
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
    description: "Fun introductions and group games to break the ice. New friendships begin here.",
    iconPath:
      "M17 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M13 7a4 4 0 11-8 0 4 4 0 018 0 M23 21v-2a4 4 0 00-3-3.87 M19 7a4 4 0 010 7.75",
  },
  {
    time: "",
    title: "Music, Snacks & Vibes",
    description: "Music, chai & munchies as the city fades behind you. Enjoy the night highway views.",
    iconPath: "M9 18V5l12-2v13M9 18a2 2 0 11-4 0 2 2 0 014 0zm12-2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    time: "",
    title: "Rest & Recharge",
    description: "Recline your seats, put on your playlist, and drift off. You'll wake up to mountain air.",
    iconPath: "M12 6v6l4 2 M12 22a10 10 0 110-20 10 10 0 010 20z",
  },
] as const;

const fridayItems = [
  {
    time: "6:30 AM",
    title: "Arrive in Kangra Valley",
    description:
      "Step out to crisp mountain air. Feel the aura of the Himalayas as you breathe in the freshness of pine-scented mornings.",
    iconPath: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z M12 10a3 3 0 110-6 3 3 0 010 6z",
  },

   {
    time: "",
    title: "Maa Chamunda Devi Temple",
    description:
      "Chamunda Devi Temple is a revered shrine of Goddess Chamunda, set beside a river with stunning mountain views, known for its strong spiritual energy and peaceful vibe",
    iconPath: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z M12 10a3 3 0 110-6 3 3 0 010 6z",
  },

   {
    time: "",
    title: "Dalai Lama Monastery",
    description:
      "(Dalai Lama Monastery) is a peaceful Tibetan spiritual center, known for its prayer halls, monks, and serene atmosphere—perfect for meditation and cultural experience",
    iconPath: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1118 0z M12 10a3 3 0 110-6 3 3 0 010 6z",
  },
  {
    time: "",
    title: "McLeodganj Hotel Check-in + Market Walk",
    description:
      "Freshen up and relax. Explore the McLeodganj flea market for local handicrafts and souvenirs.",
    iconPath:
      "M6 6h15l-1.5 9h-13L5 3H2 M7 20a1 1 0 100 2 1 1 0 000-2z M17 20a1 1 0 100 2 1 1 0 000-2z",
  },

  {
    time: "",
    title: "Breakfast",
    description:
      "Pratha + Butter + Tea",
    iconPath:
      "M6 6h15l-1.5 9h-13L5 3H2 M7 20a1 1 0 100 2 1 1 0 000-2z M17 20a1 1 0 100 2 1 1 0 000-2z",
  },

    {
    time: "Late Morning",
    title: "Bhagsu Nag Temple + Natural Swimming Pool",
    description:
      "Bhagsu Nag Temple is an ancient Shiva temple known for its sacred water pool and nearby Bhagsu Waterfall, offering a peaceful spiritual vibe amidst scenic mountain views.",
    iconPath: "M3 20l7-12 4 7 3-5 4 10H3z",
  },
  {
    time: "Late Morning",
    title: "Bhagsu Waterfall + Spiritual Aura",
    description:
      "Visit the serene Bhagsu Waterfall and soak in the peaceful energy of the hills.",
    iconPath: "M3 20l7-12 4 7 3-5 4 10H3z",
  },
  {
    time: "Afternoon",
    title: "Dalai Lama Monastery ",
    description:
      "Visit the Dalai Lama Monastery and unwind at cozy hillside cafés with stunning views.",
    iconPath:
      "M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4",
  },
  {
    time: "Evening",
    title: "Dinner (Himachal Pradesh Special Kangri Dham) + Overnight Stay",
    description: "Return to the hotel, enjoy dinner, and settle in for a peaceful overnight stay.",
    iconPath: "M4 4h16v16H4z M7 9h10 M7 12h10 M7 15h7",
  },
] as const;

const saturdayItems = [
  {
    time: "Breakfast",
    title: "Freshen Up + Breakfast",
    description: "Start your day with a hearty breakfast and get ready for the trek and camping experience.",
    iconPath: "M8 7V3M16 7V3M4 11h16M5 5h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z",
  },
  {
    time: "10:15 AM",
    title: "Triund Trek Begins",
    description:
      "Start from Bhagsu Waterfall. The trail winds through oak and rhododendron forests with stunning views at every turn.",
    iconPath: "M3 20l7-12 4 7 3-5 4 10H3z",
  },
  {
    time: "1:00 PM",
    title: "Scenic Viewpoints",
    description:
      "Panoramic Dhauladhar range views and sun-kissed valleys. Capture your best moments on the trail.",
    iconPath: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z",
  },
  {
    time: "3:30 PM",
    title: "Reach Triund Top + Camp Setup",
    description:
      "The iconic meadow at 2,850m. Set up camp with 360° mountain views. Dhauladhar peaks tower right in front of you.",
    iconPath:
      "M3 20L12 4l9 16M12 4v16 M7 20v2 M17 20v2",
  },
  {
    time: "6:00 PM",
    title: "Bonfire, Games & New Bonds",
    description:
      "Gather around the bonfire under a blanket of stars. Music, stories, laughter, and memories that last forever.",
    iconPath: "M12 2C8 6 9 10 7 12c-2 2-2 6 2 8 4-2 5-6 3-8-2-2 0-6 0-10z",
  },
  {
    time: "8:30 PM",
    title: "Dinner at Campsite",
    description: "Hot food and chai served under the Milky Way. Nothing tastes better.",
    iconPath: "M5 12h14M12 5v14 M7 5h10",
  },
] as const;

const sundayItems = [
  {
    time: "7:00 AM",
    title: "Breakfast at Camp",
    description: "Hot tea and breakfast with mountain views. Pack up camp and get ready for descent.",
    iconPath: "M8 7V3M16 7V3M4 11h16M5 5h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z",
  },
  {
    time: "8:00 AM",
    title: "Descend from Triund",
    description: "Take the scenic route down. Enjoy the fresh morning air and capture last moments with the mountains.",
    iconPath: "M10 19l-7-7 7-7M3 12h14a4 4 0 014 4v3",
  },
  {
    time: "Late Morning",
    title: "Explore Tea Gardens",
    description: "Tea gardens are lush green plantations spread across rolling hills, offering scenic views, fresh mountain air, and a calm, refreshing escape into nature.",
    iconPath:
      "M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4",
  },
  {
    time: "Afternoon",
    title: "Himachal Pradesh Cricket Association Stadium",
    description: "one of the most scenic cricket stadiums in the world, set against the stunning Dhauladhar mountains, offering breathtaking views along with thrilling matches.",
    iconPath: "M4 7h16M4 12h16M4 17h16",
  },
  {
    time: "Evening",
    title: "Return Departure",
    description: "Wrap up the journey and depart by evening with stories worth telling.",
    iconPath: "M22 12H6 M12 18l-6-6 6-6 M3 12h3",
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
    <div className={["relative space-y-10 border-l-2 pl-8", borderClassName].join(" ")}>
      {items.map((item) => (
        <div key={`${item.time}-${item.title}`} className="relative">
          <div
            className={[
              "absolute -left-[2.55rem] top-0.5 grid h-10 w-10 place-items-center rounded-full border border-border shadow-sm",
              badgeClassName,
            ].join(" ")}
          >
            <Icon className="text-white" path={item.iconPath} />
          </div>
          <span className={["text-xs font-semibold tracking-widest uppercase", timeClassName].join(" ")}>
            {item.time}
          </span>
          <h3 className={["mt-1 font-heading text-lg font-extrabold tracking-tight", titleClassName].join(" ")}>
            {item.title}
          </h3>
          <p className={["mt-1 text-sm font-semibold leading-relaxed", descriptionClassName].join(" ")}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ComfortPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header brandName="MountAura" />

      <main>
        <section className="relative min-h-[700px] overflow-hidden">
          <Image src="/images/monestry.png" alt="Monastery view in McLeodganj" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-transparent" />
          <div className="relative z-10 mx-auto flex min-h-[700px] w-full max-w-6xl flex-col items-center justify-center px-5 pt-28 text-center sm:pt-32">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-extrabold tracking-widest text-white uppercase backdrop-blur">
              <Icon className="text-brand" path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4" />
              <span>MountAura Travels</span>
              <Icon className="text-brand" path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4" />
            </div>

            <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-brand/15 px-6 py-6 shadow-[0_18px_60px_rgba(14,165,233,0.22)] backdrop-blur sm:px-8 sm:py-7">
              <h1 className="font-heading text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Delhi to Dharamshala
              </h1>
              <p className="mt-4 font-heading text-lg font-extrabold text-white/85 sm:text-xl md:text-2xl">
                Resort Plan — McLeodganj Stay + Triund Trek & Camping
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-white/10 bg-black/25 px-6 py-4 text-sm font-semibold text-white/85 backdrop-blur">
              <div className="flex items-center gap-2">
                <Icon className="text-white" path="M8 7V3M16 7V3M4 11h16M5 5h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
                <span>Thursday Night – Sunday Evening</span>
              </div>
              <div className="hidden h-4 w-px bg-white/25 sm:block" />
              <div className="flex items-center gap-2">
                <Icon
                  className="text-white"
                  path="M4 21V5a2 2 0 012-2h7a2 2 0 012 2v16M9 21V7M13 21v-8M20 21V11a2 2 0 00-2-2h-4"
                />
                <span>Hotel Stay · Culture & Adventure</span>
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
              Thursday Night
            </h2>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/70 sm:text-lg">
              The journey begins. Hop on the MountAura traveller, meet new people, play games, and let the excitement build as Delhi fades away.
            </p>

            <div className="mt-12">
              <Timeline
                items={thursdayItems}
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
              Friday — McLeodganj Explorer
            </h2>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-foreground/70 sm:text-lg">
              A full day of waterfalls, monasteries, markets, and cozy cafés — with a comfortable hotel stay to end the day.
            </p>

            <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <Timeline items={fridayItems} borderClassName="border-border" badgeClassName="bg-navy" />

              <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <Image src="/images/p4.webp" alt="McLeodganj market walk" width={1280} height={720} className="h-64 w-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <Image src="/images/p6.webp" alt="Bhagsu waterfall area" width={1280} height={720} className="h-64 w-full object-cover" />
                </div>
                <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur">
                  <h4 className="font-heading text-lg font-extrabold tracking-tight text-navy">Friday Highlights</h4>
                  <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground/75">
                    <li>McLeodganj flea market shopping</li>
                    <li>Bhagsu Waterfall and temple vibes</li>
                    <li>Dalai Lama Monastery calm & culture</li>
                    <li>Hillside cafés and sunset views</li>
                    <li>Dinner and overnight hotel stay</li>
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
                  <Image src="/images/p5.webp" alt="Triund trek trail" width={1280} height={720} className="h-80 w-full object-cover" />
                </div>
                <div className="rounded-3xl border border-border bg-white/70 p-6 shadow-sm backdrop-blur">
                  <h4 className="font-heading text-lg font-extrabold tracking-tight text-navy">Trek Views</h4>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/70">
                    Experience stunning panoramic views of the Dhauladhar range on one side and Kangra Valley on the other.
                  </p>
                </div>
              </div>

              <div>
                <div className="text-xs font-extrabold tracking-widest text-brand uppercase">Day Two</div>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
                  Saturday — Trek & Camping
                </h2>
                <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-foreground/70 sm:text-lg">
                  Freshen up, fuel up, and head out for the Triund trek — the highlight of the weekend.
                </p>

                <div className="mt-12">
                  <Timeline items={saturdayItems} borderClassName="border-border" badgeClassName="bg-brand" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background px-5 py-16 sm:py-20">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
              <div>
                <div className="text-xs font-extrabold tracking-widest text-brand uppercase">Day Three</div>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl md:text-5xl">
                  Sunday — Golden Morning
                </h2>
                <p className="mt-4 max-w-xl text-base font-semibold leading-7 text-foreground/70 sm:text-lg">
                  Witness a Himalayan sunrise, explore Tibetan culture, and carry home stories worth telling.
                </p>

                <div className="mt-12">
                  <Timeline items={sundayItems} borderClassName="border-border" badgeClassName="bg-navy" />
                </div>
              </div>

              <div className="space-y-6 lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <Image src="/images/p2.webp" alt="Sunrise over the Himalayas" width={1280} height={720} className="h-80 w-full object-cover" />
                </div>
                <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur">
                  <h4 className="font-heading text-lg font-extrabold tracking-tight text-navy">Return Notes</h4>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-foreground/70">
                    Wrap up the journey with your return departure by evening. Reach back with new friends, strong bonds, and photos you will keep forever.
                  </p>
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

