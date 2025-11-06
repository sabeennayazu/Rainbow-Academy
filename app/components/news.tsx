"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export default function NewsSection() {
  const newsData = [
    {
      title: "Science Fair 2025",
      img: "/images/fair.jpg",
      desc: "Our students displayed creativity and teamwork in this year’s science fair!",
    },
    {
      title: "New Computer Lab",
      img: "/images/lab.jpg",
      desc: "A modern lab with 50 new systems has been inaugurated for grades 6–10.",
    },
    {
      title: "Cultural Day Success",
      img: "/images/cultural.jpg",
      desc: "An amazing day full of colors, performances, and unity among students.",
    },
    {
      title: "Sports Day Highlights",
      img: "/images/sports.jpg",
      desc: "Students showed remarkable talent and team spirit in various sports events.",
    },
    {
      title: "Art Exhibition",
      img: "/images/art.jpg",
      desc: "Our students’ artwork was displayed in an inspiring art exhibition.",
    },
  ];

  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-white py-20 ">
      {/* Section Header */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <Newspaper className="text-blue-600 w-10 h-10" />
        <h2 className="text-2xl  sm:text-4xl font-extrabold text-gray-900">
          Latest School News
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className="relative w-full overflow-hidden mb-4 pb-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-8"
          animate={{ x: paused ? 0 : ["0%", "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: newsData.length * 5,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate items for seamless looping */}
          {[...newsData, ...newsData].map((news, i) => (
            <div
              key={i}
              className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[450px] bg-white rounded-3xl shadow-2xl p-6 flex-shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-56 sm:h-64 md:h-72 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={news.img}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{news.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
