"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-indigo-600" />
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -180, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            Ready for Fresh Laundry?
          </h2>
          <p className="text-white/80 text-lg mb-10 font-light max-w-xl mx-auto">
            Drop in today or give us a call. Bubbles Laundromat is open 7 days a
            week to serve you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="tel:+14057488990"
              className="flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 font-bold rounded-full text-base shadow-xl hover:shadow-2xl transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5" />
              Call (405) 748-8990
            </motion.a>
            <motion.a
              href="#location"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-8 py-4 bg-white/15 text-white font-semibold rounded-full text-base border border-white/30 hover:bg-white/25 transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
