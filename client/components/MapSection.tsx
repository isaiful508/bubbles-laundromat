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

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const rightItem = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function MapSection() {
  return (
    <section
      id="location"
      className="py-24 lg:py-32 bg-[#F8FFFE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
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

        {/* CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-5 gap-8 items-start"
        >
          {/* LEFT SIDE */}
          <motion.div
            variants={leftItem}
            className="lg:col-span-2 space-y-5"
          >
            {/* ADDRESS */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
              }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">
                    Address
                  </h3>
                  <p className="text-navy-500 text-sm leading-relaxed">
                    815 W Britton Rd<br />
                    Oklahoma City, OK 73114<br />
                    United States
                  </p>
                  <a
                    href="https://maps.google.com/?q=815+W+Britton+Rd+Oklahoma+City+OK+73114"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-cyan-600 text-sm font-medium hover:text-cyan-500"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </motion.div>

            {/* PHONE */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
              }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-indigo-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-800 mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+14057488990"
                    className="text-navy-500 text-sm hover:text-cyan-600"
                  >
                    +1 (405) 748-8990
                  </a>
                </div>
              </div>
            </motion.div>

            {/* HOURS */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
              }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-navy-800">Hours</h3>
              </div>

              <div className="space-y-2.5">
                {hours.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-navy-500">{h.days}</span>
                    <span className="font-medium text-navy-700">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-600 text-xs font-medium">
                  Open Now
                </span>
              </div>
            </motion.div>

            {/* AMENITIES */}
            <motion.div
              whileHover={{
                scale: 1.08,
                rotate: 2,
                boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
              }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 cursor-pointer"
            >
              <h3 className="font-semibold text-navy-800 mb-4">
                Amenities
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {amenities.map(({ icon: Icon, label }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-navy-600"
                  >
                    <Icon className="w-4 h-4 text-cyan-500" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE (MAP) */}
          <motion.div
            variants={rightItem}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            style={{ height: "705px" }}
          >
            <iframe
              src="https://www.google.com/maps?q=815+W+Britton+Rd+Oklahoma+City+OK+73114&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Map Location"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}