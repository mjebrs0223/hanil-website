"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
const [familyOpen, setFamilyOpen] = useState(false);
  
  const pathname = usePathname();

  const isEN = pathname.startsWith("/en");

  const currentPath = isEN
    ? pathname.replace(/^\/en/, "") || "/"
    : pathname;

  const krHref = currentPath;
  const enHref = currentPath === "/" ? "/en" : `/en${currentPath}`;

  

  return (
    <>
      <header className="fixed left-0 top-0 z-[170] flex w-full items-start justify-between px-5 py-6 sm:px-8 lg:items-center lg:px-12 lg:py-8">
        <Link href={isEN ? "/en" : "/"} onClick={() => setOpen(false)}>
          <img
  src={isEN ? "/images/hanil-logo-en.png" : "/images/hanil-logo.png"}
  alt="HANIL INTERNATIONAL"
  className={`h-8 w-auto object-contain transition duration-300 sm:h-9 lg:h-10 ${
    open ? "brightness-0 invert" : ""
  }`}
/>
        </Link>

        <div className="flex items-start gap-5 sm:gap-6 lg:items-center lg:gap-8">
          {!open && (
            <>
              {/* FAMILY SITE */}
<div className="relative text-sm font-semibold text-blue-950">
  {/* PC */}
  <div className="group relative hidden lg:block">
    <button type="button">
      FAMILY SITE
    </button>

    <div className="pointer-events-none absolute right-0 top-8 w-64 translate-y-2 rounded-xl bg-white p-4 opacity-0 shadow-xl transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
      {[
        ["한일홀딩스", "https://www.hanil.com"],
        ["한일시멘트", "https://www.hanilcement.com"],
        ["한일산업", "https://www.hanilind.co.kr"],
        ["한일L&C", "http://www.hanilcm.com"],
        ["한일E&C", "http://hanilcenc.com"],
        ["한일VC", "https://www.hanilvc.com"],
        ["서울랜드", "https://seoulland.co.kr"],
        ["하늘목장", "https://skyranch.co.kr"],
      ].map(([name, link]) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block py-2 text-sm text-gray-700 hover:text-blue-700"
        >
          {name}
        </a>
      ))}
    </div>
  </div>

  {/* MOBILE */}
  <div className="lg:hidden">
    <button
  type="button"
  onClick={() => setFamilyOpen(!familyOpen)}
  className="mt-[11.5px] whitespace-nowrap text-[11px] font-bold leading-tight text-blue-950 sm:text-xs lg:mt-0 lg:text-sm"
>
  FAMILY SITE
</button>

    {familyOpen && (
      <div className="absolute right-0 top-8 z-[200] w-56 rounded-xl bg-white p-4 shadow-xl">
        {[
          ["한일홀딩스", "https://www.hanil.com"],
          ["한일시멘트", "https://www.hanilcement.com"],
          ["한일산업", "https://www.hanilind.co.kr"],
          ["한일L&C", "http://www.hanilcm.com"],
          ["한일E&C", "http://hanilcenc.com"],
          ["한일VC", "https://www.hanilvc.com"],
          ["서울랜드", "https://seoulland.co.kr"],
          ["하늘목장", "https://skyranch.co.kr"],
        ].map(([name, link]) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm text-gray-700"
          >
            {name}
          </a>
        ))}
      </div>
    )}
  </div>
</div>

              <div className="hidden items-center gap-3 text-sm font-medium text-blue-950 lg:flex">
                <Link
                  href={krHref}
                  className={
                    !isEN ? "font-extrabold underline underline-offset-4" : ""
                  }
                >
                  KR
                </Link>

                <span className="h-3 w-px bg-blue-950/30" />

                <Link
                  href={enHref}
                  className={
                    isEN ? "font-extrabold underline underline-offset-4" : ""
                  }
                >
                  EN
                </Link>
              </div>
            </>
          )}

          {/* 햄버거 + 모바일 언어 */}
