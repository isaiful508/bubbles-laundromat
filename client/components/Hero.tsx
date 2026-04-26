// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   Clock3,
//   Shirt,
//   Sparkles,
// } from "lucide-react";


// const bubbles = [
//   { size: 92, left: "4%", top: "20%", duration: 5, delay: 0, xAmp: 18 },
//   { size: 38, left: "15%", top: "72%", duration: 4.5, delay: 0.5, xAmp: -14 },
//   { size: 56, left: "28%", top: "14%", duration: 5.5, delay: 0.3, xAmp: 20 },
//   { size: 22, left: "44%", top: "30%", duration: 4, delay: 0.8, xAmp: -10 },
//   { size: 68, left: "73%", top: "18%", duration: 5.2, delay: 0.2, xAmp: 16 },
//   { size: 34, left: "86%", top: "58%", duration: 4.2, delay: 0.9, xAmp: -18 },
//   { size: 18, left: "93%", top: "26%", duration: 3.8, delay: 0.4, xAmp: 12 },
//   { size: 48, left: "60%", top: "65%", duration: 4.8, delay: 1.1, xAmp: -16 },
//   { size: 28, left: "50%", top: "80%", duration: 4.3, delay: 0.6, xAmp: 14 },
//   { size: 14, left: "8%", top: "50%", duration: 3.5, delay: 1.3, xAmp: -8 },
// ];

// const avatars = [
//   "/banner_small.jpg",
//   "/banner_small.jpg",
//   "/banner_small.jpg",
//   "/banner_small.jpg",
// ];

// export default function Hero() {

//   return (
//     <>
//       <section className="relative overflow-hidden bg-[#eef2fb] noise">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(127,156,255,0.22),_transparent_38%),linear-gradient(180deg,_#f7f9ff_0%,_#eef2fb_52%,_#edf2fd_100%)]" />
//         <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),transparent)]" />

//         <div className="bubble-container absolute inset-0 pointer-events-none">
//           {bubbles.map((bubble, index) => (
//             <motion.div
//               key={`${bubble.left}-${bubble.top}`}
//               className="bubble absolute rounded-full"
//               style={{
//                 width: bubble.size,
//                 height: bubble.size,
//                 left: bubble.left,
//                 top: bubble.top,
//               }}
//               animate={{
//                 y: [0, -22, -8, -26, 0],
//                 x: [0, bubble.xAmp, bubble.xAmp * 0.4, bubble.xAmp * 0.8, 0],
//                 scale: [1, 1.12, 1.05, 1.1, 1],
//                 opacity: [0.45, 0.8, 0.6, 0.75, 0.45],
//               }}
//               transition={{
//                 duration: bubble.duration,
//                 delay: bubble.delay,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 repeatType: "loop",
//               }}
//             />
//           ))}
//         </div>

//         <motion.div
//           className="absolute left-[14%] top-[24%] hidden h-5 w-5 rounded-full bg-white/80 shadow-[0_0_0_10px_rgba(255,255,255,0.22)] lg:block"
//           animate={{ y: [0, -14, -4, -18, 0], opacity: [0.7, 1, 0.8, 1, 0.7] }}
//           transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute right-[16%] top-[18%] hidden h-3 w-3 rounded-full bg-[#7f9cff]/70 lg:block"
//           animate={{ y: [0, 16, 6, 20, 0], opacity: [0.4, 0.9, 0.6, 0.85, 0.4] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-10 lg:pt-32">
//           <div className="mx-auto max-w-4xl text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 rounded-full border border-[#cbd7fb] bg-white/75 px-4 py-2 text-sm font-semibold text-[#3354b8] shadow-[0_16px_30px_rgba(93,131,255,0.08)]"
//             >
//               <Sparkles className="h-4 w-4" />
//               Fresh care for busy days
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 26 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.75, delay: 0.1 }}
//               className="mt-6 font-display text-[3.35rem] font-bold leading-[0.96] tracking-tight text-[#112041] sm:text-[4.6rem] lg:text-[6.15rem]"
//             >
//               Your <span className="text-[#5d83ff]">Laundry,</span> Our
//               <br />
//               Spin Perfection
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 22 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#31415f] sm:text-lg"
//             >
//               Fast turnaround, careful handling, and a polished laundromat
//               experience that keeps pickup, washing, and folding feeling easy from
//               the first click.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.3 }}
//               className="mt-10 flex flex-wrap items-center justify-center gap-4"
//             >
//               <motion.a
//                 href="#contact"
//                 whileHover={{ scale: 1.04, y: -2 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="btn-primary min-w-[218px] justify-center text-base"
//               >
//                 Book Laundry Now
//                 <ArrowRight className="h-5 w-5" />
//               </motion.a>
//             </motion.div>
//           </div>
//           <div className="relative mx-auto mt-16 flex w-full max-w-6xl items-end justify-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30, y: 20 }}
//               animate={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.4 }}
//               className="absolute left-0 top-6 hidden w-[270px] rounded-[30px] bg-gradient-to-br from-[#5d83ff] to-[#6f95ff] p-7 text-white shadow-[0_28px_55px_rgba(93,131,255,0.24)] xl:block"
//             >
//               <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/22">
//                 <Clock3 className="h-7 w-7" />
//               </div>
//               <h3 className="mt-6 text-[2.05rem] font-extrabold leading-none">Only One Hour</h3>
//               <p className="mt-3 text-base text-white/88">Express laundry service</p>
//             </motion.div>


