// Timeline.jsx
// Vertical timeline describing the event flow / agenda.

import React from "react";

const Timeline = () => {
  // Static agenda items for the event
  const agenda = [
    {
      time: "4:30 PM",
      title: "Doors open & founder check-in",
      description:
        "Early arrivals get first access to front-row seating and curated intros based on what they’re building.",
    },
    {
      time: "5:00 PM",
      title: "Cold start: inside the first 10 users",
      description:
        "A live reverse-engineering of how breakout products found their first fans — featuring real onboarding flows and outreach copy.",
    },
    {
      time: "6:00 PM",
      title: "Capital on stage",
      description:
        "VCs and angels share exactly what they shipped with their best investments: conviction, timing, and uncomfortable calls.",
    },
    {
      time: "7:00 PM",
      title: "Live teardown: the unraised deck",
      description:
        "A founder walks through the deck that didn’t close, then the version that did — with line-by-line feedback.",
    },
    {
      time: "8:00 PM",
      title: "Hallway sessions & private intros",
      description:
        "Curated matches between founders, operators and investors, with quiet corners for honest conversations.",
    },
  ];

  return (
    <section
      className="bg-black px-6 py-16 sm:px-8 md:px-10 lg:px-20"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row">
        {/* Left: schedule timeline */}
        <div className="flex-1">
          {/* Section heading */}
          <header className="mb-8">
            <p
              className="inline-flex w-max items-center rounded-full border border-[#F44A22]/60 bg-black/60 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#F44A22]"
              style={{
                boxShadow: "0 0 0 1px rgba(244,74,34,0.3), 0 0 20px rgba(244,74,34,0.4)"
              }}
            >
              FEB 21, 2026 SCHEDULE
            </p>
            <h2
              id="timeline-heading"
              className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white"
            >
              A show scripted for momentum.
            </h2>
            <p className="mt-3 max-w-2xl text-base sm:text-lg text-gray-400">
              Every block of the evening builds on the last — so by the time you
              leave, you&apos;ve heard the stories, met the people, and seen the
              deals that define what&apos;s next.
            </p>
          </header>

          {/* Timeline container */}
          <div className="relative pl-6 sm:pl-8">
            {/* Vertical line */}
            <div className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gray-800 sm:left-4" />

            {/* Timeline items */}
            <ol className="space-y-6 sm:space-y-7">
              {agenda.map((item, index) => {
                const isLast = index === agenda.length - 1;
                return (
                  <li
                    key={item.time}
                    className="relative flex gap-4 sm:gap-6"
                    aria-label={`${item.time} - ${item.title}`}
                  >
                    {/* Marker column */}
                    <div className="relative flex flex-col items-center">
                      {/* Dot */}
                      <div className="z-10 flex h-4 w-4 items-center justify-center rounded-full border bg-black border-[#F44A22]">
                        <div className="h-2 w-2 rounded-full bg-[#F44A22]" />
                      </div>
                      {/* Tail glow to next item */}
                      {!isLast && (
                        <div className="mt-1 h-full w-px bg-linear-to-b from-[#F44A22]/60 via-gray-800 to-transparent" />
                      )}
                    </div>

                    {/* Content card */}
                    <div className="flex-1 pb-1">
                      <div className="rounded-2xl bg-[#131313] px-4 py-4 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#F44A22]">
                          {item.time}
                        </p>
                        <h3 className="mt-2 text-lg sm:text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-base text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Right: QR registration + location */}
        <aside className="w-full max-w-sm self-start space-y-4 lg:space-y-5">
          {/* QR card */}
          <div className="rounded-2xl bg-[#F44A22] p-5 text-black shadow-[0_0_40px_rgba(244,74,34,0.6)]">
            <p className="text-base font-extrabold uppercase tracking-[0.20em] text-black">
              REGISTER QUICKLY
            </p>
            <p className="mt-3 text-sm text-black/80">
              Scan the QR code to confirm your seat and get event updates on
              your phone.
            </p>

            <div className="mt-4 rounded-2xl bg-black/90 p-4">
              <img
                src="/qr.jpeg"
                alt="QR code to register for The Entrepreneurship Show"
                className="h-auto w-full rounded-lg object-contain"
              />
            </div>

            <a
              className="mt-4 block w-full rounded-full cursor-pointer bg-black px-6 py-3.5 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-white transition hover:bg-gray-900"
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=Dn_YOpMfvUGU9ILDfZcciI684JB80VRGkdlg2YpjF7dUNkdGVTBRSU1ETUc3VFRKVlMzOTBBNVg1TC4u&origin=QRCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              CLAIM MY PASS
            </a>
          </div>

          {/* Location card */}
          <div className="rounded-2xl border border-gray-800 bg-[#050505] p-5 text-left shadow-[0_0_30px_rgba(0,0,0,0.9)]">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gray-300">
              VENUE LOCATION
            </p>
            <div className="mt-4 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.4912655644394!2d77.49916207549944!3d28.676314675637805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6732cb9ca50e0bc!2sABES%20Engineering%20College!5e0!3m2!1sen!2sin!4v1707565914000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Event venue location map"
                className="rounded-2xl"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-white">
              ABES Engineering College
            </p>
            <p className="mt-1 text-sm text-gray-400">
              19th KM Stone, NH-09<br />
              Ghaziabad (UP)
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Timeline;


