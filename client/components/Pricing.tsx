"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Check, Phone, Sparkles, Zap, Building2 } from "lucide-react";

const plans = [
  {
    name: "Self-Service",
    tagline: "Do It Yourself",
    price: "From $2.50",
    unit: "per load",
    description: "Use our top-of-the-line coin/card machines at your own pace.",
    features: [
      "Small washer from $2.50",
      "Large washer from $4.25",
      "X-Large from $5.75",
      "Dryer from $0.25/8 min",
      "Card & coin payment",
      "Detergent vending available",
    ],
    cta: "Start a Load",
    href: "#location",
    icon: Zap,
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.55)",
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    bgGlow: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.30)",
    particles: ["💵", "$", "💲", "🪙", "💰"],
    popular: false,
  },
  {
    name: "Wash & Fold",
    tagline: "We Do It For You",
    price: "$1.35",
    unit: "per pound",
    description: "Drop off, we wash, dry, fold & bag. Pick up fresh — minimum 15 lbs.",
    features: [
      "15 lb minimum",
      "Sorted & washed with care",
      "Professionally folded",
      "Ready same or next day",
      "Free garment bagging",
      "Eco-friendly detergent option",
    ],
    cta: "Call to Book",
    href: "tel:+14057488990",
    icon: Sparkles,
    color: "#6366f1",
    glow: "rgba(99,102,241,0.60)",
    gradient: "linear-gradient(135deg, #6366f1, #7c3aed)",
    bgGlow: "rgba(99,102,241,0.10)",
    border: "rgba(99,102,241,0.40)",
    particles: ["💵", "💎", "$", "✨", "💜", "💲"],
    popular: true,
  },
  {
    name: "Commercial",
    tagline: "Business Accounts",
    price: "Custom",
    unit: "quote",
    description: "Bulk laundry for salons, restaurants, spas & hotels. Volume discounts available.",
    features: [
      "Volume pricing",
      "Priority turnaround",
      "Monthly invoicing",
      "Scheduled pickups",
      "Dedicated account manager",
      "Towels, linens & uniforms",
    ],
    cta: "Get a Quote",
    href: "tel:+14057488990",
    icon: Building2,
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.55)",
    gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
    bgGlow: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.30)",
    particles: ["💵", "💰", "$", "🏦", "💲", "🪙"],
    popular: false,
  },
];

