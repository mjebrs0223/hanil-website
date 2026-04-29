import Link from "next/link";

export default function NewsPageEN() {
  const newsList = [
    {
      category: "NOTICE",
      title: "Hanil International Website Renewal",
      date: "2026.03.30",
    },
    {
      category: "BUSINESS",
      title: "Expansion of Global Business Portfolio",
      date: "2026.03.15",
    },
    {
      category: "ESG",
      title: "Change and Innovation with ESG 2030",
      date: "2026.03.01",
    },
  ];

  return (
    <main className="bg-white text-[#222]">
      <section className="relative flex min-h-[70vh] items-center px-12 pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-news.png"
            alt="Notice"
            className="h-full w-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            
          </p>
          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-blue-700">
            NOTICE
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            Explore the latest news and resources from Hanil International.
          </p>

          <Link href="/en" className="mt-10 inline-block font-semibold text-blue-700">
            ← Home
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          NEWS LIST
        </p>
        <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
          News & Resources
        </h2>

        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white">
          {newsList.map((item) => (
            <article
              key={item.title}
              className="grid gap-4 border-b border-gray-100 px-8 py-8 transition hover:bg-gray-50 last:border-b-0 md:grid-cols-[160px_1fr_140px]"
            >
              <span className="text-sm font-bold tracking-[0.25em] text-blue-700">
                {item.category}
              </span>
              <h3 className="text-xl font-extrabold text-blue-950">
                {item.title}
              </h3>
              <span className="text-sm text-gray-500 md:text-right">
                {item.date}
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}