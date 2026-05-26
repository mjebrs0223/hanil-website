"use client";

import { useEffect, useState } from "react";
import TopButton from "../components/TopButton";

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
        totalScroll > 0 ? (scrolled / totalScroll) * (cards.length - 1) : 0;

      setProgress(nextProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [cards.length]);

  useEffect(() => {
    let locked = false;

    const handleWheel = (e: WheelEvent) => {
      const cardSection = document.getElementById("card-carousel-section");
      if (!cardSection) return;

      const cardTop = cardSection.offsetTop;
      const currentY = window.scrollY;

      if (currentY < cardTop - 100 && e.deltaY > 0 && !locked) {
        locked = true;
        e.preventDefault();

        window.scrollTo({
          top: cardTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          locked = false;
        }, 1200);
      }

      if (
        currentY >= cardTop - 20 &&
        currentY <= cardTop + window.innerHeight &&
        e.deltaY < 0 &&
        !locked
      ) {
        locked = true;
        e.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        setTimeout(() => {
          locked = false;
        }, 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <main className="bg-[#f7f7f7] text-[#222]">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 sm:px-10 lg:h-screen lg:px-12 lg:pr-28 lg:py-0">
        <div className="absolute inset-0">
          <img
            src="/images/main-hero.jpg"
            alt="Hanil International"
            className="h-full w-full object-cover object-[60%_center] brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-[#f7f7f7]/20" />
        </div>

        <div className="relative z-10 max-w-5xl pt-10 sm:pt-20 lg:pt-24">
          <p className="text-[15px] font-extrabold tracking-[0.14em] text-blue-700 sm:text-[18px] lg:text-[24px] lg:tracking-[0.18em]">
            HANIL INTERNATIONAL
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-blue-950 sm:text-5xl lg:text-6xl lg:leading-tight">
            Change and Innovation
            <br />
            with ESG 2030
          </h1>

          <p className="mt-6 max-w-[42rem] text-base leading-7 text-blue-950 sm:text-lg sm:leading-8 lg:mt-8">
  <span className="hidden sm:inline">
    Creating new possibilities in global business across energy,
    steel, chemical 
    <br />
    and new growth industries.
  </span>

  <span className="inline sm:hidden">
    Creating new possibilities
    <br />
    in global business across
    <br />
    energy, steel, chemical
    <br />
    and new growth industries.
  </span>
</p>
        </div>

        <div className="absolute bottom-12 right-12 z-10 hidden flex-col items-center gap-4 lg:flex">
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
          className="relative h-[300vh] bg-[#f7f7f7] sm:h-[360vh] lg:h-[420vh]"
        >
          <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6 sm:px-10 lg:px-12">
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/70 sm:h-[760px] sm:w-[760px] lg:h-[1040px] lg:w-[1040px]" />
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/60 sm:h-[520px] sm:w-[520px] lg:h-[760px] lg:w-[760px]" />
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/50 sm:h-[360px] sm:w-[360px] lg:h-[520px] lg:w-[520px]" />

            <div className="relative h-[560px] w-full max-w-[1180px]">
              {cards.map((card, index) => {
                const snapped = Math.round(progress);
                const count = cards.length;

                const angle =
                  Math.PI / 2 -
                  ((index - snapped) / count) * Math.PI * 2;

                const isMobile =
                  typeof window !== "undefined" && window.innerWidth < 640;

                const radiusX = isMobile ? 170 : 430;
                const radiusY = isMobile ? 65 : 120;

                const x = Math.cos(angle) * radiusX;
                const y = Math.sin(angle) * radiusY - 70;

                const centerScore = (Math.sin(angle) + 1) / 2;
                const scale = 0.62 + centerScore * 0.42;
                const opacity = 0.18 + centerScore * 0.82;
                const zIndex = Math.round(centerScore * 100);
                const isActive = centerScore > 0.92;

                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className={`group absolute left-1/2 top-1/2 block h-[260px] w-[180px] overflow-hidden rounded-[2.6rem] bg-white transition-all duration-500 sm:h-[300px] sm:w-[210px] lg:h-[370px] lg:w-[258px] ${
                      isActive
                        ? "ring-1 ring-white/80 shadow-[0_50px_130px_rgba(30,80,160,0.32)]"
                        : "shadow-[0_22px_70px_rgba(0,0,0,0.14)]"
                    }`}
                    style={{
                      zIndex,
                      opacity,
                      transform: `
                        translate3d(
                          calc(-50% + ${x}px),
                          calc(-50% + ${y}px),
                          0
                        )
                        scale(${scale})
                      `,
                      transition:
                        "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.5s ease",
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover brightness-95 saturate-90 transition duration-700 group-hover:scale-110 group-hover:brightness-105"
                    />

                    <div
                      className={`absolute inset-0 transition duration-500 ${
                        isActive
                          ? "bg-gradient-to-b from-white/20 via-white/5 to-white/60"
                          : "bg-blue-950/35 group-hover:bg-blue-950/48"
                      }`}
                    />

                    <div className="absolute left-6 right-6 top-6 sm:left-8 sm:right-8 sm:top-8">
                      <h2
                        className={`whitespace-pre-line font-extrabold leading-[1.08] drop-shadow transition-colors duration-500 ${
                          card.title.includes("Information")
                            ? "text-[1.1rem] sm:text-[1.4rem] lg:text-[1.75rem]"
                            : "text-[1.4rem] sm:text-[1.7rem] lg:text-[2.25rem]"
                        } ${isActive ? "text-blue-950" : "text-white"}`}
                      >
                        {card.title}
                      </h2>
                    </div>

                    <div
                      className={`absolute bottom-6 left-6 flex items-center gap-3 transition-colors duration-500 sm:bottom-8 sm:left-8 sm:gap-4 ${
                        isActive ? "text-slate-500" : "text-white"
                      }`}
                    >
                      <span className="text-xs font-bold tracking-[0.24em] sm:text-sm">
                        VIEW
                      </span>

                      <div
                        className={`h-px w-10 transition-all duration-500 group-hover:w-20 sm:w-12 sm:group-hover:w-24 ${
                          isActive ? "bg-slate-400" : "bg-white/80"
                        }`}
                      />

                      <span className="text-lg sm:text-xl">→</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="absolute bottom-10 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center lg:flex">
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
      <TopButton />
    </main>
  );
}