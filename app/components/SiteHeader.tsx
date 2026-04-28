"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isEN = pathname.startsWith("/en");

  const currentPath = isEN
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname;

  const krHref = currentPath;
  const enHref = currentPath === "/" ? "/en" : `/en${currentPath}`;

  return (
    <>
      <header className="fixed left-0 top-0 z-[120] flex w-full items-center justify-between px-12 py-8">
        <Link href={isEN ? "/en" : "/"} onClick={() => setOpen(false)}>
          <img
            src={isEN ? "/images/hanil-logo-en.png" : "/images/hanil-logo.png"}
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
            <span className="text-5xl font-light leading-none text-blue-700">
              ×
            </span>
          ) : (
            <span className="flex flex-col gap-1">
              <span className="block h-[2px] w-8 bg-blue-700" />
              <span className="block h-[2px] w-8 bg-blue-700" />
              <span className="block h-[2px] w-8 bg-blue-700" />
            </span>
          )}
        </button>

        <div className="fixed right-9 top-24 z-[140] flex flex-col items-center gap-4 text-sm tracking-[0.25em]">
          <Link
            href={krHref}
            className={!isEN ? "font-bold text-blue-900" : "text-gray-400"}
          >
            KR
          </Link>

          <Link
            href={enHref}
            className={isEN ? "font-bold text-blue-900" : "text-gray-400"}
          >
            EN
          </Link>
        </div>
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
                  src={isEN ? "/images/hanil-logo-en.png" : "/images/hanil-logo.png"}
                  alt="HANIL INTERNATIONAL"
                  className="max-h-20 w-[80%] object-contain"
                />
              </div>

              <div className="bg-blue-700 px-12 py-12 text-white">
                <p className="text-sm font-semibold">
                  {isEN ? "TEL" : "대표번호"}
                </p>
                <p className="mt-2 text-3xl font-bold">02-6958-3500</p>

                <div className="mt-14 text-sm leading-7">
                  <p className="font-semibold">
                    {isEN ? "CEO · Park Jihoon" : "대표이사 · 박지훈"}
                  </p>
                  <p>
                    {isEN ? (
                      <>
                        5F, Hanil Cement Building,
                        <br />
                        1587 Seocho-dong, Seocho-gu, Seoul
                      </>
                    ) : (
                      <>
                        (06654) 서울시 서초구 서초동 1587,
                        <br />
                        한일시멘트빌딩 5층
                      </>
                    )}
                  </p>
                  <p className="mt-8 text-white/70">
                    COPYRIGHT © HANIL INTERNATIONAL.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-1 items-center bg-[#3f4352] px-20 text-white">
              <div className="grid w-full grid-cols-2 gap-x-20 gap-y-16">
                <MenuGroup
                  title="ABOUT US"
                  items={[
                    [isEN ? "Company Overview" : "회사소개", isEN ? "/en/about" : "/about"],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="IR INFORMATION"
                  items={[
                    [isEN ? "Financial Information" : "재무정보", isEN ? "/en/ir" : "/ir"],
                    [isEN ? "Disclosure" : "공시정보", isEN ? "/en/ir" : "/ir"],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="BUSINESS AREA"
                  items={[
                    [isEN ? "Energy" : "에너지", isEN ? "/en/business" : "/business"],
                    [isEN ? "Steel" : "철강", isEN ? "/en/business" : "/business"],
                    [isEN ? "Chemical" : "화학", isEN ? "/en/business" : "/business"],
                    [isEN ? "New Materials" : "신소재", isEN ? "/en/business" : "/business"],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="RECRUIT"
                  items={[
                    [isEN ? "Recruitment" : "채용정보", isEN ? "/en/recruit" : "/recruit"],
                    [isEN ? "Process" : "채용절차", isEN ? "/en/recruit" : "/recruit"],
                    [isEN ? "Benefits" : "복리후생", isEN ? "/en/recruit" : "/recruit"],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="NEWS ROOM"
                  items={[
                    [isEN ? "Resources" : "자료실", isEN ? "/en/news" : "/news"],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="CONTACT US"
                  href={isEN ? "/en/contact" : "/contact"}
                  items={[]}
                  onClose={() => setOpen(false)}
                />
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