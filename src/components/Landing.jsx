// Landing.jsx
// Full-screen hero section for "THE ENTREPRENEURSHIP SHOW"
// Includes: 3D-style wireframe cube, countdown, headline, subtext, and CTA tags.

import React, { useEffect, useState } from "react";
import Cube3D from "./Cube3D.jsx";

const EVENT_DATE = new Date("2026-02-21T00:00:00-08:00"); // Silicon Valley (PST) approximation

const Landing = () => {
  // State to hold countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Helper to format a time part as two digits
  const formatTime = (value) => String(value).padStart(2, "0");

  // Calculate time remaining until the event
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
      const minutes = Math.floor((totalSeconds / 60) % 60);
      const seconds = Math.floor(totalSeconds % 60);

      setTimeLeft({
        days: formatTime(days),
        hours: formatTime(hours),
        minutes: formatTime(minutes),
        seconds: formatTime(seconds),
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      className="relative min-h-screen bg-black text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#F44A22]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#F44A22]/10 blur-3xl" />
      </div>

      {/* 3D cube pushed back on the right */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end pr-6 sm:pr-12 md:pr-20"
        aria-hidden="true"
      >
        <div className="translate-y-6 md:translate-y-4">
          <Cube3D />
        </div>
      </div>

      {/* Hero content */}
      <section className="relative z-10 flex min-h-screen items-center">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-24 sm:px-8 md:px-10 lg:px-0 lg:pr-40">
          {/* Top label (neon pill + rocket icon) */}
          <p
            className="mb-7 inline-flex w-max items-center gap-2 rounded-full border border-[#F44A22]/50 bg-black/60 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gray-200"
            style={{
              boxShadow:
                "0 0 0 1px rgba(244,74,34,0.18), 0 0 24px rgba(244,74,34,0.18)",
            }}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#F44A22]/40 bg-black/70"
              style={{ boxShadow: "0 0 18px rgba(244,74,34,0.25)" }}
            >
              {/* Inline rocket icon (no external libs) */}
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5 3.5c3.2.4 6 3.2 6 6.4 0 1.6-.6 3.4-1.8 4.8l-3 3c-.5.5-1.1.7-1.8.7h-3.1l-2.5 2.5c-.3.3-.8.2-.9-.2l-.7-2.8-2.8-.7c-.4-.1-.5-.6-.2-.9l2.5-2.5V11.7c0-.7.3-1.3.7-1.8l3-3c1.4-1.2 3.2-1.8 4.8-1.4Z"
                  stroke="#F44A22"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6 7.4a2.2 2.2 0 1 0 3.1 3.1 2.2 2.2 0 0 0-3.1-3.1Z"
                  stroke="#F44A22"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
            INSPIRE • EMPOWER • CONNECT WITH FUTURE ENTREPRENEURS
          </p>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.95] tracking-tight max-w-3xl"
          >
            <span className="block text-white">THE</span>
            <span
              className="block italic text-[#F44A22]"
              style={{ textShadow: "0 0 28px rgba(244,74,34,0.35)" }}
            >
              ENTREPRENEURSHIP
            </span>
            <span className="block text-white">SHOW</span>
          </h1>

          {/* Subtext (match reference copy style) */}
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-300">
            Connect with the architects of the future.{" "}
            <span className="font-semibold text-white">Pitch.</span>{" "}
            <span className="font-semibold text-white">Partner.</span>{" "}
            <span className="font-semibold text-white">Prevail.</span>
          </p>

          {/* Countdown row */}
          <div className="mt-4 flex flex-wrap gap-4">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HRS", value: timeLeft.hours },
              { label: "MIN", value: timeLeft.minutes },
              { label: "SEC", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className={[
                  "flex min-w-[84px] flex-col items-center justify-center rounded-2xl border px-4 py-4 shadow-[0_0_30px_rgba(0,0,0,0.9)]",
                  item.label === "SEC"
                    ? "border-[#F44A22]/20 bg-[#F44A22] text-black"
                    : "border-gray-800 bg-[#121212] text-white",
                ].join(" ")}
              >
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {item.value}
                </span>
                <span
                  className={[
                    "mt-2 text-[0.65rem] uppercase tracking-[0.22em]",
                    item.label === "SEC" ? "text-black/70" : "text-gray-500",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Primary CTA + small meta (match reference structure) */}
          <div className="mt-6">
            <a
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#F44A22] px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black shadow-[0_0_50px_rgba(244,74,34,0.35)] transition hover:bg-[#f35b37] sm:w-auto"
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=Dn_YOpMfvUGU9ILDfZcciI684JB80VRGkdlg2YpjF7dUNkdGVTBRSU1ETUc3VFRKVlMzOTBBNVg1TC4u&origin=QRCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN THE REVOLUTION
              <span aria-hidden="true" className="text-lg">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;




