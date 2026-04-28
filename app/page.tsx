"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const targetX = useRef(0);
  const currentX = useRef(0);

  const [visibleCount, setVisibleCount] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
  { title: "About Us", img: "/images/menu-about.png", href: "/about" },
  { title: "IR Information", img: "/images/menu-ir.png", href: "/ir" },
  { title: "Business Area", img: "/images/menu-business.png", href: "/business" },
  { title: "Recruit Information", img: "/images/menu-recruit.png", href: "/recruit" },
  { title: "News Room", img: "/images/menu-news.png", href: "/news" },
  { title: "Contact Us", img: "/images/menu-contact.png", href: "/contact" },
];

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);

    let animationFrame = 0;

    const updateTarget = () => {
      const section = document.getElementById("horizontal-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const totalScroll = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), totalScroll);
      const progress = totalScroll > 0 ? scrolled / totalScroll : 0;

      targetX.current = -progress * 2850;

      setVisibleCount(Math.min(cards.length, Math.floor(progress * cards.length) + 2));
      setActiveIndex(Math.min(cards.length - 1, Math.round(progress * (cards.length - 1))));
    };

    const animate = () => {
      const track = trackRef.current;
      if (!track) return;

      currentX.current += (targetX.current - currentX.current) * 0.075;
      track.style.transform = `translate3d(${currentX.current}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    updateTarget();
    animate();

    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  return (
    <main className="bg-[#f7f7f7] text-[#222]">
      {/* Logo */}
     

      {/* Right UI */}
      

      {/* First hero page */}
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
          <p className="text-sm font-semibold tracking-[0.35em] text-blue-700">
            HANIL INTERNATIONAL
          </p>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight tracking-tight text-blue-950 opacity-0 translate-y-6 animate-fadeUp">
  Change and Innovation
  <br />
  with ESG 2030
</h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-blue-950 font-medium drop-shadow-sm">
  에너지, 철강, 화학 및 신성장 분야를 중심으로 글로벌 비즈니스의 새로운 가능성을 만들어갑니다.
</p>  

          <div className="mt-14 flex items-center gap-6">
            <span className="text-xs tracking-[0.35em] text-blue-950 font-semibold">SCROLL</span>
            <div className="h-px w-40 bg-blue-700" />
          </div>
        </div>
      </section>

      {/* Horizontal card section */}
      <section id="horizontal-section" className="relative h-[700vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          <div
            ref={trackRef}
            className="flex gap-[110px] px-[38vw] will-change-transform"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {cards.map((card, index) => {
              const isVisible = index < visibleCount;
              const isActive = index === activeIndex;

              return (
                <a
                  key={card.title}
                  href={card.href}
                  className={`group relative block h-[330px] w-[390px] shrink-0 overflow-hidden bg-white shadow-[0_22px_50px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out hover:-translate-y-5 hover:shadow-[0_35px_80px_rgba(0,0,0,0.18)] ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  } ${
                    isActive
                      ? "scale-110 z-20 shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
                      : "scale-90 opacity-70"
                  } ${
                    index % 2 === 0 ? "-translate-y-8" : "translate-y-8"
                  }`}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover grayscale brightness-95 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-110"
                  />

                  <div className="absolute inset-0 bg-white/5 transition group-hover:bg-blue-900/45" />

                  <div className="absolute left-8 top-8 text-left transition-all duration-700 ease-out group-hover:-translate-y-1">
                    <div className="text-3xl font-bold leading-tight text-blue-700 transition group-hover:text-white">
                      {card.title}
                    </div>
                  </div>

                  
                </a>
              );
            })}
          </div>

          <div className="absolute bottom-10 left-1/2 flex w-[70%] -translate-x-1/2 items-center gap-6">
            <span className="text-xs tracking-[0.35em] text-gray-500">
              SCROLL
            </span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
        </div>
      </section>
    </main>
  );
}