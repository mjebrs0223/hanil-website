import Link from "next/link";

export default function NewsPageEN() {
  const newsList = [
    {
      category: "NOTICE",
      title: "Website Renewal Announcement",
      date: "2026.03.30",
    },

    {
      category: "ESG",
      title: "Change and Innovation with ESG 2030",
      date: "2026.03.01",
    },
  ];

  return (
    <main className="bg-white text-[#222]">
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-24 sm:px-10 lg:min-h-[70vh] lg:px-12 lg:pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-news.png"
            alt="Notice"
            className="h-full w-full object-cover grayscale brightness-90"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="mt-6 whitespace-nowrap text-5xl font-extrabold leading-tight text-blue-700 sm:text-6xl lg:mt-8 lg:text-7xl">
            NOTICE
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
            Stay updated with the latest news
            <br className="sm:hidden" />
            and announcements from Hanil International.
          </p>
        </div>
      </section>

      {/* NEWS LIST */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
          NEWS LIST
        </p>

        <h2 className="mt-5 text-3xl font-extrabold text-blue-950 sm:text-4xl">
          Notice & News
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl border border-gray-200 bg-white sm:mt-12">
          {newsList.map((item) => (
            <article
              key={item.title}
              className="grid gap-3 border-b border-gray-100 px-6 py-6 transition hover:bg-gray-50 last:border-b-0 sm:px-8 md:grid-cols-[160px_1fr_140px] md:gap-4 md:py-8"
            >
              <span className="text-sm font-bold tracking-[0.25em] text-blue-700">
                {item.category}
              </span>

              <h3 className="text-lg font-extrabold text-blue-950 sm:text-xl">
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