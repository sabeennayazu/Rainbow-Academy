"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    img: "/images/champion1.jpg",
    title: "National Debate Champion",
    desc: "Our students won the National Debate Competition 2025, showcasing excellence in public speaking and critical thinking.",
  },
  {
    img: "/images/champion2.jpg",
    title: "Math Championship Winners",
    desc: "A brilliant performance by our team in the 16th Math Championship, securing gold medals in multiple categories.",
  },
  {
    img: "/images/champion3.jpg",
    title: "Art & Cultural Excellence",
    desc: "Our students excelled in the inter-school cultural fest, winning prizes in art, dance, and music competitions.",
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = slidesData.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isHovered) return; // stop auto-slide on hover
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, isHovered]);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Carousel */}
        <div
          className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-xl hover:trasform hover:scale-[1.02] transition-transform duration-400 hover:rotate-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slidesData[active].img}
                alt={slidesData[active].title}
                fill
                className="object-cover rounded-3xl "
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slidesData.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active
                    ? "bg-blue-600 scale-110"
                    : "bg-white/60 hover:bg-white/90"
                }`}
                onClick={() => setActive(i)}
              ></span>
            ))}
          </div>
        </div>

        {/* Right: Description */}
        <div className="flex flex-col justify-center p-4 md:p-0">
          <AnimatePresence mode="wait">
            <motion.h2
              key={slidesData[active].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold text-blue-700 mb-4"
            >
              {slidesData[active].title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={slidesData[active].desc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="text-gray-700 text-lg md:text-xl leading-relaxed"
            >
              {slidesData[active].desc}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
