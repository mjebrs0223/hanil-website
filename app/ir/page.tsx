import Link from "next/link";

export default function IRPage() {
  const financials = [
    ["매출액", "391,852", "백만원"],
    ["영업이익", "9,189", "백만원"],
    ["영업이익률", "2.3", "%"],
  ];

  const notices = [
    "2024년 결산 공고",
    "감사보고서",
    "전자공시시스템 바로가기",
  ];

  return (
    <main className="bg-white text-[#222]">
      <section className="relative flex min-h-[70vh] items-center px-12 pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-ir.png"
            alt="IR Information"
            className="h-full w-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            
          </p>
          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-blue-700">
            IR INFORMATION
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            한일인터내셔널의 재무 현황과 공시 정보를 투명하게 제공합니다.
          </p>

          <Link href="/" className="mt-10 inline-block font-semibold text-blue-700">
            ← Home
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          2024 FINANCIAL DATA
        </p>
        <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
          주요 재무 지표
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {financials.map(([label, value, unit]) => (
            <div
              key={label}
              className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm"
            >
              <p className="text-sm font-bold tracking-[0.25em] text-blue-700">
                {label}
              </p>
              <p className="mt-6 text-5xl font-extrabold text-blue-950">
                {value}
              </p>
              <p className="mt-3 text-gray-500">{unit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            DISCLOSURE & NOTICE
          </p>
          <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
            공시 및 공고
          </h2>

          <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white">
            {notices.map((notice) => (
              <div
                key={notice}
                className="flex items-center justify-between border-b border-gray-100 px-8 py-6 last:border-b-0"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {notice}
                </span>
                <span className="text-sm font-bold text-blue-700">VIEW →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}