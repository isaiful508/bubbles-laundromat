"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveLink(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-dark shadow-[0_14px_40px_rgba(17,32,65,0.08)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
            aria-label="Bubbles Laundromat home"
          >
            <div className="relative h-11 w-[162px] sm:h-12 sm:w-[172px]">
              <Image
                src="/bubbles_logo.svg"
                alt="Bubbles Laundromat"
                fill
                priority
                sizes="172px"
                className="object-contain object-left"
              />
            </div>
          </motion.a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeLink === link.href
                    ? "text-cyan-600 bg-cyan-500/10"
                    : "text-navy-700/75 hover:text-navy-800 hover:bg-white/70"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="tel:+14057488990"
              className="flex items-center gap-2 px-5 py-2.5 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-full text-sm transition-all duration-200 shadow-lg shadow-navy-800/20"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-navy-800 rounded-full glass transition-all duration-200"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden glass-dark border-t border-cyan-500/15 mt-2"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 rounded-xl text-navy-700 hover:text-navy-800 hover:bg-cyan-500/12 transition-all font-medium"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.a
                  href="tel:+14057488990"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-navy-800 text-white font-bold rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  (405) 748-8990
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating Call Button Mobile */}
      <motion.a
        href="tel:+14057488990"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 lg:hidden"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6 text-white" />
        <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
      </motion.a>
    </>
  );
}
