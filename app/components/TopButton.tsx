"use client";

import { useEffect, useState } from "react";

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-blue-800 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      TOP
    </button>
  );
}