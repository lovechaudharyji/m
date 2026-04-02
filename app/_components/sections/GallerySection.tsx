"use client";

import { cn, Reveal } from "@/app/_components/shared";

const tiles = [
  {
    tag: "Learn Through Play",
    kind: "image" as const,
    image:
      "https://images.unsplash.com/photo-1602526216436-6ae7a86420d4?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2",
  },
  {
    tag: "Indoor Play Party",
    kind: "image" as const,
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2 lg:row-start-3",
  },
  {
    tag: "Holiday Bestsellers",
    kind: "gradient" as const,
    className: "col-span-12 lg:col-span-4 lg:row-span-4 lg:col-start-5 lg:row-start-1",
  },
  {
    tag: "Trending",
    kind: "image" as const,
    image:
      "https://images.unsplash.com/photo-1561909848-977d0617f275?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-1",
  },
  {
    tag: "Brain Boosters",
    kind: "image" as const,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-3",
  },
  {
    tag: "Outdoor Fun Zone",
    kind: "image" as const,
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-12 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-5",
  },
  {
    tag: "Festive Family Games",
    kind: "image" as const,
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd0f?auto=format&fit=crop&w=1600&q=80",
    className: "col-span-12 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-5",
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

        <div className="mt-10 grid grid-cols-12 gap-5 lg:auto-rows-[96px]">
          {tiles.map((tile, idx) => (
            <Reveal key={tile.tag} delayMs={70 * idx} className={tile.className}>
              {tile.kind === "gradient" ? (
                <div className="relative h-[280px] overflow-hidden rounded-3xl border border-border bg-[radial-gradient(900px_circle_at_10%_10%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_20%,rgba(2,132,199,0.14),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.70),rgba(255,255,255,0.55))] shadow-sm backdrop-blur lg:h-full">
                  <TileTag>{tile.tag}</TileTag>
                  <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_20%,rgba(255,255,255,0.60),transparent_65%)]" />
                  <div className="relative flex h-full flex-col justify-end p-6">
                    <div className="font-heading text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                      Handpicked weekend energy
                    </div>
                    <div className="mt-2 max-w-xs text-sm font-semibold text-foreground/70">
                      From chill moments to adventure bursts—built for a perfect reset.
                    </div>
                  </div>
                </div>
              ) : (
                <ImageTile tag={tile.tag} image={tile.image} />
              )}
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
