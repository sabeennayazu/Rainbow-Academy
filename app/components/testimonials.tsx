"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Prabhat Rimal",
      title: " Media Personality",
      image: "/images/ram1.jpg", // replace with your own image
      quote:
        "It is good to see  Rainbow Academy standing as back bone of Nepalese academic sector. I am impressed with the training and exposure programs provided by this college. The dedicated faculty members  have played a crucial role in shaping my career.",
    },
    {
      id: 2,
      name: "Sita Sharma",
      title: "Education Consultant",
      image: "/images/female.jpg",
      quote:
        "Rainbow Academy provides a nurturing environment for every child. The teachers are dedicated and the curriculum promotes creativity, leadership, and compassion. My daughter has blossomed here both academically and personally.",
    },
    {
      id: 3,
      name: "Rajesh Thapa",
      title: "Parent of Alumni",
      image: "/images/amrit.jpg",
      quote:
        "The school focuses not only on academics but also on building confidence and character. My child loved every moment spent here. I highly recommend Rainbow Academy to all parents seeking quality education for their children.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      className="relative py-24 bg-cover bg-center text-center text-gray-800"
      style={{
        backgroundImage: "url('/images/world.png')", // 🔄 Replace this image path
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
          Testimonials
        </h2>

        {/* Testimonial Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="relative">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute bottom-0 right-0 bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  “
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed max-w-2xl italic">
                {testimonials[current].quote}
              </p>

              <div>
                <h4 className="font-semibold text-blue-800 text-lg">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-gray-500">
                  ({testimonials[current].title})
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === i
                  ? "bg-blue-700 scale-125"
                  : "bg-gray-300 hover:bg-blue-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
