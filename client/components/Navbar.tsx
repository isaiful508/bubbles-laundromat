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
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      setOnHero(scrollY < window.innerHeight - 120);
    };

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
        transition={{ duration: 0.6 }}
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
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-11 w-[162px] sm:h-12 sm:w-[172px]">
              <Image
                src="/bubbles_logo.svg"
                alt="Bubbles Laundromat"
                fill
                priority
                sizes="172px"
                className={cn(
  "object-contain object-left transition-all duration-300",
  onHero
    ? "opacity-90 brightness-110"
    : "opacity-100 brightness-100"
)}
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
                    ? "text-cyan-300 bg-white/10"
                    : onHero
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-navy-700/75 hover:text-navy-900 hover:bg-white/70"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CALL BUTTON */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="tel:+14057488990"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 font-semibold rounded-full text-sm transition-all duration-200 shadow-lg",
                onHero
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-navy-800 hover:bg-navy-700 text-white shadow-navy-800/20"
              )}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={cn(
              "lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200",
              onHero
                ? "text-white bg-white/10"
                : "text-navy-800 glass"
            )}
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden glass-dark border-t border-cyan-500/15 mt-2"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "text-left px-4 py-3 rounded-xl font-medium transition-all",
                      onHero
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-navy-700 hover:text-navy-900 hover:bg-cyan-500/10"
                    )}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <motion.a
                  href="tel:+14057488990"
                  className="mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-navy-800 text-white font-bold rounded-full"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <motion.a
        href="tel:+14057488990"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 lg:hidden"
      >
        <Phone className="w-6 h-6 text-white" />
        <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" />
      </motion.a>
    </>
  );
}