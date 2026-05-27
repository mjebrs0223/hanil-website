"use client";

import Link from "next/link";
import { useState } from "react";
import TopButton from "../../components/TopButton";

export default function ContactPageEN() {
  const [openReport, setOpenReport] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/report", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (res.ok) {
      alert("Your report has been submitted.");
      setOpenReport(false);
    } else {
      alert(data.message || "Error occurred");
    }
  };

  return (
    <main className="bg-white text-[#222]">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center px-6 pt-24 sm:px-10 lg:px-12 lg:pt-28">
        <div className="absolute inset-0">
          <img
            src="/images/menu-contact.png"
            alt="Contact Us"
            className="h-full w-full object-cover grayscale brightness-90"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40" />
        </div>

        <div className="relative z-10 max-w-5xl">
          <h1 className="mt-6 whitespace-normal text-4xl font-extrabold leading-tight text-blue-700 sm:text-5xl lg:mt-8 lg:text-7xl lg:whitespace-nowrap">
            CONTACT US
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg lg:mt-8 lg:text-xl lg:leading-9">
            We welcome inquiries regarding partnerships,
            <br className="sm:hidden" />
            business opportunities 
            <br />
            and IR communications.
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold tracking-[0.35em] text-blue-700">
              LOCATION
            </p>

            <h2 className="mt-5 text-4xl font-extrabold text-blue-950">
              VISIT US
            </h2>

            <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold tracking-[0.25em] text-blue-700">
                ADDRESS
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-700">
                5F Hanil Cement Building
                <br />
                1587 Seocho-dong, Seocho-gu
                <br />
                Seoul, Korea
              </p>

              <div className="mt-8 h-px bg-gray-200" />

              <p className="mt-8 text-sm font-bold tracking-[0.25em] text-blue-700">
                TEL
              </p>

              <p className="mt-4 text-2xl font-extrabold text-blue-950">
                +82-2-6958-3500
              </p>

              <a
                href="https://www.youtube.com/@user-qc2sw1nl8y"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 text-red-500 transition hover:text-gray-600"
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

      {/* REPORT */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-sm sm:p-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-14">
          <div>
            
            <h2 className="mt-5 text-4xl font-extrabold text-blue-700 sm:text-5xl">
              Report
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-gray-600 sm:text-lg">
              We welcome reports related to
              <br className="sm:hidden" />
              ethical management and company culture.
              <br />
              Your valuable feedback matters to us.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <button
              type="button"
              onClick={() => setOpenReport(true)}
              className="w-full rounded-2xl bg-blue-700 px-8 py-5 text-base font-bold text-white transition hover:bg-blue-800 sm:w-auto"
            >
              Submit Report
            </button>
          </div>
        </div>
      </section>

      {/* POPUP */}
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
              Report Submission
            </h1>

            {/* REPORT TYPE */}
            <section className="mt-10 sm:mt-14">
              <h2 className="text-xl font-bold text-[#222] sm:text-2xl">
                Report Type
              </h2>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-0 sm:overflow-hidden sm:border-y sm:border-gray-200">
                <div className="rounded-2xl border border-gray-200 bg-white sm:grid sm:grid-cols-[220px_1fr] sm:rounded-none sm:border-0 sm:border-b sm:border-gray-200">
                  <div className="bg-gray-50 p-5 font-bold sm:flex sm:items-center sm:justify-center sm:p-6">
                    Ethics Report
                  </div>

                  <div className="p-5 leading-8 text-gray-700 sm:p-6">
                    · Violation of ethical guidelines
                    <br />
                    · Employee misconduct
                    <br />
                    · Illegal practices and corruption
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white sm:grid sm:grid-cols-[220px_1fr] sm:rounded-none sm:border-0">
                  <div className="bg-gray-50 p-5 font-bold sm:flex sm:items-center sm:justify-center sm:p-6">
                    Legal Violation
                  </div>

                  <div className="p-5 leading-8 text-gray-700 sm:p-6">
                    · Legal violations during business operations
                    <br />
                    · Workplace harassment issues
                  </div>
                </div>
              </div>

              <label className="mt-6 inline-flex items-center gap-3 rounded-full bg-gray-100 px-5 py-3 text-sm text-gray-700 sm:px-6">
                <input type="checkbox" />
                Submit anonymously
              </label>
            </section>

            {/* PRIVACY */}
            <section className="mt-10 sm:mt-14">
              <h2 className="text-xl font-bold text-[#222] sm:text-2xl">
                <span className="text-blue-600">
                  [Required]
                </span>{" "}
                Consent to Collection and Use of Personal Information
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-700 sm:text-base sm:leading-8">
                Hanil International collects the minimum
                personal information required for report
                submission services.
              </p>

              <div className="mt-6 space-y-4 sm:mt-8">
                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-sm font-bold text-blue-700">
                    Purpose
                  </p>

                  <p className="mt-2 text-gray-700">
                    Ethics Report
                  </p>

                  <p className="mt-5 text-sm font-bold text-blue-700">
                    Items
                  </p>

                  <p className="mt-2 text-gray-700">
                    Name, Contact, Email, Report Details
                  </p>

                  <p className="mt-5 text-sm font-bold text-blue-700">
                    Retention Period
                  </p>

                  <p className="mt-2 text-gray-700">
                    5 years
                  </p>

                  <p className="mt-5 text-sm font-bold text-blue-700">
                    Agreement
                  </p>

                  <div className="mt-2 flex gap-5 text-gray-700">
                    <label>
                      <input type="radio" name="agree1" /> Agree
                    </label>

                    <label>
                      <input type="radio" name="agree1" /> Disagree
                    </label>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-sm font-bold text-blue-700">
                    Purpose
                  </p>

                  <p className="mt-2 text-gray-700">
                    Service usage statistics
                  </p>

                  <p className="mt-5 text-sm font-bold text-blue-700">
                    Items
                  </p>

                  <p className="mt-2 text-gray-700">
                    Access log, IP information
                  </p>

                  <p className="mt-5 text-sm font-bold text-blue-700">
                    Retention Period
                  </p>

                  <p className="mt-2 text-gray-700">
                    5 years
                  </p>

                  <p className="mt-5 text-sm font-bold text-blue-700">
                    Agreement
                  </p>

                  <div className="mt-2 flex gap-5 text-gray-700">
                    <label>
                      <input type="radio" name="agree2" /> Agree
                    </label>

                    <label>
                      <input type="radio" name="agree2" /> Disagree
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* FORM */}
            <section className="mt-14">
              <p className="mb-8 text-right text-sm text-gray-600">
                <span className="text-blue-600">•</span>{" "}
                indicates required fields.
              </p>

              <div className="space-y-5">
                <ReportInput
                  label="Name"
                  required
                  name="name"
                />

                <ReportInput
                  label="Email"
                  required
                  name="email"
                />

                <ReportInput
                  label="Phone"
                  required
                  name="phone"
                />

                <div className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-5">
                  <label className="font-semibold text-gray-700">
                    <span className="text-blue-600">
                      •
                    </span>{" "}
                    Title
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <select
                      name="reportType"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    >
                      <option>Report Type</option>
                      <option>Ethics Report</option>
                      <option>Legal Violation</option>
                    </select>

                    <input
                      name="title"
                      className="flex-1 rounded-lg border border-gray-300 px-4 py-3"
                    />
                  </div>
                </div>

                <div className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-5">
                  <label className="font-semibold text-gray-700">
                    Attachment
                  </label>

                  <input
                    type="file"
                    className="rounded-lg border border-gray-300 px-4 py-3"
                  />
                </div>

                <div className="grid gap-2 sm:grid-cols-[120px_1fr] sm:items-center sm:gap-5">
                  <label className="pt-3 font-semibold text-gray-700">
                    <span className="text-blue-600">
                      •
                    </span>{" "}
                    Report Content
                  </label>

                  <textarea
                    name="content"
                    rows={7}
                    className="rounded-lg border border-gray-300 px-4 py-3"
                    placeholder="Please enter your report."
                  />
                </div>
              </div>
            </section>

            <button
              type="submit"
              className="mx-auto mt-12 block rounded-xl bg-blue-600 px-16 py-5 text-lg font-bold text-white transition hover:bg-blue-700"
            >
              Submit Report
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
        {required && (
          <span className="text-blue-600">•</span>
        )}{" "}
        {label}
      </label>

      <input
        name={name}
        className="w-full rounded-lg border border-gray-300 px-4 py-3"
      />
    </div>
  );
}