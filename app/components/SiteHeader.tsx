"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-[120] flex w-full items-center justify-between px-12 py-8">
        <Link href="/" onClick={() => setOpen(false)}>
          <img
            src="/images/hanil-logo.png"
            alt="HANIL INTERNATIONAL"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="fixed right-8 top-8 z-[140] flex h-10 w-10 items-center justify-center"
        >
          {open ? (
            <span className="text-5xl font-light leading-none text-blue-700">×</span>
          ) : (
            <span className="flex flex-col gap-1">
              <span className="block h-[2px] w-8 bg-blue-700" />
              <span className="block h-[2px] w-8 bg-blue-700" />
              <span className="block h-[2px] w-8 bg-blue-700" />
            </span>
          )}
        </button>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[80] bg-black/20"
            onClick={() => setOpen(false)}
          />

          <div className="fixed right-0 top-0 z-[100] flex h-full w-[60%] bg-white shadow-2xl">
            <div className="flex w-[38%] flex-col justify-between bg-white">
              <div className="flex flex-1 items-center justify-center px-12">
                <img
                  src="/images/hanil-logo.png"
                  alt="HANIL INTERNATIONAL"
                  className="max-h-20 w-[80%] max-w-[360px] object-contain"
                />
              </div>

              <div className="bg-blue-700 px-12 py-12 text-white">
                <p className="text-sm font-semibold">대표번호</p>
                <p className="mt-2 text-3xl font-bold">02-6958-3500</p>

                <div className="mt-14 text-sm leading-7">
                  <p className="font-semibold">대표이사 · 박지훈</p>
                  <p>
                    (06654) 서울시 서초구 서초동 1587,
                    <br />
                    한일시멘트빌딩 5층
                  </p>
                  <p className="mt-8 text-white/70">
                    COPYRIGHT © HANIL INTERNATIONAL.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 items-center bg-[#3f4352] px-20 text-white">
              <div className="grid w-full grid-cols-2 gap-x-20 gap-y-16">
                <MenuGroup title="ABOUT US" items={[["회사소개", "/about"]]} onClose={() => setOpen(false)} />

                <MenuGroup
                  title="IR INFORMATION"
                  items={[
                    ["재무정보", "/ir"],
                    ["공시정보", "/ir"],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="BUSINESS AREA"
                  items={[
                    ["에너지", "/business"],
                    ["철강", "/business"],
                    ["화학", "/business"],
                    ["신소재", "/business"],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="RECRUIT"
                  items={[
                    ["채용정보", "/recruit"],
                    ["채용절차", "/recruit"],
                    ["복리후생", "/recruit"],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup title="NEWS ROOM" items={[["자료실", "/news"]]} onClose={() => setOpen(false)} />

                <MenuGroup title="CONTACT US" href="/contact" items={[]} onClose={() => setOpen(false)} />
              </div>
            </div>

            <div className="w-20 border-l border-gray-200 bg-white">
  <div className="flex h-full flex-col items-center justify-center gap-6 text-sm tracking-[0.25em]">
    
    <Link
      href={pathname.replace("/en", "") || "/"}
      className="font-bold text-blue-900"
    >
      KR
    </Link>

    <Link
      href={`/en${pathname}`}
      className="text-gray-400"
    >
      EN
    </Link>

  </div>
</div>
          </div>
        </>
      )}
    </>
  );
}

function MenuGroup({
  title,
  items,
  href,
  onClose,
}: {
  title: string;
  items: [string, string][];
  href?: string;
  onClose: () => void;
}) {
  return (
    <div>
      {href ? (
        <Link
          href={href}
          onClick={onClose}
          className="text-3xl font-extrabold leading-tight transition hover:opacity-70"
        >
          {title}
        </Link>
      ) : (
        <h2 className="text-3xl font-extrabold leading-tight">{title}</h2>
      )}

      {items.length > 0 && (
        <div className="mt-6 space-y-4 text-lg text-white/55">
          {items.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={onClose}
              className="block transition hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}