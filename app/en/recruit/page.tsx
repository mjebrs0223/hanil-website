import Link from "next/link";
import TopButton from "../../components/TopButton";

export default function RecruitPageEN() {
  const process = [
    "Application",
    "Document Review",
    "Interview",
    "Medical Check",
    "Hiring",
  ];

  const benefits = [
    "Health Checkup Support",
    "Family Event Support",
    "Education & Self Development",
    "Annual Leave & Vacation",
  ];

  return (
    <main className="bg-white text-[#222]">
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-24 sm:px-10 lg:min-h-[70vh] lg:px-12 lg:pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-recruit.png"
            alt="Recruit Information"
            className="h-full w-full object-cover grayscale brightness-90"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="mt-6 whitespace-nowrap text-5xl font-extrabold leading-tight text-blue-700 sm:text-6xl lg:mt-8 lg:text-7xl">
            RECRUIT
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
            Join Hanil International and grow with
            <br className="sm:hidden" />
            a global trading company.
          </p>
        </div>
      </section>

      {/* RECRUIT TYPE */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          RECRUIT TYPE
        </p>

        <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
          Recruitment Information
        </h2>

        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-2">
          <div className="rounded-3xl bg-blue-700 p-8 text-white sm:p-10">
            <p className="text-sm tracking-[0.3em] text-white/70">
              MANAGEMENT SUPPORT
            </p>

            <h3 className="mt-6 text-3xl font-extrabold">
              Management Support
            </h3>

            <p className="mt-5 leading-8 text-white/80">
              Supporting company operations including finance,
              accounting, HR and administration.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-950 p-8 text-white sm:p-10">
            <p className="text-sm tracking-[0.3em] text-white/70">
              TRADING
            </p>

            <h3 className="mt-6 text-3xl font-extrabold">
              Trading
            </h3>

            <p className="mt-5 leading-8 text-white/80">
              Managing global trading businesses across
              energy, steel and chemical industries.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            RECRUIT PROCESS
          </p>

          <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Recruitment Process
          </h2>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-5">
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

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          BENEFITS
        </p>

        <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
          Employee Benefits
        </h2>

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-left shadow-sm"
            >
              <p className="text-lg font-bold text-gray-800">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NOTICE */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            RECRUIT NOTICE
          </p>

          <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
            Job Openings
          </h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white sm:mt-12">
            {[
              {
                status: "OPEN",
                title:
                  "Hanil International Experienced / Entry-Level Recruitment",
                date: "",
              },
            ].map((notice) => (
              <article
                key={notice.title}
                className="grid gap-4 border-b border-gray-100 px-6 py-6 transition hover:bg-gray-50 last:border-b-0 sm:px-8 md:grid-cols-[120px_1fr_220px] md:py-7"
              >
                <span
                  className={`inline-flex w-fit rounded-full px-4 py-2 text-sm font-bold ${
                    notice.status === "OPEN"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {notice.status}
                </span>

                <h3 className="text-lg font-extrabold text-blue-950 sm:text-xl">
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