//             <motion.div
//               initial={{ opacity: 0, x: 24, y: 24 }}
//               animate={{ opacity: 1, x: 0, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.68 }}
//               className="absolute bottom-[12%] right-[-5%] hidden w-[260px] rounded-[30px] bg-gradient-to-br from-[#5d83ff] to-[#6f95ff] p-6 text-white shadow-[0_28px_55px_rgba(93,131,255,0.24)] lg:block z-20"
//             >
//               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
//                 <Shirt className="h-6 w-6" />
//               </div>
//               <h3 className="mt-6 text-[2.2rem] font-extrabold leading-none">100K+</h3>
//               <p className="mt-3 text-base text-white/88">Clothes spinned to perfection</p>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 24, scale: 0.96 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               transition={{ duration: 0.9, delay: 0.35 }}
//               className="relative z-10 mx-auto w-full max-w-[860px] px-3 sm:px-8"
//             >
//               <div className="relative mx-auto aspect-[1.08/1] max-w-[760px]">
//                 <Image
//                   src="/laundry_banner.png"
//                   alt="Laundry machine with plant and basket"
//                   fill
//                   priority
//                   sizes="(max-width: 768px) 92vw, 760px"
//                   className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(17,32,65,0.10)]"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock3, Shirt, Sparkles, Star, CheckCircle, Phone } from "lucide-react";


const bubbles = [
  { size: 130, left: "1%", top: "10%", dur: 5.0, delay: 0.0, xA: 24, color: "rgba(93,131,255,0.35)" },
  { size: 70, left: "8%", top: "55%", dur: 4.2, delay: 0.6, xA: -18, color: "rgba(120,180,255,0.30)" },
  { size: 45, left: "16%", top: "78%", dur: 3.8, delay: 1.1, xA: 14, color: "rgba(160,210,255,0.25)" },
  { size: 90, left: "22%", top: "8%", dur: 5.6, delay: 0.3, xA: 20, color: "rgba(93,131,255,0.28)" },
  { size: 28, left: "32%", top: "68%", dur: 3.4, delay: 1.4, xA: -12, color: "rgba(200,220,255,0.35)" },
  { size: 55, left: "40%", top: "22%", dur: 4.8, delay: 0.7, xA: -22, color: "rgba(100,160,255,0.30)" },
  { size: 20, left: "50%", top: "82%", dur: 3.2, delay: 0.4, xA: 10, color: "rgba(180,210,255,0.40)" },
  { size: 105, left: "56%", top: "5%", dur: 5.4, delay: 0.8, xA: -20, color: "rgba(80,120,255,0.22)" },
  { size: 38, left: "64%", top: "58%", dur: 4.0, delay: 1.3, xA: 16, color: "rgba(150,190,255,0.30)" },
  { size: 62, left: "70%", top: "72%", dur: 4.6, delay: 0.5, xA: -16, color: "rgba(93,131,255,0.25)" },
  { size: 85, left: "78%", top: "15%", dur: 5.2, delay: 0.2, xA: 22, color: "rgba(110,150,255,0.28)" },
  { size: 32, left: "85%", top: "45%", dur: 3.6, delay: 0.9, xA: -10, color: "rgba(190,215,255,0.35)" },
  { size: 48, left: "91%", top: "68%", dur: 4.3, delay: 1.6, xA: 12, color: "rgba(130,170,255,0.30)" },
  { size: 18, left: "5%", top: "38%", dur: 3.0, delay: 1.0, xA: -8, color: "rgba(210,225,255,0.40)" },
  { size: 72, left: "45%", top: "48%", dur: 5.0, delay: 1.9, xA: 15, color: "rgba(93,131,255,0.18)" },
  { size: 24, left: "30%", top: "90%", dur: 3.3, delay: 0.8, xA: 20, color: "rgba(170,200,255,0.35)" },
  { size: 58, left: "60%", top: "88%", dur: 4.5, delay: 1.2, xA: -14, color: "rgba(93,131,255,0.22)" },
  { size: 40, left: "88%", top: "88%", dur: 3.9, delay: 0.5, xA: -18, color: "rgba(140,180,255,0.28)" },
];

