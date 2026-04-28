import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="bg-white text-[#222]">
      {/* 상단 비주얼 */}
      <section className="relative flex min-h-[70vh] items-center px-12 pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-contact.png"
            alt="Contact Us"
            className="h-full w-full object-cover grayscale brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
            CONTACT US
          </p>
          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-blue-950">
            CONTACT US
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            한일인터내셔널과의 협업, 사업 문의, IR 문의를 언제든지 환영합니다.
          </p>

          <Link href="/" className="mt-10 inline-block font-semibold text-blue-700">
            ← Home
          </Link>
        </div>
      </section>

      
      

<section className="bg-gray-50 px-12 py-24">
  <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
    <div>
      <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
        LOCATION
      </p>
      <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
        오시는 길
      </h2>

      <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <p className="text-sm font-bold tracking-[0.25em] text-blue-700">
          ADDRESS
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          (06654) 서울시 서초구 서초동 1587
          <br />
          한일시멘트빌딩 5층
        </p>

        <div className="mt-8 h-px bg-gray-200" />

        <p className="mt-8 text-sm font-bold tracking-[0.25em] text-blue-700">
          TEL
        </p>
        <p className="mt-4 text-2xl font-extrabold text-blue-950">
          02-6958-3500
        </p>
      </div>
    </div>

    <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-3 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
      <iframe
        src="https://www.google.com/maps?q=서울 서초구 서초동 1587&output=embed"
        width="100%"
        height="520"
        style={{ border: 0, borderRadius: "1.5rem" }}
        loading="lazy"
      />
    </div>
  </div>
</section>
      
    </main>
  );
}