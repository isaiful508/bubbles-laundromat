"use client";

import Image from "next/image";
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

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
    <footer className="relative overflow-hidden">
      {/* Background (match hero) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#E6EEFF]" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="relative h-11 w-[162px] sm:h-12 sm:w-[172px] mb-5">
              <Image
                src="/bubbles_logo.svg"
                alt="Bubbles Laundromat"
                fill
                priority
                sizes="172px"
                className="object-contain object-left"
              />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              Oklahoma City&apos;s premier laundromat — clean machines, excellent
              service, and a welcoming atmosphere at 815 W Britton Rd.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/70 backdrop-blur border border-white/40 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-300 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm tracking-wider uppercase mb-5">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 hover:text-blue-600 text-sm transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  815 W Britton Rd <br />
                  Oklahoma City, OK 73114
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <a
                  href="tel:+14057488990"
                  className="text-gray-500 hover:text-blue-600 text-sm transition"
                >
                  +1 (405) 748-8990
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-blue-600 mt-0.5" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  Mon–Sat: 6AM–10PM <br />
                  Sunday: 7AM–9PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Bubbles Laundromat. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-xs transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}