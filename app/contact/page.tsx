"use client";

import Link from "next/link";
import { useState } from "react";
import TopButton from "../components/TopButton";

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
            
          </p>
          <h1 className="mt-6 whitespace-normal text-4xl font-extrabold leading-tight text-blue-700 sm:text-5xl lg:mt-8 lg:text-7xl lg:whitespace-nowrap">
            CONTACT US
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
            한일인터내셔널과의 협업, 사업 문의, 
            <br className="sm:hidden" />
            IR 문의를 언제든지 환영합니다.
          </p>

        </div>
      </section>

      

      {/* 지도 */}
      <section className="mx-auto max-w-7xl px-12 py-24">
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
                (06654) 
                <br />서울시 서초구 서초동 1587
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
              <a
  href="https://www.youtube.com/@user-qc2sw1nl8y"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-3 text-red-500 hover:text-gray-600 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.5V8.5l6.2 3.5-6.2 3.5z" />
  </svg>

  <span className="text-sm font-medium">
    YouTube Channel
  </span>
</a>
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
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
  <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
    
    {/* LEFT */}
    <div>
      <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
        REPORT
      </p>

      <h2 className="mt-5 text-4xl font-extrabold text-blue-700 sm:text-5xl">
        신고하기
      </h2>

      <p className="mt-6 text-[15px] leading-7 text-gray-600 sm:text-lg">
        윤리적 기업문화 정착을 위해
        <br />
        여러분의 소중한 한마디를 기다리고 있습니다.
      </p>
    </div>

    {/* RIGHT BUTTON */}
    <div className="mt-8 lg:mt-0">
      <button
        type="button"
        onClick={() => setOpenReport(true)}
        className="w-full rounded-2xl bg-blue-700 px-8 py-5 text-base font-bold text-white transition hover:bg-blue-800 sm:w-auto"
      >
        신고 접수하기
      </button>
    </div>
  </div>
</section>

      {/* 신고접수 팝업 */}
      {openReport && (
        <div className="fixed inset-0 z-[9999] flex items-end justify-center bg-black/40 px-3 sm:items-center sm:px-6">
          <form
  onSubmit={handleSubmit}
  className="relative h-[88vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:h-[86vh] sm:rounded-3xl sm:p-12"
>
            <button
              type="button"
              onClick={() => setOpenReport(false)}
              className="absolute right-5 top-5 text-4xl font-light text-gray-500 hover:text-blue-700 sm:right-8 sm:top-8"
            >
              ×
            </button>

            <p className="text-lg font-bold text-blue-600">
              Receipt of Report
            </p>
            <h1 className="mt-3 text-3xl font-extrabold text-[#222] sm:text-5xl">
              신고접수
            </h1>

            <section className="mt-10 sm:mt-14">
  <h2 className="text-xl font-bold text-[#222] sm:text-2xl">
    제보유형
  </h2>

  <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-0 sm:overflow-hidden sm:border-y sm:border-gray-200">
    <div className="rounded-2xl border border-gray-200 bg-white sm:grid sm:grid-cols-[220px_1fr] sm:rounded-none sm:border-0 sm:border-b sm:border-gray-200">
      <div className="bg-gray-50 p-5 font-bold sm:flex sm:items-center sm:justify-center sm:p-6">
        부정제보
      </div>
      <div className="p-5 leading-8 text-gray-700 sm:p-6">
        · 윤리행동준칙 위반사항
        <br />
        · 임직원의 비위 사실
        <br />
        · 불법적인 관행 및 부조리
      </div>
    </div>

    <div className="rounded-2xl border border-gray-200 bg-white sm:grid sm:grid-cols-[220px_1fr] sm:rounded-none sm:border-0">
      <div className="bg-gray-50 p-5 font-bold sm:flex sm:items-center sm:justify-center sm:p-6">
        법위반제보
      </div>
      <div className="p-5 leading-8 text-gray-700 sm:p-6">
        · 임직원의 업무수행과정에서 발생한 법규 위반사항
        <br />
        · 직장내 성희롱 관련
      </div>
    </div>
  </div>

  <label className="mt-6 inline-flex items-center gap-3 rounded-full bg-gray-100 px-5 py-3 text-sm text-gray-700 sm:px-6">
    <input type="checkbox" />
    익명으로 제보하기
  </label>
</section>

<section className="mt-10 sm:mt-14">
  <h2 className="text-xl font-bold text-[#222] sm:text-2xl">
    <span className="text-blue-600">[필수]</span> 개인정보 수집 · 이용동의
  </h2>

  <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
    한일인터내셔널 주식회사는 신고접수 서비스 이용 시 이용자로부터
    필요한 최소한의 개인정보를 수집하고 있습니다.
  </p>

  <div className="mt-6 space-y-4 sm:mt-8">
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-sm font-bold text-blue-700">목적</p>
      <p className="mt-2 text-gray-700">부정제보</p>

      <p className="mt-5 text-sm font-bold text-blue-700">항목</p>
      <p className="mt-2 text-gray-700">이름, 연락처, 이메일, 제보내용</p>

      <p className="mt-5 text-sm font-bold text-blue-700">보유기간</p>
      <p className="mt-2 text-gray-700">5년</p>

      <p className="mt-5 text-sm font-bold text-blue-700">동의여부</p>
      <div className="mt-2 flex gap-5 text-gray-700">
        <label>
          <input type="radio" name="agree1" /> 동의함
        </label>
        <label>
          <input type="radio" name="agree1" /> 동의안함
        </label>
      </div>
    </div>

    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <p className="text-sm font-bold text-blue-700">목적</p>
      <p className="mt-2 text-gray-700">접속 빈도 및 서비스 이용 통계</p>

      <p className="mt-5 text-sm font-bold text-blue-700">항목</p>
      <p className="mt-2 text-gray-700">접속 로그, 접속 IP 정보</p>

      <p className="mt-5 text-sm font-bold text-blue-700">보유기간</p>
      <p className="mt-2 text-gray-700">5년</p>

      <p className="mt-5 text-sm font-bold text-blue-700">동의여부</p>
      <div className="mt-2 flex gap-5 text-gray-700">
        <label>
          <input type="radio" name="agree2" /> 동의함
        </label>
        <label>
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

                <div className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-5">
                  <label className="font-semibold text-gray-700">
                    <span className="text-blue-600">•</span> 제목
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <select
  name="reportType"
  className="w-full rounded-lg border border-gray-300 px-4 py-3"
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

                <div className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-5">
                  <label className="font-semibold text-gray-700">첨부파일</label>
                  <input
                    type="file"
                    className="rounded-lg border border-gray-300 px-4 py-3"
                  />
                </div>

                <div className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-5">
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
      <TopButton />
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
    <div className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-5">
      <label className="font-semibold text-gray-700">
        {required && <span className="text-blue-600">•</span>} {label}
      </label>
      <input
        name={name}   // ⭐ 이거 추가
        className="w-full rounded-lg border border-gray-300 px-4 py-3"
      />
    </div>
  );
}