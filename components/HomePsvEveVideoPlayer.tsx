"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/psv-oc-23nov/oc-psv-fans-23nov.mp4";
const POSTER_WEBP = "/videos/psv-oc-23nov/oc-psv-fans-poster-576.webp";

export function HomePsvEveVideoPlayer({
  videoAria,
  unmuteOnLabel,
  unmuteOffLabel,
}: {
  videoAria: string;
  unmuteOnLabel: string;
  unmuteOffLabel: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    void v.play().catch(() => {
      /* autoplay blocked until user gesture — unmute button counts */
    });
  }, []);

  const toggleSound = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    const next = !soundOn;
    v.muted = !next;
    setSoundOn(next);
    if (next) void v.play();
  }, [soundOn]);

  return (
    <div className="relative h-full w-full">
      <video
        ref={videoRef}
        className="block h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER_WEBP}
        width={576}
        height={1024}
        aria-label={videoAria}
        data-psv-home-video
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <button
        type="button"
        className="absolute top-3 right-3 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-gold/60 bg-pub-burgundy-deep/90 px-3 py-2 text-lg shadow-lg backdrop-blur-sm hover:bg-pub-burgundy-deep"
        aria-label={soundOn ? unmuteOffLabel : unmuteOnLabel}
        aria-pressed={soundOn}
        data-psv-sound-toggle
        onClick={toggleSound}
      >
        <span aria-hidden="true">{soundOn ? "🔊" : "🔇"}</span>
      </button>
    </div>
  );
}