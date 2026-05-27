import Link from "next/link";
import TopButton from "../../components/TopButton";

export default function IRPageEN() {
  const financials = [
    ["Revenue", "391,852", "KRW million"],
    ["Operating Profit", "9,189", "KRW million"],
    ["Operating Margin", "2.3", "%"],
  ];

  const notices = [
    {
      title: "2024 Financial Statement Announcement",
      href: "/files/2024-settlement-en.pdf",
      external: false,
    },
    {
      title: "DART Disclosure System",
      href: "https://dart.fss.or.kr/",
      external: true,
    },
  ];

  return (
    <main className="bg-white text-[#222]">
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-24 sm:px-10 lg:min-h-[70vh] lg:px-12 lg:pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-ir.png"
            alt="IR Information"
            className="h-full w-full object-cover grayscale brightness-90"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="mt-6 whitespace-normal text-4xl font-extrabold leading-tight text-blue-700 sm:text-5xl lg:mt-8 lg:text-7xl lg:whitespace-nowrap">
            IR INFORMATION
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
            We transparently provide Hanil International’s
            <br className="sm:hidden" />
            financial and disclosure information.
          </p>
        </div>
      </section>

      {/* FINANCIAL DATA */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          2024 FINANCIAL DATA
        </p>

        <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
          Key Financial Highlights
        </h2>

        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-3">
          {financials.map(([label, value, unit]) => (
            <div
              key={label}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10"
            >
              <p className="text-sm font-bold tracking-[0.25em] text-blue-700">
                {label}
              </p>

              <p className="mt-6 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                {value}
              </p>

              <p className="mt-3 text-gray-500">{unit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DISCLOSURE */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            DISCLOSURE & NOTICE
          </p>

          <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Disclosure & Notice
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white sm:mt-12">
            {notices.map((notice) => (
              <a
                key={notice.title}
                href={notice.href}
                target={notice.external ? "_blank" : undefined}
                rel={notice.external ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-6 border-b border-gray-100 px-6 py-6 transition hover:bg-gray-50 last:border-b-0 sm:px-8"
              >
                <span className="text-base font-semibold text-gray-800 sm:text-lg">
                  {notice.title}
                </span>

                <span className="shrink-0 text-sm font-bold text-blue-700 transition group-hover:translate-x-1">
                  VIEW →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <TopButton />
    </main>
  );
}