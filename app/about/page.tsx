import Link from "next/link";

export default function AboutPage() {
  const companyInfo = [
    ["회사명", "한일인터내셔널 주식회사"],
    ["대표이사", "박지훈"],
    ["설립일", "2018.10"],
    ["주소", "(06654) 서울시 서초구 서초동 1587, 한일시멘트빌딩 5층"],
    ["전화번호", "02-6958-3500"],
    ["사업부문", "에너지, 철강, 화학, 신성장"],
  ];

  const history = [
    ["2018", "한일인터내셔널 주식회사 설립 · 석탄 공급 개시"],
    ["2019", "철강 수출입 개시 · Pet-Coke 공급 개시"],
    ["2020", "연 매출액 1,000억원 돌파"],
    ["2021", "연 매출액 2,000억원 돌파 · 유상증자"],
    ["2022", "연 매출액 4,000억원 돌파"],
    ["2024", "SAP 제품 수출 개시 · 철광석 펠릿 공급 개시"],
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
            한일인터내셔널은 에너지, 철강, 화학 및 신성장 분야를 중심으로
            글로벌 비즈니스의 새로운 가능성을 만들어가는 종합무역회사입니다.
          </p>

          <Link
            href="/"
            className="mt-10 inline-block font-semibold text-blue-700"
          >
            ← Home
          </Link>
        </div>
      </section>

      
      <section className="mx-auto max-w-7xl px-12 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            COMPANY OVERVIEW
          </p>
          <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
            회사 개요
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
          연혁
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