"use client";

import { useEffect, useRef, useState } from "react";

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const play = () => v.play().catch(() => {});

    // Try to play immediately if already buffered
    if (v.readyState >= 2) {
      play();
    }

    v.addEventListener("canplay", play, { once: true });

    return () => v.removeEventListener("canplay", play);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Fallback shown while video loads */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background:
            "linear-gradient(135deg,#030818 0%,#0a1535 40%,#0d1f5e 70%,#0a1535 100%)",
          opacity: videoReady ? 0 : 1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}