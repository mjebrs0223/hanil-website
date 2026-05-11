import Link from "next/link";

export default function BusinessPageEN() {
  const businesses = [
    {
      title: "Bituminous Coal",
      category: "ENERGY",
      image: "/images/coal-bituminous.png",
      desc: "A key energy resource supplied reliably for power generation and industrial use.",
    },
    {
      title: "Anthracite",
      category: "ENERGY",
      image: "/images/coal-anthracite.png",
      desc: "An industrial resource with high carbon content and combustion efficiency.",
    },
    {
      title: "Pet Coke",
      category: "ENERGY",
      image: "/images/petcoke-real.png",
      desc: "A high-calorific fuel resource generated as a by-product of the refining process.",
    },
    {
      title: "Steel",
      category: "STEEL",
      image: "/images/steel-coil.png",
      desc: "We trade and distribute steel products through cooperation with global partners.",
    },
    {
      title: "Iron Ore Pellet",
      category: "STEEL",
      image: "/images/pellet-iron.png",
      desc: "High-quality raw materials that improve efficiency in steel production.",
    },
    {
      title: "SAP",
      category: "CHEMICAL",
      image: "/images/sap-lab.png",
      desc: "We expand our chemical materials business based on super absorbent polymer products.",
    },
  ];

  return (
    <main className="bg-white text-[#222]">
      <section className="relative flex min-h-[70vh] items-center px-12 pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-business.png"
            alt="Business Area"
            className="h-full w-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            
          </p>
          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-blue-700">
            BUSINESS AREA
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            Hanil International develops its business based on stable global
            supply chains and expertise in energy, steel, chemical and new materials.
          </p>

          <Link href="/en" className="mt-10 inline-block font-semibold text-blue-700">
            
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
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
                <p className="mt-5 leading-8 text-gray-600">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-12 py-24">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
      BUSINESS PORTFOLIO
    </p>

    <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
      Stable Supply Chain and Diverse Business Portfolio
    </h2>

    <p className="mt-6 max-w-4xl text-lg leading-9 text-gray-600">
      We supply essential materials such as energy resources, steel products,
      and chemical materials to domestic and global clients, expanding a
      sustainable foundation for growth across various industries.
    </p>
  </div>
</section>
    </main>
  );
}