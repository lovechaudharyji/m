"use client";

import { cn, Reveal } from "@/app/_components/shared";

const tiles = [
  {
    tag: "Learn Through Play",
    image: "/images/p1.webp",
    className: "col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2",
  },
  {
    tag: "Indoor Play Party",
    image: "/images/p3.webp",
    className: "col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2 lg:row-start-3",
  },
  {
    tag: "Holiday Bestsellers",
    image: "/images/p8.jpg",
    className: "col-span-1 sm:col-span-12 lg:col-span-4 lg:row-span-4 lg:col-start-5 lg:row-start-1",
  },
  {
    tag: "Trending",
    image: "/images/p4.webp",
    className: "col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-1",
  },
  {
    tag: "Brain Boosters",
    image: "/images/p5.webp",
    className: "col-span-1 sm:col-span-6 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3",
  },
  {
    tag: "Outdoor Fun Zone",
    image: "/images/p6.webp",
    className: "col-span-1 sm:col-span-12 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-5",
  },
  {
    tag: "Festive Family Games",
    image: "/images/p7.webp",
    className: "hidden sm:block sm:col-span-12 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-5",
  },
] as const;

export default function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-14 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className="flex flex-col items-center text-center">
          <div className="font-heading text-sm font-extrabold tracking-widest text-brand uppercase">
            Gallery
          </div>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Highlights to get excited about
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
            A quick look at the vibe, the fun, and the moments you’ll remember.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-12 lg:auto-rows-[96px]">
          {tiles.map((tile, idx) => (
            <Reveal key={tile.tag} delayMs={70 * idx} className={tile.className}>
              <ImageTile tag={tile.tag} image={tile.image} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TileTag({ children }: { children: string }) {
  return (
    <div className="absolute left-4 top-4 z-10">
      <div className="inline-flex items-center rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold text-foreground/80 shadow-sm backdrop-blur">
        {children}
      </div>
    </div>
  );
}

function ImageTile({ tag, image }: { tag: string; image: string }) {
  return (
    <div
      className={cn(
        "group relative h-[220px] overflow-hidden rounded-3xl border border-border bg-white/50 shadow-sm backdrop-blur lg:h-full",
      )}
    >
      <TileTag>{tag}</TileTag>
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0.20)), url('${image}')`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_10%,rgba(14,165,233,0.12),transparent_60%)]" />
    </div>
  );
}
