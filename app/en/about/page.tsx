import Link from "next/link";
import TopButton from "../../components/TopButton";

export default function AboutPageEN() {
  const companyInfo = [
    ["Company Name", "Hanil International Co., Ltd."],
    ["CEO", "Park Jihoon"],
    ["Established", "October 2018"],
    [
      "Address",
      "5F, Hanil Cement Building, 1587 Seocho-dong, Seocho-gu, Seoul",
    ],
    ["TEL", "02-6958-3500"],
    [
      "Business Area",
      "Energy · Steel · Chemical · New Growth Business",
    ],
  ];

  const history = [
    [
      "2018",
      "Established Hanil International · Started coal supply business",
    ],
    [
      "2019",
      "Started steel trading and pet-coke supply business",
    ],
    [
      "2020",
      "Exceeded KRW 100 billion in annual sales",
    ],
    [
      "2021",
      "Exceeded KRW 200 billion in annual sales · Capital increase",
    ],
    [
      "2022",
      "Exceeded KRW 400 billion in annual sales",
    ],
    [
      "2024",
      "Started SAP export and iron ore pellet supply business",
    ],
  ];

  return (
    <main className="bg-white text-[#222]">
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-24 sm:px-10 lg:min-h-[70vh] lg:px-12 lg:pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-about.png"
            alt="About Hanil International"
            className="h-full w-full object-cover grayscale brightness-90"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="mt-6 whitespace-nowrap text-5xl font-extrabold leading-tight text-blue-700 sm:text-6xl lg:mt-8 lg:text-7xl">
            ABOUT US
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
            Hanil International creates new possibilities 
            <br className="sm:hidden" />
            across energy, steel, chemical 
            <br />
            and new growth industries.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            COMPANY OVERVIEW
          </p>

          <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Company Overview
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white sm:mt-12">
            {companyInfo.map(([label, value]) => (
              <div
                key={label}
                className="grid border-b border-gray-100 last:border-b-0 md:grid-cols-[220px_1fr]"
              >
                <div className="bg-gray-50 px-6 py-4 font-bold text-blue-950 sm:px-8 sm:py-5">
                  {label}
                </div>

                <div className="px-6 py-4 text-gray-700 sm:px-8 sm:py-5">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          COMPANY HISTORY
        </p>

        <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
          History
        </h2>

        <div className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
          {history.map(([year, text]) => (
            <div
              key={year}
              className="grid gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 md:grid-cols-[160px_1fr] md:gap-6"
            >
              <div className="text-3xl font-extrabold text-blue-700 sm:text-4xl">
                {year}
              </div>

              <div className="flex items-center text-base leading-8 text-gray-700 sm:text-lg">
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>
      <TopButton />
    </main>
  );
}