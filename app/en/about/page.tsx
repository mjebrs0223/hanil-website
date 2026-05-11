import Link from "next/link";

export default function AboutPageEN() {
  const companyInfo = [
    ["Company Name", "Hanil International Co., Ltd."],
    ["CEO", "Park Jihoon"],
    ["Established", "October 2018"],
    ["Address", "5F, Hanil Cement Building, 1587 Seocho-dong, Seocho-gu, Seoul"],
    ["TEL", "02-6958-3500"],
    ["Business Area", "Energy, Steel, Chemical, New Materials"],
  ];

  const history = [
    ["2018", "Established Hanil International Co., Ltd. · Started coal supply business"],
    ["2019", "Started steel trading and pet-coke supply business"],
    ["2020", "Exceeded KRW 100 billion in annual sales"],
    ["2021", "Exceeded KRW 200 billion in annual sales · Capital increase"],
    ["2022", "Exceeded KRW 400 billion in annual sales"],
    ["2024", "Started SAP export and iron ore pellet supply business"],
  ];

  return (
    <main className="bg-white text-[#222]">
      <section className="relative flex min-h-[70vh] items-center px-12 pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-about.png"
            alt="About Hanil International"
            className="h-full w-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/30" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            
          </p>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-blue-700">
            ABOUT US
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            Hanil International is a global trading company creating new
            possibilities across energy, steel, chemical and new materials.
          </p>

          <Link href="/en" className="mt-10 inline-block font-semibold text-blue-700">
            
          </Link>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-12 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            COMPANY OVERVIEW
          </p>

          <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
            Company Overview
          </h2>

          <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white">
            {companyInfo.map(([label, value]) => (
              <div
                key={label}
                className="grid border-b border-gray-100 last:border-b-0 md:grid-cols-[220px_1fr]"
              >
                <div className="bg-gray-50 px-8 py-5 font-bold text-blue-950">
                  {label}
                </div>
                <div className="px-8 py-5 text-gray-700">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          COMPANY HISTORY
        </p>

        <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
          History
        </h2>

        <div className="mt-12 space-y-6">
          {history.map(([year, text]) => (
            <div
              key={year}
              className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:grid-cols-[160px_1fr]"
            >
              <div className="text-4xl font-extrabold text-blue-700">
                {year}
              </div>
              <div className="flex items-center text-lg leading-8 text-gray-700">
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}