"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [openReport, setOpenReport] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const res = await fetch("/api/report", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (res.ok) {
    alert("신고가 정상적으로 접수되었습니다.");
    setOpenReport(false);
  } else {
    alert(data.message || "오류 발생");
  }
};

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
            문의하기
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700">
            한일인터내셔널과의 협업, 사업 문의, IR 문의를 언제든지 환영합니다.
          </p>

          <Link href="/" className="mt-10 inline-block font-semibold text-blue-700">
            ← Home
          </Link>
        </div>
      </section>

      

      {/* 지도 */}
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

      {/* 신고하기 */}
      <section className="bg-white px-12 py-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 border-t border-gray-200 pt-16">
          <div className="flex items-center gap-8">
            <h2 className="text-5xl font-extrabold text-blue-700">
              신고하기
            </h2>

            <div className="h-12 w-px bg-gray-300" />

            <p className="text-xl font-medium text-gray-800">
              윤리적 기업문화 정착을 위해 여러분의 소중한 한마디를 기다리고 있습니다.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpenReport(true)}
            className="rounded-xl bg-blue-600 px-12 py-5 text-lg font-bold text-white transition hover:bg-blue-700"
          >
            신고접수 하기
          </button>
        </div>
      </section>

      {/* 신고접수 팝업 */}
      {openReport && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-6">
          <form
  onSubmit={handleSubmit}
  className="relative h-[86vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-12 shadow-2xl"
>
            <button
              type="button"
              onClick={() => setOpenReport(false)}
              className="absolute right-8 top-8 text-4xl font-light text-gray-500 hover:text-blue-700"
            >
              ×
            </button>

            <p className="text-lg font-bold text-blue-600">
              Receipt of Report
            </p>
            <h1 className="mt-3 text-5xl font-extrabold text-[#222]">
              신고접수
            </h1>

            <section className="mt-14">
              <h2 className="text-2xl font-bold text-[#222]">제보유형</h2>

              <div className="mt-8 overflow-hidden border-y border-gray-200">
                <div className="grid grid-cols-[220px_1fr] border-b border-gray-200">
                  <div className="flex items-center justify-center bg-gray-50 p-6 font-bold">
                    부정제보
                  </div>
                  <div className="p-6 leading-8 text-gray-700">
                    · 윤리행동준칙 위반사항
                    <br />
                    · 임직원의 비위 사실
                    <br />
                    · 불법적인 관행 및 부조리
                  </div>
                </div>

                <div className="grid grid-cols-[220px_1fr]">
                  <div className="flex items-center justify-center bg-gray-50 p-6 font-bold">
                    법위반제보
                  </div>
                  <div className="p-6 leading-8 text-gray-700">
                    · 임직원의 업무수행과정에서 발생한 법규 위반사항
                    <br />
                    · 직장내 성희롱 관련
                  </div>
                </div>
              </div>

              <label className="mt-6 inline-flex items-center gap-3 rounded-full bg-gray-100 px-6 py-3 text-gray-700">
                <input type="checkbox" />
                익명으로 제보하기
              </label>
            </section>

            <section className="mt-14">
              <h2 className="text-2xl font-bold text-[#222]">
                <span className="text-blue-600">[필수]</span> 개인정보 수집 · 이용동의
              </h2>

              <p className="mt-5 leading-8 text-gray-700">
                한일인터내셔널 주식회사는 신고접수 서비스 이용 시 이용자로부터
                필요한 최소한의 개인정보를 수집하고 있습니다.
              </p>

              <div className="mt-8 overflow-hidden border-y border-gray-200">
                <div className="grid grid-cols-[1fr_1fr_160px_180px] bg-gray-50 text-center font-bold">
                  <div className="p-5">목적</div>
                  <div className="p-5">항목</div>
                  <div className="p-5">보유기간</div>
                  <div className="p-5">동의여부</div>
                </div>

                <div className="grid grid-cols-[1fr_1fr_160px_180px] border-t border-gray-200 text-center">
                  <div className="p-5">부정제보</div>
                  <div className="p-5">이름, 연락처, 이메일, 제보내용</div>
                  <div className="p-5">5년</div>
                  <div className="space-y-2 p-5 text-left">
                    <label className="block">
                      <input type="radio" name="agree1" /> 동의함
                    </label>
                    <label className="block">
                      <input type="radio" name="agree1" /> 동의안함
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_1fr_160px_180px] border-t border-gray-200 text-center">
                  <div className="p-5">접속 빈도 및 서비스 이용 통계</div>
                  <div className="p-5">접속 로그, 접속 IP 정보</div>
                  <div className="p-5">5년</div>
                  <div className="space-y-2 p-5 text-left">
                    <label className="block">
                      <input type="radio" name="agree2" /> 동의함
                    </label>
                    <label className="block">
                      <input type="radio" name="agree2" /> 동의안함
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-14">
              <p className="mb-8 text-right text-sm text-gray-600">
                <span className="text-blue-600">•</span> 표시는 필수 기입사항입니다.
              </p>

              <div className="space-y-5">
                <ReportInput label="이름" required name="name" />
<ReportInput label="이메일" required name="email" />
<ReportInput label="연락처" required name="phone" />

                <div className="grid grid-cols-[120px_1fr] items-center gap-5">
                  <label className="font-semibold text-gray-700">
                    <span className="text-blue-600">•</span> 제목
                  </label>
                  <div className="flex gap-3">
                    <select
  name="reportType"
  className="w-40 rounded-lg border border-gray-300 px-4 py-3"
>
                      <option>제보유형</option>
                      <option>부정제보</option>
                      <option>법위반제보</option>
                    </select>
                    <input
  name="title"
  className="flex-1 rounded-lg border border-gray-300 px-4 py-3"
/>
                  </div>
                </div>

                <div className="grid grid-cols-[120px_1fr] items-center gap-5">
                  <label className="font-semibold text-gray-700">첨부파일</label>
                  <input
                    type="file"
                    className="rounded-lg border border-gray-300 px-4 py-3"
                  />
                </div>

                <div className="grid grid-cols-[120px_1fr] gap-5">
                  <label className="pt-3 font-semibold text-gray-700">
                    <span className="text-blue-600">•</span> 제보내용
                  </label>
                  <textarea
  name="content"
  rows={7}
  className="rounded-lg border border-gray-300 px-4 py-3"
  placeholder="제보 내용을 입력해 주세요."
/>
                </div>
              </div>
            </section>

            <button
  type="submit"
  className="mx-auto mt-12 block rounded-xl bg-blue-600 px-16 py-5 text-lg font-bold text-white transition hover:bg-blue-700"
>
  신고접수
</button>
          </form>
        </div>
      )}
    </main>
  );
}

function ReportInput({
  label,
  required,
  name,
}: {
  label: string;
  required?: boolean;
  name: string;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] items-center gap-5">
      <label className="font-semibold text-gray-700">
        {required && <span className="text-blue-600">•</span>} {label}
      </label>
      <input
        name={name}   // ⭐ 이거 추가
        className="rounded-lg border border-gray-300 px-4 py-3"
      />
    </div>
  );
}