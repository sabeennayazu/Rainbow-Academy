"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function EnrollNowPage() {
const ref = useRef(null);
const { scrollYProgress } = useScroll({
target: ref,
offset: ["start start", "end start"],
});
const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

return ( <main className="text-gray-900 font-[Poppins] bg-[linear-gradient(135deg,#e0f7fa,#ffffff,#e3f2fd)] overflow-hidden">
{/* ===== Hero Section with Parallax ===== */} <section
     ref={ref}
     className="relative flex flex-col items-center justify-center text-center py-24 px-6 md:px-12 overflow-hidden bg-cover bg-center mb-20 h-[80vh]"
   >
{/* Parallax background image */}
<motion.div style={{ y }} className="absolute inset-0"> <Image
         src="/images/enroll.jpg"
         alt="Enroll Background"
         fill
         priority
         className="object-cover brightness-50"
       />
</motion.div>

```
    {/* Overlay for readability */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Decorative blurred circles */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="absolute w-[700px] h-[700px] bg-cyan-300 rounded-full blur-3xl opacity-30 top-[-250px] left-[-250px]"
    />
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="absolute w-[600px] h-[600px] bg-blue-300 rounded-full blur-3xl opacity-20 bottom-[-150px] right-[-150px]"
    />

    {/* Text Content */}
    <div className="relative z-10 mt-14 pt-16">
      <motion.h1
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
      >
        Join Our Learning Family
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl text-gray-100 text-lg md:text-xl mx-auto drop-shadow-md"
      >
        Be part of Rainbow Academy — where education meets inspiration. Experience growth,
        creativity, and a brighter future with us.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 flex justify-center"
      >
        <Link
          href="/enroll"
          className="px-14 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
        >
          Enroll Now
        </Link>
      </motion.div>
    </div>
  </section>

  {/* ===== Image Showcase ===== */}
  <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
      Explore Our Vibrant Campus
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "/images/reception.jpg",
        "/images/classroom.jpg",
        "/images/corridor.jpg",
        "/images/library.jpg",
        "/images/lab.jpg",
        "/images/basketball.jpg",
      ].map((src, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0px 15px 25px rgba(0,0,0,0.3)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 aspect-4/3 cursor-pointer"
        >
          <Image
            src={src}
            alt={`Gallery ${i}`}
            fill
            className="object-cover opacity-85 hover:opacity-100 transition duration-500"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to-top,rgba(0,0,0,0.4),transparent)]"></div>
        </motion.div>
      ))}
    </div>
  </section>

  {/* ===== Why Choose Us ===== */}
  <section className="bg-[linear-gradient(135deg,#ffffff,#f1f8ff)] py-20 px-6 md:px-12">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Why Choose Rainbow Academy?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Expert Faculty", icon: "🎓" },
          { title: "Modern Classrooms", icon: "🏫" },
          { title: "Creative Learning", icon: "✨" },
          { title: "Safe Environment", icon: "🛡️" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-3">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              posuere metus non erat porttitor.
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* ===== CTA Section ===== */}
  <section className="relative py-24 text-center text-white bg-gradient-to-r from-cyan-500 to-blue-700 overflow-hidden">
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
        Take the First Step Toward a Bright Future
      </h2>
      <p className="text-lg mb-10 text-blue-100 drop-shadow-sm">
        Enrollment is open for the new academic year. Let’s make your learning journey
        extraordinary!
      </p>
      <Link
        href="/enroll"
        className="inline-block px-12 py-4 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
      >
        Enroll Now
      </Link>
    </motion.div>

    {/* Floating blurred shapes */}
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
    ></motion.div>
    <motion.div
      animate={{ rotate: [360, 0] }}
      transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"
    ></motion.div>
  </section>
</main>


);
}
