"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Heart, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Regular Customer",
    text: "I've been coming to Bubbles for 2 years and the machines are always clean and working. The staff is super friendly and always ready to help!",
    rating: 5,
    initials: "MG",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.5)",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    emoji: "😍",
    tag: "2-Year Member",
  },
  {
    name: "James Whitfield",
    role: "Wash & Fold Customer",
    text: "The wash and fold service is a total game changer. Everything comes back perfectly folded, smelling amazing. Never going back!",
    rating: 5,
    initials: "JW",
    color: "#0891b2",
    glow: "rgba(8,145,178,0.5)",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
    emoji: "🙌",
    tag: "Wash & Fold Fan",
  },
  {
    name: "Sarah Thompson",
    role: "Business Owner",
    text: "We use Bubbles weekly for our business. Reliable, affordable, and they always deliver on time. Highly recommend for any business!",
    rating: 5,
    initials: "ST",
    color: "#059669",
    glow: "rgba(5,150,105,0.5)",
    gradient: "linear-gradient(135deg, #059669, #10b981)",
    emoji: "💼",
    tag: "Business Partner",
  },
  {
    name: "David Nakamura",
    role: "Student",
    text: "Card payment + late hours = perfect for students. Affordable prices and always clean machines. This place saved my semester!",
    rating: 5,
    initials: "DN",
    color: "#d97706",
    glow: "rgba(217,119,6,0.5)",
    gradient: "linear-gradient(135deg, #d97706, #f59e0b)",
    emoji: "🎓",
    tag: "Student Favorite",
  },
  {
    name: "Lisa Bradford",
    role: "Working Mom",
    text: "Huge machines save me hours every single week. The staff is incredibly kind and helpful. Best laundromat in the city by far!",
    rating: 5,
    initials: "LB",
    color: "#e11d48",
    glow: "rgba(225,29,72,0.5)",
    gradient: "linear-gradient(135deg, #e11d48, #f43f5e)",
    emoji: "❤️",
    tag: "Weekly Regular",
  },
];

// Floating reaction that flies up on card hover
function FloatingReaction({ icon, delay, color }: { icon: string; delay: number; color: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none select-none z-50 text-lg"
      style={{ left: `${20 + Math.random() * 60}%`, bottom: "20%" }}
      initial={{ y: 0, opacity: 0, scale: 0 }}
      animate={{ y: -120, opacity: [0, 1, 1, 0], scale: [0, 1.3, 1, 0.5] }}
      transition={{ duration: 1.8, delay, ease: "easeOut" }}
    >
      {icon}
    </motion.div>
  );
}

// Sparkle dot
function Sparkle({ x, y, color, delay }: { x: string; y: string; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
      style={{ left: x, top: y, background: color, boxShadow: `0 0 6px ${color}` }}
      animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: Math.random() * 3 }}
    />
  );
}

