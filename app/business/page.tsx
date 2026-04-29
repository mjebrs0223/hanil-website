import Link from "next/link";

export default function BusinessPage() {
  const businesses = [
    {
      title: "유연탄",
      category: "ENERGY",
      image: "/images/coal-bituminous.png",
      desc: "발전 및 산업용 에너지 자원으로 국내외 고객사에 안정적으로 공급합니다.",
    },
    {
      title: "무연탄",
      category: "ENERGY",
      image: "/images/coal-anthracite.png",
      desc: "높은 탄소함량과 연소 효율성을 보유한 산업용 자원입니다.",
    },
    {
      title: "페트코크",
      category: "ENERGY",
      image: "/images/petcoke-real.png",
      desc: "정유공정 부산물로 높은 열량과 탄소함량을 지닌 연료 자원입니다.",
    },
    {
      title: "철강",
      category: "STEEL",
      image: "/images/steel-coil.png",
      desc: "국내외 제강사와 협력하여 철강재 수출입 및 유통 사업을 전개합니다.",
    },
    {
      title: "철광석 펠릿",
      category: "STEEL",
      image: "/images/pellet-iron.png",
      desc: "제철 생산 효율을 높이는 고품질 원료를 안정적으로 공급합니다.",
    },
    {
      title: "SAP",
      category: "CHEMICAL",
      image: "/images/sap-lab.png",
      desc: "고흡수성 수지 제품을 기반으로 글로벌 화학 소재 사업을 확대합니다.",
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
            한일인터내셔널은 에너지, 철강, 화학 및 신성장 분야에서
            안정적인 글로벌 공급망과 전문성을 기반으로 사업을 전개합니다.
          </p>

          <Link href="/" className="mt-10 inline-block font-semibold text-blue-700">
            ← Home
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
            안정적인 공급망과 다양한 사업 포트폴리오
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-gray-600">
            에너지 자원, 철강재, 화학 소재 등 산업 전반에 필요한 핵심 품목을
            국내외 고객사에 공급하며 지속 가능한 성장 기반을 확대하고 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}