// Flying money particle
function FlyingMoney({ emoji, color, index, total }: { emoji: string; color: string; index: number; total: number }) {
  const angle = (index / total) * 360;
  const rad = (angle * Math.PI) / 180;
  const distance = 120 + Math.random() * 80;
  const tx = Math.cos(rad) * distance;
  const ty = Math.sin(rad) * distance - 60;
  const rotation = -360 + Math.random() * 720;

  return (
    <motion.div
      className="absolute pointer-events-none select-none z-50"
      style={{ left: "50%", top: "30%", fontSize: emoji === "$" || emoji === "💲" ? "18px" : "22px", fontWeight: 900, color: emoji === "$" || emoji === "💲" ? color : undefined }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
      animate={{
        x: [0, tx * 0.4, tx],
        y: [0, ty * 0.3 - 30, ty],
        scale: [0, 1.4, 0.8, 0],
        opacity: [0, 1, 1, 0],
        rotate: [0, rotation * 0.5, rotation],
      }}
      transition={{ duration: 1.2 + Math.random() * 0.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.04 }}
    >
      {emoji}
    </motion.div>
  );
}

// Orbiting ring particle
function OrbitParticle({ color, index, total }: { color: string; index: number; total: number }) {
  const angle = (index / total) * 360;
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full pointer-events-none"
      style={{ background: color, boxShadow: `0 0 8px ${color}`, top: "50%", left: "50%", marginTop: -4, marginLeft: -4 }}
      animate={{
        rotate: [angle, angle + 360],
        x: [Math.cos((angle * Math.PI) / 180) * 120, Math.cos(((angle + 360) * Math.PI) / 180) * 120],
        y: [Math.sin((angle * Math.PI) / 180) * 120, Math.sin(((angle + 360) * Math.PI) / 180) * 120],
        opacity: [0, 1, 1, 0],
        scale: [0, 1.5, 1, 0],
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  );
}

function PricingCard({ plan, i }: { plan: typeof plans[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  const [burst, setBurst] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left - rect.width / 2, y: e.clientY - rect.top - rect.height / 2 });
  };

  const handleMouseEnter = () => {
    setHovered(true);
    setBurst(b => b + 1);
  };

  const handleMouseLeave = () => setHovered(false);

  const rotateX = hovered ? -mousePos.y / 20 : 0;
  const rotateY = hovered ? mousePos.x / 20 : 0;

  const particleCount = plan.particles.length * 2;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`relative ${plan.popular ? "md:-mt-6" : ""}`}
      style={{ perspective: 1000 }}
    >
      {/* ── Outer glow halo ── */}
      <motion.div
        className="absolute -inset-3 rounded-[2.5rem] pointer-events-none"
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.95,
        }}
        transition={{ duration: 0.4 }}
        style={{ background: `radial-gradient(circle, ${plan.glow.replace("0.55", "0.25")}, transparent 70%)`, filter: "blur(25px)" }}
      />

      {/* ── Orbit particles on hover ── */}
      <AnimatePresence>
        {hovered && [...Array(6)].map((_, oi) => (
          <OrbitParticle key={`orbit-${burst}-${oi}`} color={plan.color} index={oi} total={6} />
        ))}
      </AnimatePresence>

      {/* ── Flying money burst ── */}
      <AnimatePresence>
        {hovered && [...Array(particleCount)].map((_, pi) => (
          <FlyingMoney
            key={`money-${burst}-${pi}`}
            emoji={plan.particles[pi % plan.particles.length]}
            color={plan.color}
            index={pi}
            total={particleCount}
          />
        ))}
      </AnimatePresence>

      {/* ── Card body with 3D tilt ── */}
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: hovered ? 1.04 : 1,
          y: hovered ? -12 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative rounded-3xl overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? `0 40px 90px ${plan.glow.replace("0.55", "0.35")}, 0 0 0 2px ${plan.border}`
            : plan.popular
            ? `0 20px 60px ${plan.glow.replace("0.55", "0.20")}, 0 0 0 2px ${plan.border}`
            : "0 4px 30px rgba(10,22,40,0.08)",
          transition: "box-shadow 0.4s ease",
        }}
      >
        {/* Popular top bar */}
        {plan.popular && (
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 z-10"
            style={{ background: plan.gradient }}
            animate={{ opacity: hovered ? [1, 0.5, 1] : 1 }}
            transition={{ duration: 0.8, repeat: hovered ? Infinity : 0 }}
          />
        )}

        {/* ── Animated shimmer on hover ── */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%)" }}
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.5 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Header ── */}
        <div className="relative p-7 text-white overflow-hidden" style={{ background: plan.gradient }}>

          {/* Animated bg bubbles inside header */}
          {[...Array(3)].map((_, bi) => (
            <motion.div key={bi}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: [80, 50, 100][bi],
                height: [80, 50, 100][bi],
                right: ["-10%", "30%", "60%"][bi],
                top: ["-30%", "40%", "-50%"][bi],
                background: "rgba(255,255,255,0.08)",
              }}
              animate={hovered ? {
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              } : {}}
              transition={{ duration: 1.5 + bi * 0.5, repeat: Infinity }}
            />
          ))}

          {plan.popular && (
            <motion.span
              animate={hovered ? { scale: [1, 1.08, 1] } : {}}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-3 tracking-wider uppercase backdrop-blur-sm"
            >
              ★ Most Popular
            </motion.span>
          )}

          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-1">{plan.tagline}</div>
              <h3 className="font-bold text-2xl mb-3 text-white">{plan.name}</h3>
              <div className="flex items-baseline gap-2">
                <motion.span
                  className="font-black text-4xl text-white"
                  animate={hovered ? { scale: [1, 1.08, 1] } : {}}
                  transition={{ duration: 0.5, repeat: hovered ? Infinity : 0, repeatDelay: 0.5 }}
                >
                  {plan.price}
                </motion.span>
                <span className="text-white/70 text-sm">/ {plan.unit}</span>
              </div>
            </div>

            {/* Icon — spins on hover */}
            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: "rgba(255,255,255,0.18)" }}
              animate={hovered ? { rotate: 360, scale: [1, 1.2, 1] } : { rotate: 0 }}
              transition={hovered ? { rotate: { duration: 0.8, ease: "easeInOut" }, scale: { duration: 0.4 } } : {}}
            >
              {(() => { const Icon = plan.icon; return <Icon className="h-6 w-6 text-white" />; })()}
            </motion.div>
          </div>
        </div>

        {/* ── Body ── */}
        <motion.div
          className="p-7 relative"
          style={{
            background: hovered
              ? `linear-gradient(180deg, ${plan.bgGlow} 0%, #ffffff 30%)`
              : "#ffffff",
            transition: "background 0.4s ease",
          }}
        >
          {/* Corner glow dot */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, ${plan.glow.replace("0.55","0.08")}, transparent 70%)` }}
            animate={hovered ? { scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] } : { scale: 1, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          <p className="text-gray-500 text-sm mb-6 leading-relaxed">{plan.description}</p>

          <ul className="space-y-3 mb-7">
            {plan.features.map((f, fi) => (
              <motion.li
                key={fi}
                className="flex items-start gap-3 text-sm text-gray-700"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: fi * 0.08 }}
              >
                <motion.div
                  animate={hovered ? { scale: [1, 1.3, 1], rotate: [0, 10, 0] } : {}}
                  transition={{ delay: fi * 0.05, duration: 0.5 }}
                >
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.color }} />
                </motion.div>
                {f}
              </motion.li>
            ))}
          </ul>

          {/* CTA button */}
          <motion.a
            href={plan.href}
            className="relative w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm overflow-hidden text-white"
            style={{ background: plan.gradient, boxShadow: `0 8px 25px ${plan.glow.replace("0.55", "0.30")}` }}
            whileHover={{ scale: 1.04, boxShadow: `0 14px 40px ${plan.glow.replace("0.55", "0.55")}` }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Button shimmer */}
            <motion.span
              className="absolute inset-0"
              style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.30) 50%, transparent 65%)" }}
              animate={hovered ? { x: ["-100%", "200%"] } : {}}
              transition={{ duration: 1.0, repeat: Infinity, repeatDelay: 0.8 }}
            />
            {plan.href.startsWith("tel") && <Phone className="w-4 h-4" />}
            {plan.cta}

            {/* Flying $ from button */}
            <AnimatePresence>
              {hovered && (
                <motion.span
                  key={`btn-${burst}`}
                  className="absolute right-4 text-base font-black pointer-events-none"
                  initial={{ y: 0, opacity: 1, scale: 1 }}
                  animate={{ y: -40, opacity: 0, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.3 }}
                >
                  💸
                </motion.span>
              )}
            </AnimatePresence>
          </motion.a>

          {/* Hover hint */}
          <motion.p
            animate={{ opacity: hovered ? 0 : 0.4 }}
            className="text-center text-[10px] text-gray-400 mt-3 select-none"
          >
            Hover to explore ✦
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Popular badge outside card */}
      {plan.popular && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
          animate={hovered ? { y: [-2, 2, -2], scale: [1, 1.06, 1] } : {}}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          <div
            className="px-5 py-1.5 rounded-full text-white text-xs font-black tracking-wider uppercase shadow-xl"
            style={{ background: plan.gradient, boxShadow: `0 8px 20px ${plan.glow}` }}
          >
            ⚡ Most Popular
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: false, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const smoothY = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const headingY = useTransform(smoothY, [0, 0.4], [-40, 0]);
  const headingOp = useTransform(smoothY, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} id="pricing" className="py-28 lg:py-36 relative overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0FFFE] via-[#EEF4FF] to-[#F5F0FF]" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(99,102,241,0.15) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Moving orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-8%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 65%)", filter: "blur(60px)" }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[-10%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 65%)", filter: "blur(60px)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)", filter: "blur(50px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Heading — parallax drop ── */}
        <motion.div style={{ y: headingY, opacity: headingOp }} className="text-center mb-20">
          <motion.div
            animate={isInView ? { scale: [0.9, 1], opacity: [0, 1] } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm uppercase tracking-wide border border-indigo-200 rounded-full px-5 py-2 bg-white/80 backdrop-blur-sm shadow-sm mb-5"
          >
            <motion.span animate={{ rotate: [0, 20, -10, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}>
              💰
            </motion.span>
            Transparent Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 leading-tight"
          >
            No Hidden Fees,{" "}
            <span className="relative inline-block">
              <span style={{
                background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                Ever
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full w-full"
                style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4)" }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-500 text-lg max-w-xl mx-auto font-light"
          >
            Affordable laundry services with clear, upfront pricing. Pay only for what you use.
          </motion.p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-end mt-6">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} i={i} />
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          * Prices subject to change. Call{" "}
          <a href="tel:+14057488990" className="font-semibold" style={{ color: "#06b6d4" }}>
            (405) 748-8990
          </a>{" "}
          for current rates.
        </motion.p>
      </div>
    </section>
  );
}