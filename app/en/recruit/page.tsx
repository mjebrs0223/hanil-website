import Link from "next/link";

export default function RecruitPageEN() {
  const process = ["Application", "Document Review", "Interview", "Medical Check", "Employment"];

  const benefits = [
    "Health Check-up Support",
    "Family Event Support",
    "Training & Self-development",
    "Annual Leave System",
  ];

  return (
    <main className="bg-white text-[#222]">
      <section className="relative flex min-h-[70vh] items-center px-12 pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-recruit.png"
            alt="Recruit"
            className="h-full w-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            RECRUIT
          </p>
          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-blue-950">
            Join Hanil International
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            We are looking for talented people who will grow together
            with Hanil International in the global market.
          </p>

          <Link href="/en" className="mt-10 inline-block font-semibold text-blue-700">
            ← Home
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          RECRUIT TYPE
        </p>
        <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
          Career Opportunities
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-blue-700 p-10 text-white">
            <p className="text-sm tracking-[0.3em] text-white/70">
              MANAGEMENT SUPPORT
            </p>
            <h3 className="mt-6 text-3xl font-extrabold">Management Support</h3>
            <p className="mt-5 leading-8 text-white/80">
              Roles supporting corporate operations including finance, accounting,
              HR and administration.
            </p>
          </div>

          <div className="rounded-3xl bg-blue-950 p-10 text-white">
            <p className="text-sm tracking-[0.3em] text-white/70">
              TRADING
            </p>
            <h3 className="mt-6 text-3xl font-extrabold">Trading</h3>
            <p className="mt-5 leading-8 text-white/80">
              Roles responsible for global commodity trading in energy, steel,
              chemical and new materials.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-12 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            RECRUIT PROCESS
          </p>
          <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
            Recruitment Process
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
          Benefits
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <p className="text-lg font-bold text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}