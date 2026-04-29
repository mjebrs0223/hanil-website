import Link from "next/link";

export default function IRPageEN() {
  const financials = [
    ["Sales", "391,852", "KRW million"],
    ["Operating Profit", "9,189", "KRW million"],
    ["Operating Margin", "2.3", "%"],
  ];

  const notices = [
    "2024 Financial Statement Notice",
    "Audit Report",
    "Disclosure Information",
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
            IR INFORMATION
          </p>
          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-blue-950">
            Financial Information
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            We provide transparent financial and disclosure information
            to build trust with our stakeholders.
          </p>

          <Link href="/en" className="mt-10 inline-block font-semibold text-blue-700">
            ← Home
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          2024 FINANCIAL DATA
        </p>
        <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
          Key Financial Indicators
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

      <section className="bg-gray-50 px-12 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            DISCLOSURE & NOTICE
          </p>
          <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
            Disclosure & Notice
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