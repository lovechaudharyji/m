"use client";

import { Icon, Reveal } from "@/app/_components/shared";

const images = [
  { label: "Bonfire", icon: "flame", src: "/gallery-bonfire.jpg" },
  { label: "Trekking", icon: "mountain", src: "/gallery-trek.jpg" },
  { label: "Group fun", icon: "users", src: "/gallery-group.jpg" },
] as const;

export default function GallerySection() {
  return (
    <section id="gallery" className="mx-auto w-full max-w-6xl px-5 py-14 sm:py-20">
      <Reveal className="flex flex-col items-center text-center">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Gallery</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">This could be your next weekend.</p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {images.map((img, idx) => (
          <Reveal
            key={img.label}
            delayMs={60 * idx}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur"
          >
            <div
              className="aspect-[4/5] w-full bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `radial-gradient(800px circle at 20% 0%, rgba(14,165,233,0.18), transparent 55%), radial-gradient(700px circle at 90% 10%, rgba(2,132,199,0.14), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.35), rgba(255,255,255,0.10)), url('${img.src}')`,
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 font-heading text-lg font-extrabold text-white">
                {img.icon === "flame" ? (
                  <Icon className="text-white" path="M12 22c4-3 6-6 6-10a6 6 0 00-12 0c0 4 2 7 6 10z" />
                ) : img.icon === "mountain" ? (
                  <Icon className="text-white" path="M3 20l7-12 4 7 3-5 4 10H3z" />
                ) : (
                  <Icon
                    className="text-white"
                    path="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.13a4 4 0 010 7.75M20 21v-2a4 4 0 00-3-3.87M10 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                )}
                <span>{img.label}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
