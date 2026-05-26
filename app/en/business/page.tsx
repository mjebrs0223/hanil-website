import Link from "next/link";
import TopButton from "../../components/TopButton";

export default function BusinessPageEN() {
  const businesses = [
    {
      title: "Bituminous Coal",
      category: "ENERGY",
      image: "/images/coal-bituminous.png",
      desc: "Stable supply of energy resources for power generation and industrial use.",
    },
    {
      title: "Anthracite",
      category: "ENERGY",
      image: "/images/coal-anthracite.png",
      desc: "Industrial resource with high carbon content and excellent combustion efficiency.",
    },
    {
      title: "Pet-Coke",
      category: "ENERGY",
      image: "/images/petcoke-real.png",
      desc: "High-calorie fuel resource produced as a by-product of oil refining.",
    },
    {
      title: "Steel",
      category: "STEEL",
      image: "/images/steel-coil.png",
      desc: "Import/export and distribution business in cooperation with global steel manufacturers.",
    },
    {
      title: "Iron Ore Pellet",
      category: "STEEL",
      image: "/images/pellet-iron.png",
      desc: "Stable supply of high-quality raw materials to improve steelmaking efficiency.",
    },
    {
      title: "SAP",
      category: "CHEMICAL",
      image: "/images/sap-lab.png",
      desc: "Expanding global chemical material business based on super absorbent polymer products.",
    },
  ];

  return (
    <main className="bg-white text-[#222]">
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-6 pt-24 sm:px-10 lg:min-h-[70vh] lg:px-12 lg:pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-business.png"
            alt="Business Area"
            className="h-full w-full object-cover grayscale brightness-90"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="mt-6 whitespace-normal text-4xl font-extrabold leading-tight text-blue-700 sm:text-5xl lg:mt-8 lg:text-7xl lg:whitespace-nowrap">
            BUSINESS AREA
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
            Building stable supply chains across
            <br className="sm:hidden" />
            energy, steel, chemical and new materials
            <br className="sm:hidden" />
            industries worldwide.
          </p>
        </div>
      </section>

      {/* BUSINESS LIST */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {businesses.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-6 top-6 rounded-full bg-blue-700 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white">
                  {item.category}
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-extrabold text-blue-950">
                  {item.title}
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            BUSINESS PORTFOLIO
          </p>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-blue-950 sm:text-4xl">
            Stable Supply Chains and Diverse
            <br className="sm:hidden" />
             Business Portfolio
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-9 text-gray-600">
            Supplying key industrial resources including energy,
            steel and chemical materials while continuously expanding
            sustainable growth opportunities worldwide.
          </p>
        </div>
      </section>
      <TopButton />
    </main>
  );
}