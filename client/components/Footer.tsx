"use client";

import { Phone, MapPin, Clock, Sparkles, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-900 relative overflow-hidden noise">
      <div className="absolute inset-0 bg-gradient-to-b from-[#060E1A] to-[#030810]" />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display text-xl text-white block leading-none">Bubbles</span>
                <span className="text-xs text-cyan-400 font-semibold tracking-widest uppercase">Laundromat</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Oklahoma City&apos;s premier laundromat — clean machines, excellent
              service, and a welcoming atmosphere at 815 W Britton Rd.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/40 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">
                  815 W Britton Rd<br />Oklahoma City, OK 73114
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                <a href="tel:+14057488990" className="text-white/40 hover:text-cyan-400 text-sm transition-colors">
                  +1 (405) 748-8990
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">
                  Mon–Sat: 6AM–10PM<br />Sunday: 7AM–9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Bubbles Laundromat. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
