// PastShow.jsx
// Bento-style grid showcasing highlights and stats from previous editions of the show.

import React, { useEffect, useRef } from "react";

const PastShow = () => {
  const darkCard =
    "rounded-2xl border border-gray-800 bg-[#050505]/95 shadow-[0_0_40px_rgba(0,0,0,0.9)]";

  // Refs for scroll animations
  const statsRef = useRef([]);
  const headerRef = useRef(null);
  const largeCardRef = useRef(null);
  const rightColumnRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe stat cards
    statsRef.current.forEach((stat) => {
      if (stat) observer.observe(stat);
    });

    // Observe header
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Observe large card
    if (largeCardRef.current) {
      observer.observe(largeCardRef.current);
    }

    // Observe right column cards
    rightColumnRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .bento-stat {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .bento-stat.animate-in {
          opacity: 1;
          transform: scale(1);
        }
        .bento-header {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .bento-header.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .bento-card {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .bento-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <section
        className="bg-black px-6 py-16 sm:px-8 md:px-10 lg:px-20"
        aria-labelledby="past-show-heading"
      >
        <div className="mx-auto max-w-6xl">
          {/* Top stat row */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "GLOBAL SPEAKERS", value: "50+" },
              { label: "VC CAPITAL", value: "$4.2B" },
              { label: "WORKSHOPS", value: "24" },
              { label: "EXPECTED GUESTS", value: "12K" },
            ].map((item, index) => (
              <article
                key={item.label}
                ref={(el) => (statsRef.current[index] = el)}
                className={`${darkCard} flex flex-col justify-between px-5 py-4 sm:px-6 sm:py-5 bento-stat`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-gray-500">
                  {item.label}
                </p>
                <p className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F44A22]">
                  {item.value}
                </p>
              </article>
            ))}
          </div>

          {/* Section header */}
          <header ref={headerRef} className="mt-10 mb-6 flex items-baseline justify-between gap-4 bento-header">
            <div>
              <p className="text-sm sm:text-base font-extrabold uppercase tracking-[0.24em] text-gray-300">
                PAST SHOW HIGHLIGHTS
              </p>
              <p className="mt-2 text-base sm:text-lg text-gray-400">
                Experience the energy of previous Entrepreneurship Shows.
              </p>
            </div>
            <p
              className="hidden md:inline-flex items-center rounded-full border border-[#F44A22]/60 bg-black/60 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#F44A22]"
              style={{
                boxShadow: "0 0 0 1px rgba(244,74,34,0.3), 0 0 20px rgba(244,74,34,0.4)"
              }}
            >
              2023 – 2025 RECAP
            </p>
          </header>

          {/* Bento grid layout: 2 columns
            Left column: single card taking full height
            Right column: stacked cards that share the same total height
        */}
          <div className="grid grid-cols-1 gap-4 md:h-[520px] lg:h-[580px] md:grid-cols-2">
            {/* Large image-style card (left, full height) */}
            <article ref={largeCardRef} className={`${darkCard} h-full overflow-hidden bento-card`}>
              <div className="relative h-full w-full">
                <img
                  src="/audi.jpeg"
                  alt="Main Stage Event"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,74,34,0.3),transparent_55%)] opacity-60" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black via-black/80 to-transparent" />

                <div className="pointer-events-auto absolute bottom-4 left-4 right-4 flex flex-col gap-3 text-left">
                  <span className="inline-flex w-max items-center rounded-full bg-black/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white">
                    LIVE REPLAY
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">
                    Main Stage 2025: The Opening.
                  </h3>
                  <p className="max-w-md text-sm text-gray-300">
                    Lights down, founders up. A packed room, a wall of sound, and
                    the first stories that set the tone for the night.
                  </p>
                </div>
              </div>
            </article>

            {/* Right column */}
            <div className="flex h-full flex-col gap-4">
              {/* Top card */}
              <article
                ref={(el) => (rightColumnRef.current[0] = el)}
                className="relative flex flex-1 flex-col justify-between p-5 sm:p-6 overflow-hidden rounded-2xl border-2 border-gray-600/40 bg-black/20 shadow-[0_0_30px_rgba(0,0,0,0.9)] bento-card"
                style={{ backdropFilter: "blur(10px)", transitionDelay: "0.2s" }}
              >
                <img
                  src="/vij.jpeg"
                  alt="Founder Pitches"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
                <div className="relative z-10">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gray-400">
                    FOUNDER PITCHES
                  </p>
                  <h3 className="mt-3 text-lg sm:text-xl font-extrabold text-white">
                    Stories behind the seed rounds.
                  </h3>
                  <p className="mt-3 text-sm text-gray-400">
                    Watch the pitches that secured over $70M in early funding —
                    including the moments that almost broke.
                  </p>
                </div>
                <p
                  className="mt-4 inline-flex w-max items-center rounded-full border border-[#F44A22]/60 bg-black/70 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.18em] text-[#F44A22] relative z-10"
                  style={{
                    boxShadow: "0 0 0 1px rgba(244,74,34,0.3), 0 0 20px rgba(244,74,34,0.4)"
                  }}
                >
                  2024 STAGE REEL
                </p>
              </article>

              {/* Bottom row: two cards side by side */}
              <div className="grid flex-1 grid-cols-2 gap-4">
                {/* Bright accent card with image */}
                <article
                  ref={(el) => (rightColumnRef.current[1] = el)}
                  className="relative flex h-full flex-col justify-between rounded-2xl bg-[#F44A22] px-4 py-4 text-black shadow-[0_0_40px_rgba(244,74,34,0.5)] overflow-hidden bento-card"
                  style={{ transitionDelay: "0.3s" }}
                >
                  <img
                    src="/saumya_singh_tes.jpeg"
                    alt="Networking Mixer"
                    className="absolute inset-0 h-full w-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#F44A22] via-[#F44A22]/95 to-[#F44A22]/90" />
                  <div className="relative z-10">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-black/70">
                      NETWORKING MIXER 2024
                    </p>
                    <h3 className="mt-3 text-base sm:text-lg font-extrabold">
                      A room built for long-term collaborators.
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-black/70 relative z-10">
                    120 high-intent matches in one evening — founders, operators
                    and investors paired on what they&apos;re building next.
                  </p>
                </article>

                {/* Small dark recap card */}
                <article
                  ref={(el) => (rightColumnRef.current[2] = el)}
                  className={`${darkCard} flex h-full flex-col justify-between px-4 py-4 sm:px-5 sm:py-5 bento-card`}
                  style={{ transitionDelay: "0.4s" }}
                >
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gray-400">
                      INNOVATION LAB
                    </p>
                    <h3 className="mt-3 text-base sm:text-lg font-extrabold text-white">
                      Hands-on demos from teams in stealth.
                    </h3>
                    <p className="mt-3 text-sm text-gray-400">
                      A quiet corner where founders showed what they&apos;re
                      shipping next, months before launch.
                    </p>
                  </div>
                  <p className="mt-3 text-[0.65rem] uppercase tracking-[0.18em] text-gray-500">
                    PROTOTYPES • PRIVATE FEEDBACK
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PastShow;


