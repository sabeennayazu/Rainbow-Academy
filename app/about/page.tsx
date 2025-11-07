"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 150]);

  const stats = [
    { num: 500, label: "Students" },
    { num: 50, label: "Teachers" },
    { num: 1200, label: "Alumni" },
    { num: 20, label: "Awards" },
  ];

  return (
    <main className="text-gray-800 font-[Poppins] overflow-x-hidden bg-gradient-to-b from-white to-blue-100">
      {/* === Hero Parallax === */}
      <section ref={ref} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image src="/images/aboutus.jpg" alt="about" fill priority className="object-cover brightness-50" />
        </motion.div>
        <h1 className="relative text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">About Us</h1>
      </section>

      <div className="relative z-10 -mt-20 space-y-32 px-6 pb-32 md:px-10 lg:px-16 max-w-6xl mx-auto">

        {/* === Vision & Mission === */}
        <motion.section initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }} className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-700">Our Vision</h2>
            <p>To nurture confident, compassionate, and creative learners who make a positive difference globally.</p>
            <h2 className="text-4xl font-bold text-blue-700 mt-8">Our Mission</h2>
            <p>We strive to provide a learning space that inspires curiosity, teamwork, and lifelong values.</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} className="relative w-72 h-72 rounded-[55%] overflow-hidden shadow-2xl">
              <Image src="/images/mission.jpg" alt="mission" fill className="object-cover" />
            </motion.div>
          </div>
        </motion.section>

        {/* === History === */}
        <motion.section initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }} className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <motion.div whileHover={{ rotate: 2, scale: 1.03 }} className="relative w-80 h-72 rounded-3xl overflow-hidden shadow-xl">
              <Image src="/images/history.jpg" alt="history" fill className="object-cover" />
            </motion.div>
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-blue-700">Our History</h2>
            <p>Established in 2005, Rainbow Academy began with a handful of dedicated teachers. Through commitment, innovation, and community trust, we evolved into one of the leading educational institutions in the region.</p>
          </div>
        </motion.section>

        {/* === Achievements === */}
        <motion.section initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }} className="text-center">
          <h2 className="text-4xl font-bold text-yellow-700 mb-10">Achievements & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Best School 2023", "Innovation in Education 2022", "Cultural Excellence 2021"].map((award, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 shadow-lg transition">
                <div className="w-20 h-20 mx-auto bg-yellow-200 rounded-full mb-4" />
                <h3 className="text-xl font-semibold">{award}</h3>
                <p className="text-gray-600 mt-2">Recognized for outstanding commitment and excellence.</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* === Stats / Counters === */}
        <motion.section initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} className="bg-blue-700 text-white rounded-3xl py-16 text-center">
          <h2 className="text-4xl font-bold mb-10">Rainbow in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-center">
                <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
                  className="text-5xl font-extrabold">{s.num}+</motion.h3>
                <p className="text-lg mt-2">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* === CTA Section === */}
        <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Enroll Now", desc: "Join our community of learners.", color: "bg-green-500" },
            { title: "Donate", desc: "Support our mission for better education.", color: "bg-yellow-500" },
            { title: "Feedback", desc: "Share your valuable thoughts with us.", color: "bg-blue-500" },
          ].map((c, i) => (
            <motion.div key={i} whileHover={{ y: -8, scale: 1.05 }} className={`${c.color} text-white p-10 rounded-3xl shadow-xl`}>
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="mb-4">{c.desc}</p>
              <button className="bg-white text-gray-800 px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">Get Started</button>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  );
}
