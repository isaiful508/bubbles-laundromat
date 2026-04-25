"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Maria Gonzalez",
    role: "Regular Customer",
    text: "I've been coming to Bubbles for 2 years and the machines are always clean and working. The staff is super friendly.",
    rating: 5,
    initials: "MG",
  },
  {
    name: "James Whitfield",
    role: "Wash & Fold Customer",
    text: "The wash and fold service is a total game changer. Everything comes back perfectly folded.",
    rating: 5,
    initials: "JW",
  },
  {
    name: "Sarah Thompson",
    role: "Business Owner",
    text: "We use Bubbles weekly for our business. Reliable and affordable.",
    rating: 5,
    initials: "ST",
  },
  {
    name: "David Nakamura",
    role: "Student",
    text: "Card payment + late hours = perfect for students.",
    rating: 5,
    initials: "DN",
  },
  {
    name: "Lisa Bradford",
    role: "Working Mom",
    text: "Huge machines save me hours every week.",
    rating: 5,
    initials: "LB",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">=
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#E6EEFF]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold mb-3 uppercase text-sm">
            Reviews
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by the Community
          </h2>

          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-gray-500 text-sm ml-2">
              4.9 avg. from 200+ reviews
            </span>
          </div>
        </motion.div>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
           style={{ paddingBottom: "40px" }}
          className="!items-stretch"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} style={{ height: "auto" }}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl h-full"
              >
                <Quote className="w-8 h-8 text-blue-200 mb-4" />

                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-grow">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}