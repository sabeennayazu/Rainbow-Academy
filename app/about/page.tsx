"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Create parallax effect for the background image
  const y = useTransform(scrollY, [0, 400], [0, 150]); // adjust second value for intensity

  return (
    <main className="text-gray-800 font-[Poppins] overflow-x-hidden bg-linear-to-b from-white to-blue-100">
      {/* === Hero Section with Parallax === */}
      <section ref={ref} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <Image
            src="/images/aboutus.jpg"
            alt="about us"
            fill
            priority
            className="object-cover brightness-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
        <h1 className="relative text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
          About us
        </h1>
      </section>

      {/* === Unified Scrollable Content === */}
      <div className="relative z-10 -mt-20 space-y-32 px-6 pb-32 md:px-10 lg:px-16 max-w-6xl mx-auto">
        {/* === Vision & Mission === */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2 space-y-6 pt-12 mt-12">
            <h2 className="text-4xl font-bold text-blue-700">Our Vision</h2>
            <p>
              To nurture confident, compassionate, and creative learners who make
              a positive difference in the world through knowledge and kindness.
            </p>
            <h2 className="text-4xl font-bold text-blue-700 mt-8">Our Mission</h2>
            <p>
              Our mission is to create an engaging learning environment that
              encourages curiosity, teamwork, and lifelong learning — blending
              academics with moral and emotional growth.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 rounded-[55%] overflow-hidden shadow-2xl">
              <Image src="/images/mission.jpg" alt="Mission Image" fill className="object-cover" />
            </div>
          </div>
        </motion.section>

        {/* === Principal’s Message === */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 rounded-[60%] overflow-hidden shadow-xl">
              <Image src="/images/dada.png" alt="Principal" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-4xl font-bold text-blue-700">Principal’s Message</h2>
            <p className="text-lg leading-relaxed">
              At Rainbow Academy, we value every learner as unique. Our goal is
              to empower students to think independently, act responsibly, and
              lead compassionately in a fast-changing world.
            </p>
            <p className="italic font-semibold text-blue-600">
              — Principal, Rainbow Academy
            </p>
          </div>
        </motion.section>

        {/* === School Overview === */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row-reverse items-center gap-12"
        >
          <div className="md:w-1/2 relative">
            <div className="relative w-72 h-72 rounded-[50%] overflow-hidden shadow-xl">
              <Image src="/images/school.jpg" alt="School Overview" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-blue-700">Our Story</h2>
            <p className="text-lg leading-relaxed">
              Founded in 2005, Rainbow Academy began with a small group of
              passionate educators. Over the years, we’ve grown into one of the
              region’s most respected institutions, blending innovation with
              tradition.
            </p>
          </div>
        </motion.section>

        {/* === Achievements === */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-yellow-700 mb-10">Achievements & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Best School 2023", "Innovation in Education 2022", "Cultural Excellence 2021"].map(
              (award, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
                >
                  <div className="w-24 h-24 mx-auto bg-yellow-200 rounded-full mb-4" />
                  <h3 className="text-xl font-semibold">{award}</h3>
                  <p className="text-gray-600 mt-2">
                    Recognized for excellence and commitment to student success.
                  </p>
                </div>
              )
            )}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
