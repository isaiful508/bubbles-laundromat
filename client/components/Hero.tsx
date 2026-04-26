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
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock3, Shirt, Sparkles, Star, CheckCircle, Phone, Zap, Shield, Truck } from "lucide-react";

const bubbles = [
  { size: 130, left: "1%",  top: "50%", dur: 5.0, delay: 0.0, xA: 24,  color: "rgba(93,131,255,0.50)"  },
  { size: 70,  left: "8%",  top: "55%", dur: 4.2, delay: 0.6, xA: -18, color: "rgba(120,180,255,0.45)" },
  { size: 45,  left: "16%", top: "78%", dur: 3.8, delay: 1.1, xA: 14,  color: "rgba(160,210,255,0.40)" },
  { size: 90,  left: "22%", top: "8%",  dur: 5.6, delay: 0.3, xA: 20,  color: "rgba(93,131,255,0.42)"  },
  { size: 28,  left: "32%", top: "68%", dur: 3.4, delay: 1.4, xA: -12, color: "rgba(200,220,255,0.50)" },
  { size: 55,  left: "40%", top: "22%", dur: 4.8, delay: 0.7, xA: -22, color: "rgba(100,160,255,0.45)" },
  { size: 20,  left: "50%", top: "82%", dur: 3.2, delay: 0.4, xA: 10,  color: "rgba(180,210,255,0.55)" },
  { size: 105, left: "56%", top: "5%",  dur: 5.4, delay: 0.8, xA: -20, color: "rgba(80,120,255,0.38)"  },
  { size: 38,  left: "64%", top: "58%", dur: 4.0, delay: 1.3, xA: 16,  color: "rgba(150,190,255,0.45)" },
  { size: 62,  left: "70%", top: "72%", dur: 4.6, delay: 0.5, xA: -16, color: "rgba(93,131,255,0.40)"  },
  { size: 85,  left: "78%", top: "15%", dur: 5.2, delay: 0.2, xA: 22,  color: "rgba(110,150,255,0.42)" },
  { size: 32,  left: "85%", top: "45%", dur: 3.6, delay: 0.9, xA: -10, color: "rgba(190,215,255,0.50)" },
  { size: 48,  left: "91%", top: "68%", dur: 4.3, delay: 1.6, xA: 12,  color: "rgba(130,170,255,0.45)" },
  { size: 18,  left: "5%",  top: "38%", dur: 3.0, delay: 1.0, xA: -8,  color: "rgba(210,225,255,0.55)" },
  { size: 72,  left: "45%", top: "48%", dur: 5.0, delay: 1.9, xA: 15,  color: "rgba(93,131,255,0.35)"  },
  { size: 24,  left: "30%", top: "90%", dur: 3.3, delay: 0.8, xA: 20,  color: "rgba(170,200,255,0.50)" },
  { size: 58,  left: "60%", top: "88%", dur: 4.5, delay: 1.2, xA: -14, color: "rgba(93,131,255,0.38)"  },
  { size: 40,  left: "88%", top: "88%", dur: 3.9, delay: 0.5, xA: -18, color: "rgba(140,180,255,0.45)" },
];

const floatingRings = [
  { size: 300, left: "5%",  top: "20%", dur: 8, delay: 0   },
  { size: 200, left: "70%", top: "60%", dur: 7, delay: 1.5 },
  { size: 150, left: "40%", top: "75%", dur: 6, delay: 0.8 },
];

