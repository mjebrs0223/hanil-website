"use client";

import { useEffect, useState } from "react";

export default function HomeEN() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  const cards = [
    { title: "About Us", img: "/images/menu-about.png", href: "/en/about" },
    { title: "Business\nArea", img: "/images/menu-business.png", href: "/en/business" },
    { title: "IR\nInformation", img: "/images/menu-ir.png", href: "/en/ir" },
    { title: "Notice", img: "/images/menu-news.png", href: "/en/news" },
    { title: "Recruit\nInformation", img: "/images/menu-recruit.png", href: "/en/recruit" },
    { title: "Contact\nUs", img: "/images/menu-contact.png", href: "/en/contact" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const section = document.getElementById("card-carousel-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);

      const nextProgress =
        totalScroll > 0 ? (scrolled / totalScroll) * 6 : 0;

      setProgress(nextProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="bg-[#f7f7f7] text-[#222]">
      {/* HERO */}
      <section className="relative flex h-screen items-center overflow-hidden px-12 pr-28">
        <div className="absolute inset-0">
          <img
            src="/images/main-hero.jpg"
            alt="Hanil International"
            className="h-full w-full object-cover brightness-90"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-[#f7f7f7]/20" />
        </div>

        <div className="relative z-10 max-w-5xl pt-24">
          <p className="text-[24px] font-extrabold tracking-[0.18em] text-blue-700">
            HANIL INTERNATIONAL
          </p>

          <h1 className="mt-4 text-6xl font-extrabold leading-tight text-blue-950">
            Change and Innovation
            <br />
            with ESG 2030
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-950">
            We create new possibilities for global business, focusing on
            energy, steel, chemical, and emerging growth sectors.
          </p>
        </div>

        <div className="absolute bottom-12 right-12 z-10 flex flex-col items-center gap-4">
          <span className="rotate-90 text-xs font-semibold tracking-[0.35em] text-blue-950">
            SCROLL
          </span>
          <div className="mt-10 h-24 w-px bg-blue-700" />
        </div>
      </section>

      {/* CARD SECTION */}
      {mounted && (
        <section
          id="card-carousel-section"
          className="relative h-[700vh] bg-[#f7f7f7]"
        >
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-12">
            <div className="absolute left-1/2 top-1/2 h-[1040px] w-[1040px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/70" />
            <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/60" />
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/50" />

            <div className="relative h-[560px] w-[1180px]">
              {cards.map((card, index) => {
                const count = cards.length;

                const angle =
                  Math.PI / 2 -
                  (index / count) * Math.PI * 2 +
                  progress * (Math.PI * 2 / count);

                const radiusX = 430;
                const radiusY = 115;

                const x = Math.cos(angle) * radiusX;
                const y = Math.sin(angle) * radiusY - 70;

                const centerScore = (Math.sin(angle) + 1) / 2;

                const scale = 0.62 + centerScore * 0.62;
                const opacity = 0.22 + centerScore * 0.78;
                const blur = centerScore > 0.55 ? 0 : 2;
                const zIndex = Math.round(centerScore * 100);

                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className={`group absolute left-1/2 top-1/2 block h-[370px] w-[258px] overflow-hidden rounded-[2.6rem] bg-white transition-all duration-500 ${
                      centerScore > 0.75
                        ? "ring-1 ring-white/80 shadow-[0_50px_130px_rgba(30,80,160,0.32)]"
                        : "shadow-[0_22px_70px_rgba(0,0,0,0.14)]"
                    }`}
                    style={{
                      zIndex,
                      opacity,
                      filter: `blur(${blur}px)`,
                      transform: `
                        translate3d(
                          calc(-50% + ${x}px),
                          calc(-50% + ${y}px),
                          0
                        )
                        scale(${scale})
                      `,
                      transition:
                        "transform 0.16s linear, opacity 0.16s linear, filter 0.16s linear",
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover brightness-95 saturate-90 transition duration-700 group-hover:scale-110 group-hover:brightness-105"
                    />

                    <div
                      className={`absolute inset-0 transition duration-500 ${
                        centerScore > 0.75
                          ? "bg-gradient-to-b from-white/20 via-white/5 to-white/60"
                          : "bg-blue-950/35 group-hover:bg-blue-950/48"
                      }`}
                    />

                    <div className="absolute left-8 top-8 right-8">
                      <h2
                        className={`whitespace-pre-line font-extrabold leading-[1.08] drop-shadow transition-colors duration-500 ${
                          card.title.includes("Information")
                            ? "text-[1.75rem]"
                            : "text-[2.25rem]"
                        } ${
                          centerScore > 0.75
                            ? "text-blue-950"
                            : "text-white"
                        }`}
                      >
                        {card.title}
                      </h2>
                    </div>

                    <div
                      className={`absolute bottom-8 left-8 flex items-center gap-4 transition-colors duration-500 ${
                        centerScore > 0.75 ? "text-slate-500" : "text-white"
                      }`}
                    >
                      <span className="text-sm font-bold tracking-[0.24em]">
                        VIEW
                      </span>

                      <div
                        className={`h-px w-12 transition-all duration-500 group-hover:w-24 ${
                          centerScore > 0.75
                            ? "bg-slate-400"
                            : "bg-white/80"
                        }`}
                      />

                      <span className="text-xl">→</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center">
              <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-blue-700 p-1">
                <div
                  className="h-2 w-2 rounded-full bg-blue-700"
                  style={{
                    transform: `translateY(${progress * 3}px)`,
                    transition: "transform 0.12s linear",
                  }}
                />
              </div>

              <p className="mt-3 text-xs font-bold tracking-[0.45em] text-blue-700">
                SCROLL
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}