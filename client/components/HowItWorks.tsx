"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Truck, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Schedule a Pickup",
    highlight: "Book It",
    description:
      "Call or text us to schedule a free pickup at your door. We're available 7 days a week and work around your schedule.",
    color: "#3B82F6",
    bg: "from-blue-50 to-blue-100",
    illustration: (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center shadow-inner">
          <span className="text-6xl">📅</span>
        </div>
        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-xl">📞</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    icon: Truck,
    title: "We Pick Up at Your Door",
    highlight: "We Come",
    description:
      "Our team arrives at your home or office to collect your laundry bag. No need to go anywhere — we handle the pickup.",
    color: "#4F46E5",
    bg: "from-indigo-50 to-indigo-100",
    illustration: (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-28 h-28 rounded-full bg-indigo-100 flex items-center justify-center shadow-inner">
          <span className="text-6xl">🚐</span>
        </div>
        <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-xl">🏠</span>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    icon: Sparkles,
    title: "We Wash, Dry & Fold",
    highlight: "We Clean",
    description:
      "Your clothes are professionally washed, dried, and neatly folded at our facility using premium detergents and clean machines.",
    color: "#6366F1",
    bg: "from-violet-50 to-violet-100",
    illustration: (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-28 h-28 rounded-full bg-violet-100 flex items-center justify-center shadow-inner">
          <span className="text-6xl">🫧</span>
        </div>
        <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-xl">✨</span>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Delivered Back to You",
    highlight: "Drop Off",
    description:
      "Fresh, clean, and folded laundry is delivered right back to your door — ready to wear, on your schedule.",
    color: "#2563EB",
    bg: "from-sky-50 to-sky-100",
    illustration: (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="w-28 h-28 rounded-full bg-sky-100 flex items-center justify-center shadow-inner">
          <span className="text-6xl">👕</span>
        </div>
        <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-xl">📦</span>
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const step = steps[active];

  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#E6EEFF]" />
      <div className="absolute inset-0 opacity-40 blur-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm tracking-wide uppercase mb-5 border border-blue-200 rounded-full px-4 py-1.5 bg-blue-50">
              [ Get Your Clothes Cleaned & Fresh ]
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              How It <span className="text-blue-600">Works</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-5 font-light max-w-md">
              Bubbles Laundromat is dedicated to making laundry day easy and stress-free.
              Walk in, load up, and walk out with fresh, clean clothes — all in one visit.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-8 font-light max-w-md">
              We've served Oklahoma City for years with reliable machines, a clean environment,
              and friendly staff ready to help you every step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:+14057488990"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/25 hover:bg-blue-700 transition text-sm"
              >
                Visit Bubbles Today
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-blue-200 text-blue-600 font-semibold hover:bg-blue-50 transition text-sm"
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl shadow-blue-900/10 overflow-hidden p-8 min-h-[340px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`num-${active}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-4 right-6 text-[8rem] font-black leading-none select-none"
                  style={{ color: `${step.color}12` }}
                >
                  {step.number}
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-8 items-start relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${active}`}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    transition={{ duration: 0.45 }}
                    className={`flex-shrink-0 w-40 h-40 rounded-2xl bg-gradient-to-br ${step.bg} flex items-center justify-center relative`}
                  >
                    {step.illustration}
                  </motion.div>
                </AnimatePresence>

                <div className="flex-1 pt-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`text-${active}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div
                        className="text-xs font-bold tracking-widest uppercase mb-2"
                        style={{ color: step.color }}
                      >
                        Step {step.number}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                        <span style={{ color: step.color }}>{step.highlight} </span>
                        {step.title.replace(step.highlight, "").trim()}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-8 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  key={`bar-${active}`}
                  className="h-full rounded-full"
                  style={{ backgroundColor: step.color }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-6">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  {i > 0 && (
                    <div className="flex gap-0.5 items-center">
                      {[...Array(3)].map((_, d) => (
                        <div
                          key={d}
                          className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                            i <= active ? "bg-blue-400" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  <motion.div
                    animate={{
                      scale: active === i ? 1.15 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      active === i
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "border-gray-300 bg-white text-gray-500 hover:border-blue-400"
                    }`}
                  >
                    {i + 1}
                  </motion.div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}