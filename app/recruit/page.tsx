import Link from "next/link";
import TopButton from "../components/TopButton";

export default function RecruitPage() {
  const process = ["입사지원", "서류전형", "면접", "신체검사", "입사"];

  const benefits = [
    "건강검진 지원",
    "경조사 지원",
    "교육 및 자기계발 지원",
    "연차 및 휴가 제도",
  ];

  return (
    <main className="bg-white text-[#222]">
      <section className="relative flex min-h-[70vh] items-center px-12 pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-recruit.png"
            alt="Recruit Information"
            className="h-full w-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            
          </p>
          <h1 className="mt-6 whitespace-nowrap text-5xl font-extrabold leading-tight text-blue-700 sm:text-6xl lg:mt-8 lg:text-7xl">
            RECRUIT
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
            글로벌 무역 전문 기업 한일인터내셔널과  
            <br className="sm:hidden" />
            함께 성장할 인재를 기다립니다.
          </p>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          RECRUIT TYPE
        </p>
        <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
          채용 안내
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-blue-700 p-10 text-white">
            <p className="text-sm tracking-[0.3em] text-white/70">
              MANAGEMENT SUPPORT
            </p>
            <h3 className="mt-6 text-3xl font-extrabold">경영지원</h3>
            <p className="mt-5 leading-8 text-white/80">
              재무, 회계, 인사, 총무 등 회사 운영을 지원하는 직무입니다.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-950 p-10 text-white">
            <p className="text-sm tracking-[0.3em] text-white/70">
              TRADING
            </p>
            <h3 className="mt-6 text-3xl font-extrabold">트레이딩</h3>
            <p className="mt-5 leading-8 text-white/80">
              에너지, 철강, 화학 등 글로벌 상품 거래를 수행하는 직무입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            RECRUIT PROCESS
          </p>
          <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
            채용 절차
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {process.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm"
              >
                <p className="text-sm font-bold tracking-[0.25em] text-blue-700">
                  STEP {index + 1}
                </p>
                <p className="mt-5 text-xl font-extrabold text-blue-950">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
  <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
    BENEFITS
  </p>

  <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
    복리후생
  </h2>

  <div className="mt-12 grid gap-6 md:grid-cols-4">
    {benefits.map((item) => (
      <div
        key={item}
        className="rounded-3xl border border-gray-200 bg-white p-8 text-left shadow-sm"
      >
        <p className="text-lg font-bold text-gray-800">{item}</p>
      </div>
    ))}
  </div>
</section>
<section className="mx-auto max-w-7xl px-12 py-24">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
      RECRUIT NOTICE
    </p>

    <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
      채용공고
    </h2>

    <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white">
      {[
        {
          status: "진행중",
          title: "한일인터내셔널 신입/경력 수시 채용",
          date: "",
        },
       
      ].map((notice) => (
        <article
          key={notice.title}
          className="grid gap-4 border-b border-gray-100 px-8 py-7 transition hover:bg-gray-50 last:border-b-0 md:grid-cols-[120px_1fr_220px]"
        >
          <span
            className={`inline-flex w-fit rounded-full px-4 py-2 text-sm font-bold ${
              notice.status === "진행중"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {notice.status}
          </span>

          <h3 className="text-xl font-extrabold text-blue-950">
            {notice.title}
          </h3>

          <span className="text-sm text-gray-500 md:text-right">
            {notice.date}
          </span>
        </article>
      ))}
    </div>
  </div>
</section>  
<TopButton />
    </main>
  );
}