"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slidesData = [
  {
    img: "/images/a6.jpg",
    title: "Science Fair Champion",
    desc: "स्रोतकेन्द्रले आयोजना गरेको बिज्ञान प्रर्दसनिमा रेन्बो स्कुल प्रथम र क्यान्डिड स्कुल दोस्रो भएको छ",
  },
  {
    img: "/images/a9.jpg",
    title: "Poetry Competition Winner",
    desc: "उपत्यका ब्यापी कबिता प्रतियोगितामा तृतीय स्थान हासिल गर्न सफल सुबिनालाइ हार्दिक बधाइ.",
  },
  {
    img: "/images/14.jpg",
    title: "Dance Competition Award",
    desc: "जिल्ला प्याब्सन भक्तपुरको आयोजनामा भएको एकल नृत्य प्रतियोगितामा सहभागी ५० स्कुल मध्य सान्त्वना पुरस्कार पाउन सफल छात्रालाइ हार्दिक बधाइ साथै नृत्य निर्देशक अष्ट सरलाइ धन्यबाद",
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
