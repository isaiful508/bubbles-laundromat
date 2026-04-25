"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Play,
  Shirt,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";

const YOUTUBE_VIDEO_ID = "6xF8xTL1QDc";

const bubbles = [
  { size: 92, left: "4%", top: "20%", duration: 5, delay: 0, xAmp: 18 },
  { size: 38, left: "15%", top: "72%", duration: 4.5, delay: 0.5, xAmp: -14 },
  { size: 56, left: "28%", top: "14%", duration: 5.5, delay: 0.3, xAmp: 20 },
  { size: 22, left: "44%", top: "30%", duration: 4, delay: 0.8, xAmp: -10 },
  { size: 68, left: "73%", top: "18%", duration: 5.2, delay: 0.2, xAmp: 16 },
  { size: 34, left: "86%", top: "58%", duration: 4.2, delay: 0.9, xAmp: -18 },
  { size: 18, left: "93%", top: "26%", duration: 3.8, delay: 0.4, xAmp: 12 },
  { size: 48, left: "60%", top: "65%", duration: 4.8, delay: 1.1, xAmp: -16 },
  { size: 28, left: "50%", top: "80%", duration: 4.3, delay: 0.6, xAmp: 14 },
  { size: 14, left: "8%", top: "50%", duration: 3.5, delay: 1.3, xAmp: -8 },
];

const avatars = [
  "/banner_small.jpg",
  "/banner_small.jpg",
  "/banner_small.jpg",
  "/banner_small.jpg",
];

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#eef2fb] noise">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(127,156,255,0.22),_transparent_38%),linear-gradient(180deg,_#f7f9ff_0%,_#eef2fb_52%,_#edf2fd_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),transparent)]" />

        <div className="bubble-container absolute inset-0 pointer-events-none">
          {bubbles.map((bubble, index) => (
            <motion.div
              key={`${bubble.left}-${bubble.top}`}
              className="bubble absolute rounded-full"
              style={{
                width: bubble.size,
                height: bubble.size,
                left: bubble.left,
                top: bubble.top,
              }}
              animate={{
                y: [0, -22, -8, -26, 0],
                x: [0, bubble.xAmp, bubble.xAmp * 0.4, bubble.xAmp * 0.8, 0],
                scale: [1, 1.12, 1.05, 1.1, 1],
                opacity: [0.45, 0.8, 0.6, 0.75, 0.45],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "loop",
              }}
            />
          ))}
        </div>

        <motion.div
          className="absolute left-[14%] top-[24%] hidden h-5 w-5 rounded-full bg-white/80 shadow-[0_0_0_10px_rgba(255,255,255,0.22)] lg:block"
          animate={{ y: [0, -14, -4, -18, 0], opacity: [0.7, 1, 0.8, 1, 0.7] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[16%] top-[18%] hidden h-3 w-3 rounded-full bg-[#7f9cff]/70 lg:block"
          animate={{ y: [0, 16, 6, 20, 0], opacity: [0.4, 0.9, 0.6, 0.85, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-10 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#cbd7fb] bg-white/75 px-4 py-2 text-sm font-semibold text-[#3354b8] shadow-[0_16px_30px_rgba(93,131,255,0.08)]"
            >
              <Sparkles className="h-4 w-4" />
              Fresh care for busy days
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mt-6 font-display text-[3.35rem] font-bold leading-[0.96] tracking-tight text-[#112041] sm:text-[4.6rem] lg:text-[6.15rem]"
            >
              Your <span className="text-[#5d83ff]">Laundry,</span> Our
              <br />
              Spin Perfection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#31415f] sm:text-lg"
            >
              Fast turnaround, careful handling, and a polished laundromat
              experience that keeps pickup, washing, and folding feeling easy from
              the first click.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary min-w-[218px] justify-center text-base"
              >
                Book Laundry Now
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.button
                onClick={() => setVideoOpen(true)}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative flex h-16 w-16 items-center justify-center rounded-full border-[8px] border-[#ffe6a6] bg-[#ffb400] text-white shadow-[0_18px_35px_rgba(255,180,0,0.28)]"
                aria-label="Watch video"
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-[#ffb400]/40"
                  animate={{ scale: [1, 1.55], opacity: [0.6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
                <Play className="ml-1 h-6 w-6 fill-current" />
              </motion.button>
            </motion.div>
          </div>
          <div className="relative mx-auto mt-16 flex w-full max-w-6xl items-end justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute left-0 top-6 hidden w-[270px] rounded-[30px] bg-gradient-to-br from-[#5d83ff] to-[#6f95ff] p-7 text-white shadow-[0_28px_55px_rgba(93,131,255,0.24)] xl:block"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/22">
                <Clock3 className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-[2.05rem] font-extrabold leading-none">Only One Hour</h3>
              <p className="mt-3 text-base text-white/88">Express laundry service</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="absolute right-0 top-0 hidden w-[260px] rounded-[30px] border border-[#bcd0f5] bg-white/90 p-4 shadow-[0_30px_60px_rgba(17,32,65,0.12)] lg:block"
            >
              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src="/banner_small.jpg"
                  alt="Laundry service preview"
                  width={592}
                  height={384}
                  className="h-[156px] w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="flex items-center gap-1 text-[#ffb400]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-[1.05rem] font-bold text-[#112041]">(4.6/5)</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24, y: 24 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute bottom-[14%] left-[10%] hidden w-[260px] rounded-[30px] border border-[#bfd1f4] bg-white/90 p-5 shadow-[0_28px_55px_rgba(17,32,65,0.12)] lg:block"
            >
              <p className="text-xl font-bold text-[#112041]">Join Our Growing Team Now :</p>
              <div className="mt-5 flex items-center">
                <div className="flex">
                  {avatars.map((src, index) => (
                    <div
                      key={`${src}-${index}`}
                      className={`relative h-12 w-12 overflow-hidden rounded-full border-2 border-white ${index === 0 ? "" : "-ml-3"}`}
                    >
                      <Image src={src} alt="Customer portrait" fill className="object-cover" sizes="48px" />
                    </div>
                  ))}
                </div>
                <div className="ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffb400] text-white shadow-[0_12px_28px_rgba(255,180,0,0.28)]">
                  <Users className="h-5 w-5" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24, y: 24 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68 }}
              className="absolute bottom-[12%] right-[-5%] hidden w-[260px] rounded-[30px] bg-gradient-to-br from-[#5d83ff] to-[#6f95ff] p-6 text-white shadow-[0_28px_55px_rgba(93,131,255,0.24)] lg:block z-20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <Shirt className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-[2.2rem] font-extrabold leading-none">100K+</h3>
              <p className="mt-3 text-base text-white/88">Clothes spinned to perfection</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="relative z-10 mx-auto w-full max-w-[860px] px-3 sm:px-8"
            >
              <div className="relative mx-auto aspect-[1.08/1] max-w-[760px]">
                <Image
                  src="/laundry_banner.png"
                  alt="Laundry machine with plant and basket"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 760px"
                  className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(17,32,65,0.10)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {videoOpen && (
          <motion.div
            key="video-backdrop"
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setVideoOpen(false)}
            />

            <motion.div
              key="video-box"
              className="relative z-10 w-full max-w-3xl mx-4 rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 transition"
                aria-label="Close video"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="aspect-video w-full bg-black">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    key={videoOpen ? "open" : "closed"} // forces remount on open
                    src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title="Bubbles Laundry Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="h-full w-full border-0"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
