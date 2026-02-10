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
        <div className="relative mx-auto flex w-full max-w-5xl flex-col px-4 py-24 sm:px-8 md:px-10 lg:px-0">
          {/* Top label */}
          <p className="mb-6 max-w-xs text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            A LIVE STAGE FOR FOUNDERS, BUILDERS & INVESTORS
          </p>

          {/* Main headline */}
          <h1
            id="hero-heading"
            className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight max-w-3xl"
          >
            THE{" "}
            <span className="inline-block">
              <span className="mr-1">E</span>
              <span
                className="bg-gradient-to-r from-[#F44A22] to-[#F44A22]/60 bg-clip-text text-transparent italic"
                style={{ textShadow: "0 0 24px rgba(244,74,34,0.45)" }}
              >
                NTREPRENEURSHIP
              </span>
            </span>{" "}
            SHOW
          </h1>

          {/* Subtext / meta */}
          <p className="mt-6 text-xs sm:text-sm md:text-base font-medium tracking-[0.25em] text-gray-400">
            FEBRUARY 21ST, 2026 &nbsp; | &nbsp; SILICON VALLEY
          </p>

          {/* Countdown row */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HRS", value: timeLeft.hours },
              { label: "MIN", value: timeLeft.minutes },
              { label: "SEC", value: timeLeft.seconds },
            ].map((item) => (
              <div
                key={item.label}
                className="flex min-w-[72px] flex-col items-center justify-center rounded-xl border border-gray-800 bg-gray-900/50 px-4 py-3 shadow-[0_0_30px_rgba(0,0,0,0.9)]"
              >
                <span className="text-xl sm:text-2xl font-semibold tracking-tight">
                  {item.value}
                </span>
                <span className="mt-1 text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.2em] text-gray-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA tag pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["#TECH", "#VC", "#INNOVATION", "#FOUNDERS", "#FUTUREOFWORK"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-800 bg-gray-900/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gray-200 shadow-[0_0_30px_rgba(0,0,0,0.9)]"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Supporting copy + primary CTA */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm text-gray-300">
              A one-night live show where high-conviction founders, operators,
              and investors collide. No conference fluff — just sharp ideas,
              real stories, and the kind of conversations that start companies.
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                className="rounded-full border border-transparent bg-[#F44A22] px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-[0.16em] text-black shadow-[0_0_40px_rgba(244,74,34,0.5)] transition hover:bg-[#f35b37]"
              >
                REQUEST INVITE
              </button>
              <button
                type="button"
                className="rounded-full border border-gray-700 bg-black/70 px-6 py-2.5 text-xs sm:text-sm font-medium tracking-[0.16em] text-gray-200 transition hover:border-gray-500"
              >
                VIEW PAST SHOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;


