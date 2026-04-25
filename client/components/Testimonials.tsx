// "use client";

// import { motion } from "framer-motion";
// import { Star, Quote } from "lucide-react";
// import { useState, useEffect } from "react";

// const testimonials = [
//   {
//     name: "Maria Gonzalez",
//     role: "Regular Customer",
//     text: "I've been coming to Bubbles for 2 years and the machines are always clean and working. The staff is super friendly. Best laundromat in OKC!",
//     rating: 5,
//     initials: "MG",
//     color: "from-cyan-400 to-cyan-600",
//   },
//   {
//     name: "James Whitfield",
//     role: "Wash & Fold Customer",
//     text: "The wash and fold service is a total game changer for my busy schedule. They fold everything perfectly and it's ready the same day. Worth every penny.",
//     rating: 5,
//     initials: "JW",
//     color: "from-indigo-400 to-indigo-600",
//   },
//   {
//     name: "Sarah Thompson",
//     role: "Business Owner",
//     text: "We use Bubbles for our salon towels weekly. The commercial account setup was seamless and the pricing is unbeatable for the volume we send. Highly recommend!",
//     rating: 5,
//     initials: "ST",
//     color: "from-violet-400 to-violet-600",
//   },
//   {
//     name: "David Nakamura",
//     role: "Student",
//     text: "Closest laundromat to my apartment and honestly the best. Card payment means no hunting for quarters. Open until 10PM so I can go after class. Love it.",
//     rating: 5,
//     initials: "DN",
//     color: "from-emerald-400 to-emerald-600",
//   },
//   {
//     name: "Lisa Bradford",
//     role: "Working Mom",
//     text: "With three kids the laundry never ends. Bubbles has massive capacity machines that handle everything in one trip. The staff helped me fit a king comforter in too!",
//     rating: 5,
//     initials: "LB",
//     color: "from-rose-400 to-rose-600",
//   },
//   {
//     name: "Tony Ereaux",
//     role: "Local Resident",
//     text: "Clean, well-maintained, safe, and affordable. The free WiFi makes the wait time fly by. 5 stars — I recommend Bubbles to everyone in the area.",
//     rating: 5,
//     initials: "TE",
//     color: "from-amber-400 to-amber-600",
//   },
// ];

// export default function Testimonials() {
//   const [activeIdx, setActiveIdx] = useState(0);

//   useEffect(() => {
//     const t = setInterval(() => {
//       setActiveIdx((prev) => (prev + 1) % testimonials.length);
//     }, 4500);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <section id="testimonials" className="py-24 lg:py-32 bg-navy-800 relative overflow-hidden noise">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#060E1A] via-[#0A1628] to-[#0F2240]" />

//       {/* Glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, #06B6D4, transparent 70%)" }} />

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-14"
//         >
//           <div className="section-tag mx-auto mb-4">Reviews</div>
//           <h2 className="section-heading text-white mb-4">
//             Loved by the{" "}
//             <em className="text-gradient not-italic">Community</em>
//           </h2>
//           <div className="flex items-center justify-center gap-1 mt-2">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
//             ))}
//             <span className="text-white/60 text-sm ml-2">4.9 avg. from 200+ reviews</span>
//           </div>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className={`relative p-6 rounded-3xl glass transition-all duration-500 cursor-pointer
//                 ${activeIdx === i ? "ring-1 ring-cyan-500/40 scale-[1.02]" : "hover:scale-[1.01]"}`}
//               onClick={() => setActiveIdx(i)}
//             >
//               {/* Quote Icon */}
//               <Quote className="w-8 h-8 text-cyan-500/20 mb-4" />

//               {/* Stars */}
//               <div className="flex gap-1 mb-3">
//                 {[...Array(t.rating)].map((_, si) => (
//                   <Star key={si} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
//                 ))}
//               </div>

//               {/* Text */}
//               <p className="text-white/70 text-sm leading-relaxed mb-5 font-light">
//                 &ldquo;{t.text}&rdquo;
//               </p>

//               {/* Author */}
//               <div className="flex items-center gap-3">
//                 <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
//                   {t.initials}
//                 </div>
//                 <div>
//                   <div className="text-white font-semibold text-sm">{t.name}</div>
//                   <div className="text-white/40 text-xs">{t.role}</div>
//                 </div>
//               </div>

//               {/* Active indicator */}
//               {activeIdx === i && (
//                 <motion.div
//                   layoutId="active-review"
//                   className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-b-3xl"
//                 />
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center gap-2 mt-8">
//           {testimonials.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveIdx(i)}
//               className={`rounded-full transition-all duration-300 ${
//                 activeIdx === i ? "w-6 h-2 bg-cyan-400" : "w-2 h-2 bg-white/20"
//               }`}
//               aria-label={`Review ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import "swiper/css";
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
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background (match your hero style) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#EEF4FF] to-[#E6EEFF]" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
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

        {/* Swiper Carousel */}
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
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl h-full"
              >
                {/* Quote */}
                <Quote className="w-8 h-8 text-blue-200 mb-4" />

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                  “{t.text}”
                </p>

                {/* User */}
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