const features = [
  { icon: Zap,    text: "Express 1-Hour" },
  { icon: Shield, text: "Safe & Insured"  },
  { icon: Truck,  text: "Free Pickup"     },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [count, setCount]           = useState({ customers: 0, items: 0 });
  const [mousePos, setMousePos]     = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const contentY  = useTransform(smoothScroll, [0, 1], ["0%", "20%"]);
  const fadeOut   = useTransform(smoothScroll, [0, 0.6], [1, 0]);
  const scaleDown = useTransform(smoothScroll, [0, 0.6], [1, 0.92]);
  const blurUp    = useTransform(smoothScroll, [0, 0.5], [0, 8]);

  // Parallax layers at different speeds
  const bubblesY  = useTransform(smoothScroll, [0, 1], ["0%", "35%"]);
  const ringsY    = useTransform(smoothScroll, [0, 1], ["0%", "20%"]);
  const overlayY  = useTransform(smoothScroll, [0, 1], ["0%", "10%"]);

  // Mouse parallax
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth  - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Count-up
  useEffect(() => {
    const steps = 60;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const ease = 1 - Math.pow(1 - step / steps, 3);
      setCount({ customers: Math.round(10000 * ease), items: Math.round(100000 * ease) });
      if (step >= steps) clearInterval(timer);
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, []);

  // Video play
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const play = () => v.play().catch(() => {});
    if (v.readyState >= 2) play();
    else v.addEventListener("canplay", play, { once: true });
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#030818]">

      {/* ── VIDEO — no motion wrapper, static position ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline preload="auto"
          onCanPlay={() => setVideoReady(true)}
          className="h-full w-full object-cover"
          style={{ display: "block" }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* ── LIGHTER overlays — was 0.88 opacity, now 0.45 ── */}
        {/* Base dark tint — much lighter */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(3,8,24,0.45) 0%, rgba(10,21,53,0.38) 40%, rgba(15,30,90,0.30) 70%, rgba(3,8,24,0.50) 100%)" }}
        />

        {/* Gradient fallback while loading */}
        <AnimatePresence>
          {!videoReady && (
            <motion.div exit={{ opacity: 0 }} transition={{ duration: 1.5 }}
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg,#030818 0%,#0a1535 40%,#0d1f5e 70%,#0a1535 100%)" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── Color glows — brighter & more colorful ── */}
      <motion.div style={{ y: overlayY }} className="absolute inset-0 z-[1] pointer-events-none">
        {/* Blue glow top-left */}
        <div className="absolute rounded-full"
          style={{ width: 800, height: 800, left: "-15%", top: "-20%", background: "radial-gradient(circle, rgba(93,131,255,0.55) 0%, rgba(60,80,200,0.30) 50%, transparent 70%)", filter: "blur(120px)" }} />
        {/* Cyan top-right */}
        <div className="absolute rounded-full"
          style={{ width: 550, height: 550, right: "-8%", top: "0%", background: "radial-gradient(circle, rgba(56,189,248,0.50) 0%, rgba(93,131,255,0.25) 50%, transparent 70%)", filter: "blur(100px)" }} />
        {/* Indigo bottom-left */}
        <div className="absolute rounded-full"
          style={{ width: 650, height: 450, left: "15%", bottom: "-10%", background: "radial-gradient(circle, rgba(99,102,241,0.50) 0%, rgba(93,131,255,0.25) 50%, transparent 70%)", filter: "blur(90px)" }} />
        {/* Magenta bottom-right */}
        <div className="absolute rounded-full"
          style={{ width: 400, height: 400, right: "20%", bottom: "5%", background: "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(168,85,247,0.30) 50%, transparent 70%)", filter: "blur(100px)" }} />
        {/* Green center accent */}
        <div className="absolute rounded-full"
          style={{ width: 300, height: 300, left: "42%", top: "35%", background: "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </motion.div>

      {/* ── Light top/bottom vignettes only (not heavy dark) ── */}
      <div className="absolute inset-x-0 top-0 z-[2] h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(3,8,24,0.75), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(3,8,24,0.90), transparent)" }} />

      {/* ── Grid ── */}
      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(93,131,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(93,131,255,0.08) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* ── Floating rings — parallax layer ── */}
      <motion.div style={{ y: ringsY }} className="pointer-events-none absolute inset-0 z-[3]">
        {floatingRings.map((r, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{
              width: r.size, height: r.size, left: r.left, top: r.top,
              border: "1.5px solid rgba(93,131,255,0.30)",
              boxShadow: "0 0 60px rgba(93,131,255,0.12) inset, 0 0 30px rgba(56,189,248,0.08)",
            }}
            animate={{ scale: [1, 1.10, 1], opacity: [0.4, 0.85, 0.4], rotate: [0, 20, 0] }}
            transition={{ duration: r.dur, delay: r.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      {/* ── Bubbles — deeper parallax ── */}
      <motion.div style={{ y: bubblesY }} className="pointer-events-none absolute inset-0 z-[4]">
        {bubbles.map((b, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{
              width: b.size, height: b.size, left: b.left, top: b.top,
              background: `radial-gradient(circle at 32% 28%, rgba(255,255,255,0.70), ${b.color} 45%, transparent 70%)`,
              border: "1px solid rgba(180,210,255,0.40)",
              boxShadow: `inset 0 0 ${b.size * 0.35}px rgba(200,225,255,0.25), 0 0 ${b.size * 0.5}px rgba(93,131,255,0.18)`,
              backdropFilter: "blur(2px)",
            }}
            animate={{
              y: [200, -200],
              x: [0, b.xA],
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
          />
        ))}
      </motion.div>

      {/* ── Particles — 40 colorful dots ── */}
      <div className="pointer-events-none absolute inset-0 z-[4]">
        {[...Array(40)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full"
            style={{
              width:  i % 3 === 0 ? 4 : i % 3 === 1 ? 3 : 2,
              height: i % 3 === 0 ? 4 : i % 3 === 1 ? 3 : 2,
              left: `${(i * 37) % 100}%`,
              top:  `${(i * 53) % 100}%`,
              background: ["#7ca3ff","#38bdf8","#a78bfa","#f472b6","#34d399","#fbbf24"][i % 6],
              boxShadow: `0 0 6px ${["#7ca3ff","#38bdf8","#a78bfa","#f472b6","#34d399","#fbbf24"][i % 6]}`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0, 2, 0], y: [0, -(40 + (i % 5) * 20)] }}
            transition={{ duration: 2 + (i % 5) * 0.6, delay: (i % 9) * 0.5, repeat: Infinity, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* ── Scan line ── */}
      <motion.div className="pointer-events-none absolute inset-x-0 z-[5] h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(93,131,255,0.8) 25%, rgba(56,189,248,0.9) 50%, rgba(168,85,247,0.8) 75%, transparent)" }}
        animate={{ top: ["−2px", "100%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
      />

      {/* ── Second diagonal scan ── */}
      <motion.div className="pointer-events-none absolute z-[5] h-px w-[200%]"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5) 50%, transparent)",
          top: "30%", left: "-50%",
          transform: "rotate(-15deg)",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />

      {/* ── Mouse-parallax layer ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[5]"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
      >
        <div className="absolute rounded-full"
          style={{ width: 600, height: 600, left: "30%", top: "10%", background: "radial-gradient(circle, rgba(93,131,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </motion.div>

      {/* ══════════════════════════════════
           CONTENT — scroll parallax + scale
      ══════════════════════════════════ */}
      <motion.div
        style={{ y: contentY, opacity: fadeOut, scale: scaleDown }}
        className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
      >
        {/* ── Feature pills row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap justify-center gap-3"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold"
                style={{
                  background: "rgba(93,131,255,0.15)",
                  border: "1px solid rgba(93,131,255,0.30)",
                  color: "#a8c0ff",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Icon className="h-3 w-3" style={{ color: ["#38bdf8","#34d399","#f472b6"][i] }} />
                {f.text}
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, rgba(93,131,255,0.22), rgba(56,189,248,0.15))",
            border: "1px solid rgba(93,131,255,0.40)",
            color: "#c4d8ff",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 40px rgba(93,131,255,0.20), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <motion.span animate={{ rotate: [0, 20, -15, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}>
            <Sparkles className="h-4 w-4" style={{ color: "#5d83ff" }} />
          </motion.span>
          Pickup • Wash • Fold • Deliver — All at your door
          <motion.span className="ml-1 h-2 w-2 rounded-full" style={{ background: "#38bdf8" }}
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
          />
        </motion.div>

        {/* ── Headline ── */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-[0.88] tracking-tighter text-white"
            style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
          >
            Your{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 blur-3xl opacity-60"
                style={{ background: "linear-gradient(135deg,#5d83ff,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Laundry,
              </span>
              <span style={{ background: "linear-gradient(135deg, #93b4ff 0%, #5d83ff 35%, #38bdf8 65%, #c084fc 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Laundry,
              </span>
              <motion.span className="absolute -bottom-3 left-0 h-[3px] rounded-full w-full"
                style={{ background: "linear-gradient(90deg, #5d83ff, #38bdf8, #c084fc)" }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.0, delay: 1.2, ease: "easeOut" }}
              />
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.45 }}
            >
              Our Spin{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.6 }}
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Perfection
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mx-auto mt-9 max-w-2xl text-base leading-8 sm:text-lg"
            style={{ color: "rgba(200,218,255,0.80)" }}
          >
            We pick up dirty, return fresh. Professional wash, dry &amp; fold —
            delivered back to your door in under 24 hours. Zero hassle, pure freshness.
          </motion.p>
        </div>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a href="#contact" whileHover={{ scale: 1.07, y: -4 }} whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-9 py-4 text-base font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #3d5bd9, #5d83ff 50%, #38bdf8)",
              boxShadow: "0 0 50px rgba(93,131,255,0.65), 0 0 120px rgba(93,131,255,0.25), inset 0 1px 0 rgba(255,255,255,0.25)",
            }}
          >
            <motion.span className="absolute inset-0"
              style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.30) 50%, transparent 65%)" }}
              animate={{ x: ["−100%", "200%"] }}
              transition={{ duration: 2.0, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
            />
            <Phone className="h-4 w-4" />
            Book Pickup Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </motion.a>

          <motion.a href="#services" whileHover={{ scale: 1.07, y: -4 }} whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-base font-semibold text-white"
            style={{
              border: "1px solid rgba(93,131,255,0.40)",
              background: "rgba(93,131,255,0.12)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 25px rgba(93,131,255,0.10)",
              transition: "background 0.3s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(93,131,255,0.24)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(93,131,255,0.12)")}
          >
            View Services
          </motion.a>
        </motion.div>

        {/* ── Left card ── */}
        <motion.div
          initial={{ opacity: 0, x: -70, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.0, delay: 1.2 }}
          className="absolute left-[-110px] top-[34%] hidden w-[230px] rounded-2xl p-5 xl:block"
          style={{
            background: "linear-gradient(145deg, rgba(93,131,255,0.20), rgba(56,189,248,0.12))",
            border: "1px solid rgba(93,131,255,0.32)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 25px 60px rgba(93,131,255,0.20), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(93,131,255,0.30)", boxShadow: "0 0 20px rgba(93,131,255,0.4)" }}>
              <Clock3 className="h-5 w-5" style={{ color: "#7ca3ff" }} />
            </div>
            <p className="mt-4 text-2xl font-black text-white">1 Hour</p>
            <p className="mt-1 text-xs" style={{ color: "rgba(180,210,255,0.70)" }}>Express turnaround</p>
            <div className="mt-4 h-1.5 w-full rounded-full overflow-hidden" style={{ background: "rgba(93,131,255,0.18)" }}>
              <motion.div className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #5d83ff, #38bdf8)" }}
                initial={{ width: "0%" }} animate={{ width: "85%" }}
                transition={{ duration: 1.8, delay: 1.4 }}
              />
            </div>
            <p className="mt-1.5 text-[10px]" style={{ color: "rgba(130,170,255,0.60)" }}>85% faster than average</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.0, delay: 1.3 }}
          className="absolute right-[-120px] top-[30%] hidden w-[230px] rounded-2xl p-5 xl:block"
          style={{
            background: "linear-gradient(145deg, rgba(192,132,252,0.20), rgba(93,131,255,0.12))",
            border: "1px solid rgba(192,132,252,0.32)",
            backdropFilter: "blur(24px)",
            boxShadow: "0 25px 60px rgba(192,132,252,0.20), inset 0 1px 0 rgba(255,255,255,0.12)",
          }}
        >
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "rgba(192,132,252,0.28)", boxShadow: "0 0 20px rgba(192,132,252,0.40)" }}>
              <Shirt className="h-5 w-5" style={{ color: "#e0aaff" }} />
            </div>
            <p className="mt-4 text-2xl font-black text-white">100K+</p>
            <p className="mt-1 text-xs" style={{ color: "rgba(220,200,255,0.70)" }}>Items cleaned perfectly</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.p className="text-[10px] font-bold uppercase tracking-[0.3em]"
            style={{ color: "rgba(93,131,255,0.65)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >Scroll</motion.p>
          <div className="flex h-11 w-5 items-start justify-center rounded-full pt-1.5"
            style={{ border: "1.5px solid rgba(93,131,255,0.40)", boxShadow: "0 0 15px rgba(93,131,255,0.15)" }}>
            <motion.div className="h-2.5 w-2.5 rounded-full"
              style={{ background: "linear-gradient(to bottom, #5d83ff, #38bdf8)", boxShadow: "0 0 8px #5d83ff" }}
              animate={{ y: [0, 18, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}