<div className="flex flex-col items-center">
  {/* 햄버거 버튼 */}
  <button
    type="button"
    onClick={() => setOpen(!open)}
    className="flex h-8 w-8 items-center justify-center lg:h-10 lg:w-10"
  >
    {open ? (
      <span className="text-5xl font-light leading-none text-blue-700">
        ×
      </span>
    ) : (
      <span className="flex flex-col gap-1">
        <span className="block h-[2px] w-7 bg-blue-700 lg:w-8" />
        <span className="block h-[2px] w-7 bg-blue-700 lg:w-8" />
        <span className="block h-[2px] w-7 bg-blue-700 lg:w-8" />
      </span>
    )}
  </button>

  {/* 모바일용 KR / EN */}
{!open && (
  <div className="mt-2 flex flex-col items-center gap-1 text-[11px] font-medium text-blue-950 lg:hidden">
    <Link
      href={krHref}
      className={
        !isEN
          ? "font-extrabold underline underline-offset-4"
          : ""
      }
    >
      KR
    </Link>

    <Link
      href={enHref}
      className={
        isEN
          ? "font-extrabold underline underline-offset-4"
          : ""
      }
    >
      EN
    </Link>
  </div>
)}
</div>
        </div>
      </header>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[90] bg-black/25"
            onClick={() => setOpen(false)}
          />

          <div className="fixed right-0 top-0 z-[140] flex h-full w-full flex-col-reverse overflow-y-auto bg-white shadow-2xl lg:w-[60%] lg:flex-row lg:overflow-visible">
            <div className="flex w-full flex-none flex-col justify-between bg-white lg:w-[38%]">
              <div className="hidden flex-1 items-center justify-center px-12 lg:flex">
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

            <div className="flex flex-none bg-[#3f4352] px-8 pb-12 pt-28 text-white lg:flex-1 lg:items-center lg:px-20 lg:py-0">
              <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
                <MenuGroup
                  title="ABOUT US"
                  href={isEN ? "/en/about" : "/about"}
                  items={[
                    [
                      isEN ? "Company Overview" : "회사소개",
                      isEN ? "/en/about" : "/about",
                    ],
                  ]}
                  onClose={() => setOpen(false)}
                />
<MenuGroup
                  title="BUSINESS AREA"
                  href={isEN ? "/en/business" : "/business"}
                  items={[
                    [isEN ? "Energy" : "에너지", isEN ? "/en/business" : "/business"],
                    [isEN ? "Steel" : "철강", isEN ? "/en/business" : "/business"],
                    [isEN ? "Chemical" : "화학", isEN ? "/en/business" : "/business"],
                    [
                      isEN ? "New Materials" : "신소재",
                      isEN ? "/en/business" : "/business",
                    ],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="IR INFORMATION"
                  href={isEN ? "/en/ir" : "/ir"}
                  items={[
                    [
                      isEN ? "Financial Information" : "재무정보",
                      isEN ? "/en/ir" : "/ir",
                    ],
                    [
                      isEN ? "Disclosure" : "공시정보",
                      isEN ? "/en/ir" : "/ir",
                    ],
                  ]}
                  onClose={() => setOpen(false)}
                />

                <MenuGroup
                  title="NOTICE"
                  href={isEN ? "/en/news" : "/news"}
                  items={[
                    [isEN ? "Resources" : "자료실", isEN ? "/en/news" : "/news"],
                  ]}
                  onClose={() => setOpen(false)}
                />
<MenuGroup
                  title="RECRUIT"
                  href={isEN ? "/en/recruit" : "/recruit"}
                  items={[
                    [
                      isEN ? "Recruitment" : "채용정보",
                      isEN ? "/en/recruit" : "/recruit",
                    ],
                    [
                      isEN ? "Process" : "채용절차",
                      isEN ? "/en/recruit" : "/recruit",
                    ],
                    [
                      isEN ? "Benefits" : "복리후생",
                      isEN ? "/en/recruit" : "/recruit",
                    ],
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

function FamilyLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block py-2 text-sm text-gray-700 hover:text-blue-700"
    >
      {children}
    </a>
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