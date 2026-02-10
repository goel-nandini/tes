// About.jsx
// Centered "About the event" section with concise copy and supporting stats.

import React from "react";

const About = () => {
  const stats = [
    {
      label: "CURATED ROOM SIZE",
      value: "200–250",
      body: "Large enough for serendipity, small enough that every conversation can matter.",
    },
    {
      label: "WHO IT'S FOR",
      value: "Founders & builders",
      body: "People actively shipping, raising, hiring, or backing ambitious products.",
    },
    {
      label: "FORMAT",
      value: "1 night",
      body: "A single, dense evening that trades panels and booths for real signal.",
    },
  ];

  return (
    <section
      className="bg-black px-6 py-16 sm:px-8 md:px-10 lg:px-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Heading and core narrative */}
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          ABOUT THE ENTREPRENEURSHIP SHOW
        </p>
        <h2
          id="about-heading"
          className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white"
        >
          A live, unfiltered look at how modern companies actually get built.
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-gray-300">
          The Entrepreneurship Show is a stage for the people doing the work —
          founders, operators and investors who are in the arena right now. No
          generic keynotes, no buzzword bingo, just clear stories, real
          numbers, and the decisions behind them.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-gray-400">
          You&apos;ll leave with sharper instincts, new collaborators, and a
          concrete sense of what &quot;good&quot; looks like in your next
          chapter — whether that&apos;s starting, scaling, or backing what
          comes next.
        </p>

        {/* Stats / highlight cards */}
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="flex flex-col items-center rounded-2xl border border-gray-800 bg-neutral-950/80 px-4 py-6 text-center shadow-[0_0_30px_rgba(0,0,0,0.9)]"
            >
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-gray-400">
                {stat.label}
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {stat.value}
              </p>
              <p className="mt-3 text-xs text-gray-300">{stat.body}</p>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-10 text-xs sm:text-sm text-gray-500">
          This isn&apos;t a conference. It&apos;s a live show for people who
          can&apos;t not build.
        </p>
      </div>
    </section>
  );
};

export default About;