export default function Testimonials() {
  const [active, setActive]         = useState(0);
  const [prev, setPrev]             = useState<number | null>(null);
  const [direction, setDirection]   = useState(1);
  const [hovered, setHovered]       = useState(false);
  const [burstKey, setBurstKey]     = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: false, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smooth  = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const bgScale = useTransform(smooth, [0, 1], [1.08, 1.0]);
  const titleY  = useTransform(smooth, [0, 0.4], [-50, 0]);
  const titleOp = useTransform(smooth, [0, 0.3], [0, 1]);

  const t = testimonials[active];

  const goTo = (idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setPrev(active);
    setActive(idx);
    setBurstKey(k => k + 1);
  };

  const goNext = () => goTo((active + 1) % testimonials.length);
  const goPrev = () => goTo((active - 1 + testimonials.length) % testimonials.length);

  // Auto-advance
  useEffect(() => {
    if (hovered) return;
    const t = setInterval(goNext, 4500);
    return () => clearInterval(t);
  }, [active, hovered]);

  const slideVariants = {
    enter:  (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.85, rotateY: dir > 0 ? 25 : -25, filter: "blur(8px)" }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" },
    exit:   (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.85, rotateY: dir > 0 ? -25 : 25, filter: "blur(8px)" }),
  };

  return (
    <section ref={sectionRef} className="py-28 lg:py-36 relative overflow-hidden">

      {/* ── Animated BG ── */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7FF] via-[#EBF0FF] to-[#E2ECFF]" />
      </motion.div>

      {/* Moving orbs */}
      <motion.div animate={{ x: [0, 60, 0], y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)", filter: "blur(70px)" }}
      />
      <motion.div animate={{ x: [0, -50, 0], y: [0, 60, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${t.glow.replace("0.5","0.18")} 0%, transparent 65%)`, filter: "blur(60px)", transition: "background 0.8s ease" }}
      />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)", backgroundSize: "64px 64px" }}
      />

      {/* Sparkle dots scattered */}
      {[
        { x: "8%",  y: "20%", c: "#6366f1", d: 0.0 }, { x: "92%", y: "15%", c: "#06b6d4", d: 0.5 },
        { x: "5%",  y: "70%", c: "#f59e0b", d: 1.0 }, { x: "95%", y: "75%", c: "#e11d48", d: 1.5 },
        { x: "50%", y: "5%",  c: "#8b5cf6", d: 0.8 }, { x: "20%", y: "90%", c: "#059669", d: 1.2 },
        { x: "78%", y: "88%", c: "#6366f1", d: 0.3 }, { x: "35%", y: "8%",  c: "#06b6d4", d: 0.9 },
      ].map((s, i) => <Sparkle key={i} x={s.x} y={s.y} color={s.c} delay={s.d} />)}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading ── */}
        <motion.div style={{ y: titleY, opacity: titleOp }} className="text-center mb-20">
          <motion.div
            animate={isInView ? { scale: [0.85, 1], opacity: [0, 1] } : {}}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wide mb-5 border"
            style={{ background: "rgba(99,102,241,0.08)", borderColor: "rgba(99,102,241,0.25)", color: "#6366f1" }}
          >
            <motion.span animate={{ rotate: [0, 20, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
              <Sparkles className="h-4 w-4" />
            </motion.span>
            What Our Customers Say
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-gray-900 mb-5 leading-tight"
          >
            Loved by the{" "}
            <span className="relative inline-block">
              <span style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Community
              </span>
              <motion.span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4, #8b5cf6)" }}
                initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          {/* Stars + rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i}
                  initial={{ scale: 0, rotate: -30 }} animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 300 }}
                >
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                </motion.div>
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-1 font-medium">4.9 avg · 200+ reviews</span>
          </motion.div>
        </motion.div>

        {/* ── Main Feature Card + Side Cards ── */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">

          {/* ── Left mini cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-4 w-64 flex-shrink-0"
          >
            {testimonials.filter((_, i) => i !== active).slice(0, 2).map((card, i) => (
              <motion.div key={card.name} whileHover={{ x: 8, scale: 1.03 }}
                onClick={() => goTo(testimonials.indexOf(card))}
                className="p-4 rounded-2xl cursor-pointer border relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(99,102,241,0.15)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${card.color}08, ${card.color}14)` }}
                />
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: card.gradient }}>
                    {card.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{card.name}</p>
                    <p className="text-[10px] text-gray-400">{card.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">"{card.text}"</p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── CENTER: Main featured card ── */}
          <div className="flex-1 relative" style={{ perspective: 1200 }}>

            {/* Glow halo behind card */}
            <motion.div className="absolute -inset-6 rounded-[3rem] pointer-events-none"
              style={{ background: `radial-gradient(circle, ${t.glow.replace("0.5","0.22")}, transparent 70%)`, filter: "blur(40px)" }}
              animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.02, 0.95] }}
              transition={{ duration: 3, repeat: Infinity }}
              key={`halo-${active}`}
            />

            {/* Floating reactions burst on change */}
            <AnimatePresence>
              {[t.emoji, "⭐", "💙", "👏", "✨"].map((icon, i) => (
                <FloatingReaction key={`${burstKey}-${i}`} icon={icon} delay={i * 0.12} color={t.color} />
              ))}
            </AnimatePresence>

            {/* Card */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                whileHover={{ scale: 1.02, y: -8 }}
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(24px)",
                  border: `1.5px solid ${t.border ?? t.color}44`,
                  boxShadow: `0 30px 80px ${t.glow.replace("0.5","0.20")}, 0 0 0 1px rgba(255,255,255,0.7) inset`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Gradient top bar */}
                <motion.div className="h-1.5 w-full" style={{ background: t.gradient }}
                  animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Shimmer on hover */}
                <AnimatePresence>
                  {hovered && (
                    <motion.div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-3xl"
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    >
                      <motion.div className="absolute inset-0"
                        style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%)" }}
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 1.0, repeat: Infinity, repeatDelay: 0.6 }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-8 lg:p-10">
                  {/* Top row: quote icon + tag */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${t.color}15`, border: `1px solid ${t.color}30` }}
                    >
                      <Quote className="w-7 h-7" style={{ color: t.color }} />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                      className="px-4 py-1.5 rounded-full text-xs font-bold"
                      style={{ background: `${t.color}15`, color: t.color, border: `1px solid ${t.color}30` }}
                    >
                      {t.tag}
                    </motion.div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1.5 mb-5">
                    {[...Array(t.rating)].map((_, si) => (
                      <motion.div key={si}
                        initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: si * 0.07, type: "spring", stiffness: 400 }}
                      >
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Review text */}
                  <motion.p
                    key={`text-${active}`}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-700 text-lg leading-relaxed mb-8 font-medium"
                  >
                    "{t.text}"
                  </motion.p>

                  {/* Author row */}
                  <motion.div key={`author-${active}`}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-4"
                  >
                    {/* Avatar with glow ring */}
                    <div className="relative">
                      <motion.div className="absolute -inset-1 rounded-full opacity-60"
                        style={{ background: t.gradient, filter: "blur(6px)" }}
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-black"
                        style={{ background: t.gradient, boxShadow: `0 0 20px ${t.glow}` }}>
                        {t.initials}
                      </div>
                      {/* Online dot */}
                      <motion.div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white bg-green-400"
                        animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-base">{t.name}</p>
                      <p className="text-gray-400 text-sm">{t.role}</p>
                    </div>

                    {/* Like button */}
                    <motion.button
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold"
                      style={{ background: `${t.color}12`, color: t.color, border: `1px solid ${t.color}25` }}
                    >
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      Helpful
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* ── Nav arrows ── */}
            <div className="flex items-center justify-between mt-8">
              <motion.button onClick={goPrev} whileHover={{ scale: 1.1, x: -4 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 border border-gray-200 bg-white hover:border-gray-300 transition-all"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </motion.button>

              {/* Dot indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <motion.button key={i} onClick={() => goTo(i)}
                    animate={{
                      width: active === i ? 32 : 8,
                      opacity: active === i ? 1 : 0.4,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="h-2 rounded-full cursor-pointer"
                    style={{ background: active === i ? t.color : "#cbd5e1", boxShadow: active === i ? `0 0 10px ${t.glow}` : "none" }}
                  />
                ))}
              </div>

              <motion.button onClick={goNext} whileHover={{ scale: 1.1, x: 4 }} whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all"
                style={{ background: t.gradient, boxShadow: `0 6px 20px ${t.glow.replace("0.5","0.35")}` }}
              >
                Next <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          {/* ── Right mini cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col gap-4 w-64 flex-shrink-0"
          >
            {testimonials.filter((_, i) => i !== active).slice(2, 4).map((card) => (
              <motion.div key={card.name} whileHover={{ x: -8, scale: 1.03 }}
                onClick={() => goTo(testimonials.indexOf(card))}
                className="p-4 rounded-2xl cursor-pointer border relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(99,102,241,0.15)", backdropFilter: "blur(12px)", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${card.color}08, ${card.color}14)` }}
                />
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: card.gradient }}>
                    {card.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{card.name}</p>
                    <p className="text-[10px] text-gray-400">{card.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">"{card.text}"</p>
              </motion.div>
            ))}

            {/* Stats card */}
            <motion.div
              className="p-4 rounded-2xl border"
              style={{ background: "rgba(255,255,255,0.85)", borderColor: "rgba(99,102,241,0.15)", backdropFilter: "blur(12px)" }}
              animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <ThumbsUp className="w-4 h-4 text-indigo-500" />
                <p className="text-xs font-bold text-gray-700">Customer Love</p>
              </div>
              {[{ label: "Satisfaction", val: 98 }, { label: "Return Rate", val: 94 }, { label: "Recommend", val: 99 }].map((s, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between text-[10px] text-gray-500 mb-0.5">
                    <span>{s.label}</span><span className="font-bold">{s.val}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div className="h-full rounded-full"
                      style={{ background: t.gradient }}
                      initial={{ width: 0 }}
                      animate={{ width: `${s.val}%` }}
                      transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom scroll marquee ── */}
        <div className="mt-20 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #EBF0FF, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #EBF0FF, transparent)" }} />

          <motion.div
            className="flex gap-5 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...testimonials, ...testimonials].map((card, i) => (
              <div key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-full border flex-shrink-0"
                style={{ background: "rgba(255,255,255,0.80)", borderColor: `${card.color}25`, backdropFilter: "blur(10px)" }}
              >
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-black flex-shrink-0"
                  style={{ background: card.gradient }}>
                  {card.initials}
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-xs text-gray-600 font-medium max-w-[180px] truncate">"{card.text}"</p>
                <span className="text-sm">{card.emoji}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}