"use client";

import { motion } from "framer-motion";
import { Check, Phone } from "lucide-react";

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
    color: "from-cyan-500 to-cyan-600",
    popular: false,
  },
  {
    name: "Wash & Fold",
    tagline: "We Do It For You",
    price: "$1.35",
    unit: "per pound",
    description:
      "Drop off, we wash, dry, fold & bag. Pick up fresh — minimum 15 lbs.",
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
    color: "from-indigo-500 to-violet-600",
    popular: true,
  },
  {
    name: "Commercial",
    tagline: "Business Accounts",
    price: "Custom",
    unit: "quote",
    description:
      "Bulk laundry for salons, restaurants, spas & hotels. Volume discounts available.",
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
    color: "from-amber-500 to-orange-500",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#F0FFFE] relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6,182,212,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-4">Transparent Pricing</div>
          <h2 className="section-heading text-navy-800 mb-4">
            No Hidden Fees,{" "}
            <em className="text-gradient not-italic">Ever</em>
          </h2>
          <p className="text-navy-500 text-lg max-w-xl mx-auto font-light">
            Affordable laundry services with clear, upfront pricing. Pay only for
            what you use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative rounded-3xl overflow-hidden ${
                plan.popular ? "ring-2 ring-indigo-500 shadow-2xl scale-[1.02] md:scale-105" : ""
              }`}
              style={{ boxShadow: plan.popular ? "0 20px 60px rgba(99,102,241,0.25)" : "0 4px 30px rgba(10,22,40,0.08)" }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500" />
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${plan.color} p-7 text-white`}>
                {plan.popular && (
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-3 tracking-wider uppercase">
                    ★ Most Popular
                  </span>
                )}
                <div className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-1">
                  {plan.tagline}
                </div>
                <h3 className="font-display text-2xl mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl">{plan.price}</span>
                  <span className="text-white/70 text-sm">/ {plan.unit}</span>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white p-7">
                <p className="text-navy-500/80 text-sm mb-6 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-7">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm text-navy-700">
                      <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={plan.href}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
                      : "border-2 border-navy-200 text-navy-700 hover:bg-navy-50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.href.startsWith("tel") && <Phone className="w-4 h-4" />}
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-navy-400/70 text-sm mt-8"
        >
          * Prices subject to change. Call <a href="tel:+14057488990" className="text-cyan-600 font-medium">(405) 748-8990</a> for current rates.
        </motion.p>
      </div>
    </section>
  );
}
