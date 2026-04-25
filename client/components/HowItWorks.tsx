// "use client";

// import { motion } from "framer-motion";
// import { MapPin, ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";

// const steps = [
//   {
//     number: "01",
//     icon: MapPin,
//     title: "Visit Us",
//     description:
//       "Come to 815 W Britton Rd, Oklahoma City. We're open 7 days a week from 6 AM to 10 PM. Free parking available right at the door.",
//     color: "#06B6D4",
//     bg: "from-cyan-500/10 to-cyan-600/5",
//   },
//   {
//     number: "02",
//     icon: ShoppingBag,
//     title: "Load & Start",
//     description:
//       "Choose your machine size, add your detergent (or grab ours from our vending machines), select your cycle, and pay by card or coin.",
//     color: "#6366F1",
//     bg: "from-indigo-500/10 to-indigo-600/5",
//   },
//   {
//     number: "03",
//     icon: Sparkles,
//     title: "Relax & Wait",
//     description:
//       "Kick back in our comfortable lounge with free Wi-Fi, read a book, or grab a snack. We'll notify you when your cycle is done.",
//     color: "#8B5CF6",
//     bg: "from-violet-500/10 to-violet-600/5",
//   },
//   {
//     number: "04",
//     icon: CheckCircle2,
//     title: "Pick Up Fresh Clothes",
//     description:
//       "Transfer to dryers, dry thoroughly, and take home beautifully clean laundry. For full-service, we fold and bag everything for you!",
//     color: "#10B981",
//     bg: "from-emerald-500/10 to-emerald-600/5",
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section id="how-it-works" className="py-24 lg:py-32 bg-navy-800 relative overflow-hidden noise">
//       {/* BG */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#060E1A] via-[#0A1628] to-[#0F2240]" />
//       <div className="absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage: "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
//           backgroundSize: "80px 80px",
//         }}
//       />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >
//           <div className="section-tag mx-auto mb-4">Simple Process</div>
//           <h2 className="section-heading text-white mb-5">
//             How It Works
//           </h2>
//           <p className="text-white/50 text-lg max-w-xl mx-auto font-light">
//             Getting fresh, clean laundry is as easy as 1-2-3-4 at Bubbles.
//           </p>
//         </motion.div>

//         {/* Steps */}
//         <div className="relative">
//           {/* Connecting Line (desktop) */}
//           <div className="hidden lg:block absolute top-16 left-0 right-0 h-px"
//             style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), rgba(6,182,212,0.3), transparent)" }} />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {steps.map((step, i) => {
//               const Icon = step.icon;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: i * 0.12 }}
//                   className="relative"
//                 >
//                   {/* Card */}
//                   <div className={`relative p-7 rounded-3xl bg-gradient-to-br ${step.bg} border border-white/5 group hover:border-white/10 transition-all duration-300`}
//                     style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}>

//                     {/* Step Number */}
//                     <div className="absolute -top-4 -right-2 font-display text-7xl font-bold opacity-[0.06] text-white select-none">
//                       {step.number}
//                     </div>

//                     {/* Icon Circle */}
//                     <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
//                       style={{ background: `${step.color}20`, border: `1px solid ${step.color}40` }}>
//                       <Icon className="w-7 h-7" style={{ color: step.color }} />
//                       {/* Pulse ring */}
//                       <span className="absolute inset-0 rounded-2xl animate-ping opacity-20"
//                         style={{ background: step.color }} />
//                     </div>

//                     {/* Step Label */}
//                     <div className="text-xs font-bold tracking-widest uppercase mb-2"
//                       style={{ color: step.color }}>
//                       Step {step.number}
//                     </div>

//                     <h3 className="font-display text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
//                       {step.title}
//                     </h3>
//                     <p className="text-white/50 text-sm leading-relaxed font-light">
//                       {step.description}
//                     </p>
//                   </div>

//                   {/* Arrow between steps (mobile) */}
//                   {i < steps.length - 1 && (
//                     <div className="lg:hidden flex justify-center my-4">
//                       <motion.div
//                         animate={{ y: [0, 6, 0] }}
//                         transition={{ duration: 1.5, repeat: Infinity }}
//                         className="text-cyan-500/40 text-2xl"
//                       >
//                         ↓
//                       </motion.div>
//                     </div>
//                   )}
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-16"
//         >
//           <p className="text-white/40 text-sm mb-4">Ready to get started?</p>
//           <motion.a
//             href="tel:+14057488990"
//             className="btn-primary inline-flex mx-auto"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//           >
//             Visit Bubbles Today
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { MapPin, ShoppingBag, Sparkles, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Visit Us",
    description:
      "Come to 815 W Britton Rd, Oklahoma City. We're open 7 days a week from 6 AM to 10 PM. Free parking available right at the door.",
    color: "#3B82F6",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Load & Start",
    description:
      "Choose your machine size, add your detergent, select your cycle, and pay by card or coin.",
    color: "#4F46E5",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Relax & Wait",
    description:
      "Enjoy our lounge with free Wi-Fi, read a book, or grab a snack while your laundry runs.",
    color: "#6366F1",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Pick Up Fresh Clothes",
    description:
      "Dry, fold, and take home beautifully clean laundry. We also offer full-service folding.",
    color: "#2563EB",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Soft Background (match hero) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#E6EEFF]" />

      {/* Glow */}
      <div className="absolute inset-0 opacity-40 blur-3xl bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-blue-600 font-semibold mb-3 tracking-wide uppercase text-sm">
            Simple Process
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            How It Works
          </h2>

          <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
            Getting fresh, clean laundry is simple, fast, and hassle-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="relative p-7 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl shadow-blue-900/5 hover:shadow-blue-500/10 transition-all duration-300 group">
                    
                    {/* Step Number */}
                    <div className="absolute -top-4 -right-2 text-7xl font-bold opacity-[0.05] text-gray-900 select-none">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition group-hover:scale-105"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{ color: step.color }}
                      />
                    </div>

                    {/* Label */}
                    <div
                      className="text-xs font-bold tracking-widest uppercase mb-2"
                      style={{ color: step.color }}
                    >
                      Step {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Arrow */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4 text-blue-400 text-2xl">
                      ↓
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm mb-4">
            Ready to get started?
          </p>

          <motion.a
            href="tel:+14057488990"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
          >
            Visit Bubbles Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}