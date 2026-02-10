// Cube3D.jsx
// 3D cube used in the hero, adapted to the event color system with a subtle rotation animation.

import React, { useEffect, useRef } from "react";

const faceBase = {
  backfaceVisibility: "hidden",
};

const Cube3D = () => {
  const cubeRef = useRef(null);

  // Smooth, time-based rotation for a more natural flow
  useEffect(() => {
    let frameId;
    let lastTime = performance.now();
    let angle = -32;

    const animate = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      // degrees per second
      const speed = 6;
      angle += (delta / 1000) * speed;

      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(18deg) rotateY(${angle}deg)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  const depth = 120; // half of the cube size in px

  return (
    <div
      className="relative h-72 w-72 sm:h-96 sm:w-96 md:h-[26rem] md:w-[26rem]"
      style={{ perspective: "1600px" }}
    >
      <div
        ref={cubeRef}
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-[#F44A22]/70 bg-[#F44A22]/5 text-sm font-semibold tracking-wide text-gray-50"
          style={{
            ...faceBase,
            transform: `translateZ(${depth}px)`,
          }}
        >
          <span className="material-symbols-outlined mb-2 text-4xl text-[#F44A22]">
            rocket
          </span>
          INNOVATE
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-[#F44A22]/25 bg-black/40 text-sm font-semibold tracking-wide text-gray-300"
          style={{
            ...faceBase,
            transform: `rotateY(180deg) translateZ(${depth}px)`,
          }}
        >
          <span className="material-symbols-outlined mb-2 text-4xl text-[#F44A22]">
            hub
          </span>
          NETWORK
        </div>

        {/* Right */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-[#F44A22]/40 bg-[#F44A22]/3 text-sm font-semibold tracking-wide text-gray-50"
          style={{
            ...faceBase,
            transform: `rotateY(90deg) translateZ(${depth}px)`,
          }}
        >
          <span className="material-symbols-outlined mb-2 text-4xl text-[#F44A22]">
            record_voice_over
          </span>
          PITCH
        </div>

        {/* Left */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-[#F44A22]/40 bg-[#F44A22]/3 text-sm font-semibold tracking-wide text-gray-50"
          style={{
            ...faceBase,
            transform: `rotateY(-90deg) translateZ(${depth}px)`,
          }}
        >
          <span className="material-symbols-outlined mb-2 text-4xl text-[#F44A22]">
            trending_up
          </span>
          SCALE
        </div>

        {/* Top */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-[#F44A22]/35 bg-[#F44A22]/4 text-sm font-semibold tracking-wide text-gray-50"
          style={{
            ...faceBase,
            transform: `rotateX(90deg) translateZ(${depth}px)`,
          }}
        >
          <span className="material-symbols-outlined mb-2 text-4xl text-[#F44A22]">
            monetization_on
          </span>
          FUND
        </div>

        {/* Bottom */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-[#F44A22]/25 bg-black/40 text-sm font-semibold tracking-wide text-gray-300"
          style={{
            ...faceBase,
            transform: `rotateX(-90deg) translateZ(${depth}px)`,
          }}
        >
          <span className="material-symbols-outlined mb-2 text-4xl text-[#F44A22]">
            bolt
          </span>
          DISRUPT
        </div>
      </div>
    </div>
  );
};

export default Cube3D;

