"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Parallax Video / Fallback Background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y }}>
        {/* Video element - uses a public laundry video or fallback gradient */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1920&q=80"
        >
          {/* If video fails, poster image shows */}
          <source src="/laundry-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-800/70 via-navy-800/50 to-navy-800/80" />
        <div className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(6,182,212,0.15) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-tag mx-auto mb-6">The Bubbles Experience</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight">
              A Laundromat That{" "}
              <span className="text-gradient italic">Feels Different</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
              Modern equipment, spotless facilities, and friendly service —
              because your laundry day shouldn&apos;t feel like a chore.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { value: "50+", label: "Machines Available" },
                { value: "6AM", label: "Opens Early" },
                { value: "10PM", label: "Closes Late" },
                { value: "7", label: "Days a Week" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-4xl md:text-5xl text-cyan-400">{stat.value}</div>
                  <div className="text-white/50 text-sm mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={toggleMute}
          className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <button
          onClick={togglePlay}
          className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>
    </section>
  );
}
