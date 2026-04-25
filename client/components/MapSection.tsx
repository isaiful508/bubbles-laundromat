"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Car, Wifi, CreditCard } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: CreditCard, label: "Card Payment" },
  { icon: Car, label: "Free Parking" },
  { icon: Clock, label: "Extended Hours" },
];

const hours = [
  { days: "Monday – Friday", time: "6:00 AM – 10:00 PM" },
  { days: "Saturday", time: "6:00 AM – 10:00 PM" },
  { days: "Sunday", time: "7:00 AM – 9:00 PM" },
];

export default function MapSection() {
  return (
    <section id="location" className="py-24 lg:py-32 bg-[#F8FFFE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-4">Find Us</div>
          <h2 className="section-heading text-navy-800 mb-4">
            We&apos;re Easy to{" "}
            <em className="text-gradient not-italic">Find</em>
          </h2>
          <p className="text-navy-500 text-lg max-w-xl mx-auto font-light">
            Conveniently located on W Britton Rd with plenty of free parking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-cyan-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">Address</h3>
                  <p className="text-navy-500 text-sm leading-relaxed">
                    815 W Britton Rd<br />
                    Oklahoma City, OK 73114<br />
                    United States
                  </p>
                  <a
                    href="https://maps.google.com/?q=815+W+Britton+Rd+Oklahoma+City+OK+73114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-cyan-600 text-sm font-medium hover:text-cyan-500 transition-colors"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-indigo-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">Phone</h3>
                  <a
                    href="tel:+14057488990"
                    className="text-navy-500 text-sm hover:text-cyan-600 transition-colors"
                  >
                    +1 (405) 748-8990
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-navy-800">Hours</h3>
              </div>
              <div className="space-y-2.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-sm">
                    <span className="text-navy-500">{h.days}</span>
                    <span className="font-medium text-navy-700 tabular-nums">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-600 text-xs font-medium">Open Now</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-navy-800 mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {amenities.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-navy-600">
                    <Icon className="w-4 h-4 text-cyan-500" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            style={{ height: "520px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.123456789!2d-97.5499!3d35.5929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s815+W+Britton+Rd%2C+Oklahoma+City%2C+OK+73114!5e0!3m2!1sen!2sus!4v1!5m2!1sen!2sus&q=815+W+Britton+Rd,+Oklahoma+City,+OK+73114"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bubbles Laundromat Location - 815 W Britton Rd Oklahoma City OK"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
