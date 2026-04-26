"use client";

import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shirt, RefreshCw, Wind, Zap, Sparkles, Package } from "lucide-react";

const services = [
  {
    icon: RefreshCw,
    title: "Self-Service Laundry",
    description:
      "State-of-the-art coin and card-operated washers and dryers. Perfect for handling all load sizes — from small delicates to king-size comforters.",
    features: ["High-capacity machines", "Card & coin payment", "Multiple load sizes"],
    color: "from-cyan-500 to-cyan-600",
    glow: "rgba(6,182,212,0.3)",
    badge: "Most Popular",
  },
  {
    icon: Shirt,
    title: "Wash, Dry & Fold",
    description:
      "Drop off your dirty laundry and pick up fresh, neatly folded clothes. Our trained staff handles everything with care.",
    features: ["Drop-off & pick-up", "Professionally folded", "Same-day service"],
    color: "from-indigo-500 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
    badge: "Most Convenient",
  },
  {
    icon: Wind,
    title: "Dry Cleaning Drop-Off",
    description:
      "Leave your delicate garments, suits, and formal wear with us. We partner with premium dry cleaners to get them back looking perfect.",
    features: ["Gentle handling", "Garment preservation", "Expert partners"],
    color: "from-violet-500 to-violet-600",
    glow: "rgba(139,92,246,0.3)",
    badge: null,
  },
  {
    icon: Zap,
    title: "Commercial Laundry",
    description:
      "Business owners — we handle bulk laundry for salons, restaurants, gyms, and more. Fast turnaround, large capacity.",
    features: ["Bulk discounts", "Business accounts", "Fast turnaround"],
    color: "from-amber-500 to-orange-500",
    glow: "rgba(245,158,11,0.3)",
    badge: null,
  },
  {
    icon: Sparkles,
    title: "Stain Treatment",
    description:
      "Tough stains meet their match. Our specialized stain treatment service tackles everything from wine to grease.",
    features: ["Pre-treatment care", "Eco-friendly agents", "Stain guarantee"],
    color: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.3)",
    badge: null,
  },
  {
    icon: Package,
    title: "Comforter & Bedding",
    description:
      "Oversized items welcome — duvets, comforters, blankets, and sleeping bags get a deep clean in our large-capacity machines.",
    features: ["Oversized loads", "Deep clean cycle", "Quick drying"],
    color: "from-pink-500 to-rose-500",
    glow: "rgba(236,72,153,0.3)",
    badge: null,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Services() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headingY = useTransform(scrollYProgress, [0, 0.2], [30, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-[#F8FFFE] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] rounded-full"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent 70%)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.03] rounded-full"
        style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)", transform: "translate(-30%, 30%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-4">Our Services</div>
          <h2 className="section-heading text-navy-800 mb-5">
            Everything Your Laundry
            <br />
            <em className="text-gradient not-italic">Could Ever Need</em>
          </h2>
          <p className="text-navy-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From quick self-service washes to full-service wash and fold, Bubbles
            Laundromat has every option to fit your schedule and budget.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative group bg-white rounded-3xl p-8 overflow-hidden"
                style={{ boxShadow: "0 4px 30px rgba(10,22,40,0.06)", border: "2px solid rgba(200,200,200,0.2)" }} whileHover={{ scale: 1.06, rotate: 1, borderColor: "rgba(0,150,255,0.8)", boxShadow: "0 0 30px rgba(0,150,255,0.6)", transition: { duration: 0.3 } }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${service.glow} 0%, transparent 60%)` }}
                />

                {service.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full">
                    {service.badge}
                  </span>
                )}

                <div className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-display text-xl text-navy-800 mb-3 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-500/80 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-navy-600 font-medium">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
