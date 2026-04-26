"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Phone, Truck, Sparkles, CheckCircle2, ArrowRight, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Schedule a Pickup",
    highlight: "Book It,",
    description: "Call or text us to schedule a free pickup at your door. We're available 7 days a week and work around your schedule.",
    color: "#3B82F6",
    glow: "rgba(59,130,246,0.6)",
    bg: "from-blue-500/20 to-blue-600/10",
    border: "rgba(59,130,246,0.4)",
    particle: "#3B82F6",
    illustration: (
      <div className="relative flex items-center justify-center w-full h-full">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 rounded-full bg-blue-500/20 flex items-center justify-center shadow-inner border border-blue-400/30"
        >
          <span className="text-6xl">📅</span>
        </motion.div>
        <motion.div
          animate={{ y: [-4, 4, -4], rotate: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <span className="text-xl">📞</span>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-blue-400/40"
        />
      </div>
    ),
  },
  {
    number: "02",
    icon: Truck,
    title: "We Pick Up at Your Door",
    highlight: "We Come",
    description: "Our team arrives at your home or office to collect your laundry bag. No need to go anywhere — we handle the pickup.",
    color: "#6366F1",
    glow: "rgba(99,102,241,0.6)",
    bg: "from-indigo-500/20 to-indigo-600/10",
    border: "rgba(99,102,241,0.4)",
    particle: "#6366F1",
    illustration: (
      <div className="relative flex items-center justify-center w-full h-full">
        <motion.div
          animate={{ x: [-8, 8, -8] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 rounded-full bg-indigo-500/20 flex items-center justify-center shadow-inner border border-indigo-400/30"
        >
          <span className="text-6xl">🚐</span>
        </motion.div>
        <motion.div
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <span className="text-xl">🏠</span>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-indigo-400/40"
        />
      </div>
    ),
  },
  {
    number: "03",
    icon: Sparkles,
    title: "We Wash, Dry & Fold",
    highlight: "We Clean",
    description: "Your clothes are professionally washed, dried, and neatly folded at our facility using premium detergents and clean machines.",
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.6)",
    bg: "from-violet-500/20 to-violet-600/10",
    border: "rgba(139,92,246,0.4)",
    particle: "#8B5CF6",
    illustration: (
      <div className="relative flex items-center justify-center w-full h-full">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 rounded-full border border-dashed border-violet-400/30"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 rounded-full bg-violet-500/20 flex items-center justify-center shadow-inner border border-violet-400/30"
        >
          <span className="text-6xl">🫧</span>
        </motion.div>
        <motion.div
          animate={{ y: [4, -4, 4], rotate: [-10, 10, -10] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <span className="text-xl">✨</span>
        </motion.div>
      </div>
    ),
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Delivered Back to You",
    highlight: "Drop Off",
    description: "Fresh, clean, and folded laundry is delivered right back to your door — ready to wear, on your schedule.",
    color: "#2563EB",
    glow: "rgba(37,99,235,0.6)",
    bg: "from-sky-500/20 to-sky-600/10",
    border: "rgba(37,99,235,0.4)",
    particle: "#2563EB",
    illustration: (
      <div className="relative flex items-center justify-center w-full h-full">
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 rounded-full bg-sky-500/20 flex items-center justify-center shadow-inner border border-sky-400/30"
        >
          <span className="text-6xl">👕</span>
        </motion.div>
        <motion.div
          animate={{ x: [-4, 4, -4], y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
        >
          <span className="text-xl">📦</span>
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-sky-400/40"
        />
      </div>
    ),
  },
];

// Floating particle component
function Particle({ color }: { color: string }) {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 3;
  const randomDur = 3 + Math.random() * 3;
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: 4, height: 4, background: color, left: `${randomX}%`, bottom: 0, boxShadow: `0 0 6px ${color}` }}
      animate={{ y: [0, -200], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
      transition={{ duration: randomDur, delay: randomDelay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const leftX  = useTransform(smoothScroll, [0, 0.3], [-80, 0]);
  const rightX = useTransform(smoothScroll, [0, 0.3], [80, 0]);
  const opacity = useTransform(smoothScroll, [0, 0.2], [0, 1]);
  const bgScale = useTransform(smoothScroll, [0, 1], [1.1, 1.0]);

  const step = steps[active];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => setActive((p) => (p + 1) % steps.length), 3000);
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* ── Animated background ── */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F4FF] via-[#E8EFFE] to-[#DDE8FF]" />
      </motion.div>

      {/* ── Moving mesh gradient orbs ── */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(93,131,255,0.20) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${step.glow.replace("0.6", "0.12")} 0%, transparent 70%)`, filter: "blur(50px)", transition: "background 0.8s ease" }}
      />

      {/* ── Grid lines ── */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(93,131,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(93,131,255,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Floating particles tied to active step ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <Particle key={`${active}-${i}`} color={step.particle} />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading — drops in from top ── */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4 border border-blue-200 rounded-full px-5 py-2 bg-white/80 backdrop-blur-sm shadow-sm"
          >
            <motion.span animate={{ rotate: [0, 20, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
              <Sparkles className="h-4 w-4" />
            </motion.span>
            Simple 4-Step Process
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            How It{" "}
            <span className="relative inline-block">
              <span className="text-blue-600">Works</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ══════════════════════════
               LEFT — slides from left
          ══════════════════════════ */}
          <motion.div style={{ x: leftX, opacity }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-wide uppercase mb-5 border border-blue-200 rounded-full px-4 py-1.5 bg-blue-50/80"
            >
              [ Get Your Clothes Cleaned & Fresh ]
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-500 text-base leading-relaxed mb-5 font-light max-w-md"
            >
              Bubbles delivers a premium door-to-door laundry service — we pick up,
              professionally clean, and return your clothes fresh and folded.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-500 text-base leading-relaxed mb-8 font-light max-w-md"
            >
              Trusted by thousands across the city — zero hassle, pure freshness, every single time.
            </motion.p>

            {/* Trust badges — stagger in */}
            <motion.div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: "⭐", text: "4.9 Rating" },
                { icon: "🚀", text: "1-Hour Express" },
                { icon: "🛡️", text: "100% Insured" },
              ].map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.12, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.08, y: -3, boxShadow: "0 8px 20px rgba(59,130,246,0.20)" }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-gray-700 text-sm font-medium shadow-sm cursor-default"
                >
                  <span>{b.icon}</span> {b.text}
                </motion.div>
              ))}
            </motion.div>

            {/* Step mini list */}
            <motion.div className="space-y-3 mb-8">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.button key={i} onClick={() => setActive(i)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    whileHover={{ x: 6 }}
                    className="w-full flex items-center gap-3 text-left"
                  >
                    <motion.div
                      animate={active === i ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.4 }}
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        background: active === i ? s.color : "transparent",
                        border: `2px solid ${active === i ? s.color : "#e2e8f0"}`,
                        boxShadow: active === i ? `0 0 16px ${s.glow}` : "none",
                      }}
                    >
                      <Icon className="h-4 w-4" style={{ color: active === i ? "#fff" : "#94a3b8" }} />
                    </motion.div>
                    <span className="text-sm font-semibold transition-colors duration-300"
                      style={{ color: active === i ? s.color : "#64748b" }}>
                      {s.title}
                    </span>
                    {active === i && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full"
                        style={{ background: s.color }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a href="tel:+14057488990"
                whileHover={{ scale: 1.06, y: -3, boxShadow: "0 15px 35px rgba(59,130,246,0.40)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden px-7 py-3.5 rounded-full bg-blue-600 text-white font-semibold text-sm"
                style={{ boxShadow: "0 8px 25px rgba(59,130,246,0.35)" }}
              >
                <motion.span className="absolute inset-0"
                  style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)" }}
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
                Book Pickup Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a href="#services"
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition text-sm"
              >
                Our Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ══════════════════════════
               RIGHT — slides from right
          ══════════════════════════ */}
          <motion.div style={{ x: rightX, opacity }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow halo behind card */}
            <motion.div
              className="absolute -inset-4 rounded-[2.5rem] pointer-events-none"
              style={{ background: `radial-gradient(circle at 50% 50%, ${step.glow.replace("0.6","0.15")}, transparent 70%)`, filter: "blur(30px)" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              key={`halo-${active}`}
            />

            {/* ── Main card ── */}
            <motion.div
              className="relative rounded-3xl overflow-hidden p-8 min-h-[360px]"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(24px)",
                border: `1px solid ${step.border}`,
                boxShadow: `0 30px 80px rgba(93,131,255,0.12), 0 0 0 1px rgba(255,255,255,0.6) inset`,
                transition: "border-color 0.5s ease",
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {/* Ghost number */}
              <AnimatePresence mode="wait">
                <motion.div key={`num-${active}`}
                  initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.3, rotate: 10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-3 right-5 text-[9rem] font-black leading-none select-none pointer-events-none"
                  style={{ color: `${step.color}10` }}
                >
                  {step.number}
                </motion.div>
              </AnimatePresence>

              {/* Corner accent dots */}
              <div className="absolute top-4 left-4 flex gap-1.5">
                {[step.color, `${step.color}99`, `${step.color}55`].map((c, i) => (
                  <motion.div key={i}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: c }}
                  />
                ))}
              </div>

              {/* Illustration + text row */}
              <div className="flex gap-8 items-start relative z-10 mt-6">
                <AnimatePresence mode="wait">
                  <motion.div key={`img-${active}`}
                    initial={{ opacity: 0, x: -40, rotate: -8, scale: 0.85 }}
                    animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 40, rotate: 8, scale: 0.85 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex-shrink-0 w-44 h-44 rounded-2xl bg-gradient-to-br ${step.bg} flex items-center justify-center relative`}
                    style={{ border: `1px solid ${step.border}` }}
                  >
                    {step.illustration}

                    {/* Shine sweep */}
                    <motion.div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <motion.div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)" }}
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2.5 }}
                      />
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex-1 pt-2">
                  <AnimatePresence mode="wait">
                    <motion.div key={`text-${active}`}
                      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
                      transition={{ duration: 0.45 }}
                    >
                      {/* Step label with animated dot */}
                      <div className="flex items-center gap-2 mb-3">
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full"
                          style={{ background: step.color, boxShadow: `0 0 8px ${step.glow}` }}
                        />
                        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: step.color }}>
                          Step {step.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                        <motion.span
                          style={{ color: step.color }}
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {step.highlight}{" "}
                        </motion.span>
                        {step.title.replace(step.highlight.replace(",", ""), "").trim()}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>

                      {/* Mini rating */}
                      <div className="mt-4 flex items-center gap-1">
                        {[...Array(5)].map((_, si) => (
                          <motion.div key={si}
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: si * 0.08, type: "spring" }}>
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                          </motion.div>
                        ))}
                        <span className="text-xs text-gray-400 ml-1">4.9/5</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8 h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div key={`bar-${active}`}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${step.color}, ${step.color}88)` }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </div>
            </motion.div>

            {/* ── Step number nav ── */}
            <div className="flex items-center justify-center gap-3 mt-7">
              {steps.map((s, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  {i > 0 && (
                    <div className="flex gap-0.5">
                      {[...Array(3)].map((_, d) => (
                        <motion.div key={d}
                          animate={{ opacity: i <= active ? 1 : 0.3 }}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: i <= active ? s.color : "#cbd5e1", transition: "background 0.4s" }}
                        />
                      ))}
                    </div>
                  )}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: active === i ? 1.2 : 1,
                      boxShadow: active === i ? `0 0 20px ${s.glow}` : "none",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-11 h-11 rounded-full border-2 flex items-center justify-center text-sm font-bold cursor-pointer transition-colors duration-300"
                    style={{
                      borderColor: active === i ? s.color : "#e2e8f0",
                      background: active === i ? s.color : "#ffffff",
                      color: active === i ? "#ffffff" : "#94a3b8",
                    }}
                  >
                    {i + 1}
                  </motion.div>
                </button>
              ))}
            </div>

            {/* Auto-play indicator */}
            {!isHovered && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-xs text-gray-400 mt-3"
              >
                <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  ● Auto-advancing
                </motion.span>
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}