const floatingRings = [
  { size: 300, left: "5%", top: "20%", dur: 8, delay: 0 },
  { size: 200, left: "70%", top: "60%", dur: 7, delay: 1.5 },
  { size: 150, left: "40%", top: "75%", dur: 6, delay: 0.8 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [count, setCount] = useState({ customers: 0, items: 0 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const p = step / steps;
      const ease = 1 - Math.pow(1 - p, 3);
      setCount({ customers: Math.round(10000 * ease), items: Math.round(100000 * ease) });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => {
        setTimeout(() => v.play().catch(console.warn), 1000);
      });
    };
    if (v.readyState >= 2) {
      tryPlay();
    } else {
      v.addEventListener("canplay", tryPlay, { once: true });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#030818]">

      {/* ── Video BG ── */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0 scale-110 origin-center">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play();
          }}
          className="h-full w-full object-cover"
          style={{ willChange: "transform" }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        <AnimatePresence>
          {!videoReady && (
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg,#030818 0%,#0a1535 40%,#0d1f5e 70%,#0a1535 100%)" }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Layered color overlays ── */}
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(160deg, rgba(3,8,24,0.88) 0%, rgba(10,21,53,0.75) 40%, rgba(15,30,90,0.65) 70%, rgba(3,8,24,0.92) 100%)" }} />
      {/* Colorful radial glow top-left */}
      <div className="absolute z-[2] rounded-full blur-[140px]" style={{ width: 700, height: 700, left: "-10%", top: "-15%", background: "radial-gradient(circle, rgba(93,131,255,0.45) 0%, rgba(60,80,200,0.25) 50%, transparent 70%)" }} />
      {/* Cyan accent top-right */}
      <div className="absolute z-[2] rounded-full blur-[120px]" style={{ width: 500, height: 500, right: "-5%", top: "5%", background: "radial-gradient(circle, rgba(56,189,248,0.30) 0%, rgba(93,131,255,0.15) 50%, transparent 70%)" }} />
      {/* Indigo bottom */}
      <div className="absolute z-[2] rounded-full blur-[100px]" style={{ width: 600, height: 400, left: "20%", bottom: "-5%", background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(93,131,255,0.15) 50%, transparent 70%)" }} />
      {/* Magenta accent */}
      <div className="absolute z-[2] rounded-full blur-[110px]" style={{ width: 350, height: 350, right: "25%", bottom: "10%", background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)" }} />
      {/* Top & bottom vignettes */}
      <div className="absolute inset-x-0 top-0 z-[3] h-44" style={{ background: "linear-gradient(to bottom, rgba(3,8,24,0.9), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 z-[3] h-56" style={{ background: "linear-gradient(to top, rgba(3,8,24,1), transparent)" }} />

      {/* ── Animated grid ── */}
      <div className="absolute inset-0 z-[3]" style={{
        backgroundImage: `linear-gradient(rgba(93,131,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(93,131,255,0.06) 1px, transparent 1px)`,
        backgroundSize: "72px 72px",
      }} />

      {/* ── Floating rings (outline only) ── */}
      <div className="pointer-events-none absolute inset-0 z-[4]">
        {floatingRings.map((r, i) => (
          <motion.div key={i}
            className="absolute rounded-full"
            style={{
              width: r.size, height: r.size, left: r.left, top: r.top,
              border: "1px solid rgba(93,131,255,0.18)",
              boxShadow: "0 0 40px rgba(93,131,255,0.08) inset",
            }}
            animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3], rotate: [0, 15, 0] }}
            transition={{ duration: r.dur, delay: r.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Bubbles ── */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        {bubbles.map((b, i) => (
          <motion.div key={i}
            className="absolute rounded-full"
            style={{
              width: b.size, height: b.size, left: b.left, top: b.top,
              background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.55), ${b.color} 45%, transparent 70%)`,
              border: "1px solid rgba(150,185,255,0.28)",
              boxShadow: `inset 0 0 ${b.size * 0.35}px rgba(180,210,255,0.18), 0 0 ${b.size * 0.5}px rgba(93,131,255,0.12)`,
              backdropFilter: "blur(2px)",
            }}
            animate={{
              y: [0, -30, -10, -36, -8, 0],
              x: [0, b.xA, b.xA * 0.3, b.xA * 0.85, b.xA * 0.5, 0],
              scale: [1, 1.15, 1.06, 1.13, 1.04, 1],
              opacity: [0.5, 0.95, 0.65, 0.88, 0.72, 0.5],
            }}
            transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          />
        ))}
      </div>

      {/* ── Floating particles ── */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        {[...Array(30)].map((_, i) => (
          <motion.div key={i}
            className="absolute rounded-full"
            style={{
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              background: i % 4 === 0 ? "#7ca3ff" : i % 4 === 1 ? "#38bdf8" : i % 4 === 2 ? "#a78bfa" : "#ffffff",
            }}
            animate={{ opacity: [0, 0.9, 0], scale: [0, 1.8, 0], y: [0, -(30 + (i % 4) * 15)] }}
            transition={{ duration: 2.5 + (i % 5) * 0.5, delay: (i % 7) * 0.7, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* ── Horizontal scan line ── */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 z-[6] h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(93,131,255,0.6) 30%, rgba(56,189,248,0.6) 50%, rgba(93,131,255,0.6) 70%, transparent)" }}
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />

      {/* ── CONTENT ── */}
      <motion.div style={{ y: contentY, opacity: fadeOut }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, rgba(93,131,255,0.18), rgba(56,189,248,0.12))",
            border: "1px solid rgba(93,131,255,0.35)",
            color: "#a8c0ff",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 30px rgba(93,131,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <motion.span animate={{ rotate: [0, 20, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}>
            <Sparkles className="h-4 w-4" style={{ color: "#5d83ff" }} />
          </motion.span>
          Pickup • Wash • Fold • Deliver — All at your door
          <motion.span
            className="ml-1 h-2 w-2 rounded-full"
            style={{ background: "#38bdf8" }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Headline */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-[0.9] tracking-tighter text-white"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
          >
            Your{" "}
            <span className="relative inline-block">
              <span style={{
                background: "linear-gradient(135deg, #7ca3ff 0%, #5d83ff 40%, #38bdf8 75%, #a78bfa 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Laundry,
              </span>
              {/* Glow behind */}
              <span className="absolute inset-0 blur-2xl opacity-40" style={{
                background: "linear-gradient(135deg, #5d83ff, #38bdf8)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Laundry,</span>
              {/* Underline draw */}
              <motion.span className="absolute -bottom-2 left-0 h-1 rounded-full"
                style={{ background: "linear-gradient(90deg, #5d83ff, #38bdf8, #a78bfa)" }}
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              />
            </span>
            <br />
            <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Our Spin{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Perfection
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: "rgba(180,200,255,0.65)" }}
          >
            We pick up dirty, return fresh. Professional wash, dry &amp; fold — delivered back
            to your door in under 24 hours. Zero hassle, pure freshness.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary with shimmer */}
          <motion.a href="#contact" whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-9 py-4 text-base font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #4a6fe0, #5d83ff 50%, #38bdf8)",
              boxShadow: "0 0 50px rgba(93,131,255,0.55), 0 0 100px rgba(93,131,255,0.20), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <motion.span className="absolute inset-0"
              style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)" }}
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }}
            />
            <Phone className="h-4 w-4" />
            Book Pickup Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.a>

          {/* Secondary */}
          <motion.a href="#services" whileHover={{ scale: 1.06, y: -4 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-semibold text-white transition-all"
            style={{
              border: "1px solid rgba(93,131,255,0.35)",
              background: "rgba(93,131,255,0.08)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 20px rgba(93,131,255,0.08)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(93,131,255,0.18)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(93,131,255,0.08)")}
          >
            View Services
          </motion.a>
        </motion.div>

        {/* ── Count-up stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { icon: CheckCircle, label: "Happy Customers", value: `${(count.customers / 1000).toFixed(1)}K+`, color: "#5d83ff" },
            { icon: Clock3, label: "Avg Turnaround", value: "1 Hr", color: "#38bdf8" },
            { icon: Star, label: "Avg Rating", value: "4.9★", color: "#facc15" },
            { icon: Shirt, label: "Items Cleaned", value: `${(count.items / 1000).toFixed(0)}K+`, color: "#a78bfa" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i}
                whileHover={{ y: -8, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-center"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(93,131,255,0.06))",
                  border: "1px solid rgba(93,131,255,0.18)",
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 0 30px rgba(93,131,255,0.05), inset 0 1px 0 rgba(255,255,255,0.05)`,
                }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${s.color}22` }}>
                  <Icon className="h-5 w-5" style={{ color: s.color }} />
                </div>
                <p className="text-2xl font-black text-white" style={{ textShadow: `0 0 20px ${s.color}66` }}>{s.value}</p>
                <p className="text-xs font-medium" style={{ color: "rgba(160,185,255,0.6)" }}>{s.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Left floating card ── */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="absolute left-4 top-[36%] hidden w-[220px] rounded-2xl p-5 xl:block"
          style={{
            background: "linear-gradient(145deg, rgba(93,131,255,0.14), rgba(56,189,248,0.08))",
            border: "1px solid rgba(93,131,255,0.25)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 50px rgba(93,131,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(93,131,255,0.25)" }}>
              <Clock3 className="h-5 w-5" style={{ color: "#7ca3ff" }} />
            </div>
            <p className="mt-4 text-2xl font-black text-white">1 Hour</p>
            <p className="mt-1 text-xs" style={{ color: "rgba(160,190,255,0.55)" }}>Express turnaround</p>
            <div className="mt-4 h-1.5 w-full rounded-full" style={{ background: "rgba(93,131,255,0.15)" }}>
              <motion.div className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #5d83ff, #38bdf8)" }}
                initial={{ width: "0%" }} animate={{ width: "85%" }}
                transition={{ duration: 1.8, delay: 1.4 }}
              />
            </div>
            <p className="mt-1.5 text-[10px]" style={{ color: "rgba(120,160,255,0.5)" }}>85% faster than average</p>
          </motion.div>
        </motion.div>

        {/* ── Right floating card ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="absolute right-4 top-[32%] hidden w-[220px] rounded-2xl p-5 xl:block"
          style={{
            background: "linear-gradient(145deg, rgba(167,139,250,0.14), rgba(93,131,255,0.10))",
            border: "1px solid rgba(167,139,250,0.25)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 50px rgba(167,139,250,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(167,139,250,0.22)" }}>
              <Shirt className="h-5 w-5" style={{ color: "#c4b5fd" }} />
            </div>
            <p className="mt-4 text-2xl font-black text-white">100K+</p>
            <p className="mt-1 text-xs" style={{ color: "rgba(200,185,255,0.55)" }}>Items cleaned perfectly</p>
            <div className="mt-4 flex gap-0.5">
              {[...Array(5)].map((_, si) => (
                <motion.div key={si} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + si * 0.1, type: "spring" }}>
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </motion.div>
              ))}
            </div>
            <p className="mt-1.5 text-[10px]" style={{ color: "rgba(180,165,255,0.5)" }}>4.9 from 200+ reviews</p>
          </motion.div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em]" style={{ color: "rgba(93,131,255,0.5)" }}>Scroll</p>
          <div className="flex h-10 w-5 items-start justify-center rounded-full pt-1.5"
            style={{ border: "1px solid rgba(93,131,255,0.3)" }}>
            <motion.div className="h-2 w-2 rounded-full"
              style={{ background: "linear-gradient(to bottom, #5d83ff, #38bdf8)" }}
              animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}