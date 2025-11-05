"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EnrollNowPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#e0f7fa,#ffffff,#e3f2fd)] text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center py-24 px-6 md:px-12 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/enroll.jpg')"
        
         }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Decorative blurred circles */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-[700px] h-[700px] bg-cyan-200 rounded-full blur-3xl opacity-20 top-[-200px] left-[-200px]"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl opacity-15 bottom-[-150px] right-[-150px]"
        ></motion.div>

        {/* Text Content */}
        <div className="relative z-10 mt-14 pt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
          >
            Join Our Learning Family
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl text-gray-100 text-lg md:text-xl mx-auto drop-shadow-md"
          >
            Be part of Rainbow Academy — where education meets inspiration.
            Experience growth, creativity, and a brighter future with us.
          </motion.p>

          
        </div>
      </section>
      <section className=" flex justify-center ">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10"
          >
            <Link
              href="/enroll"
              className="inline-block px-8 py-4 bg-[linear-gradient(90deg,#00bcd4,#1976d2)] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition"
            >
              Agree & Continue
            </Link>
          </motion.div></section>

      {/* Image Showcase / Highlights */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our Vibrant Campus
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/images/campus1.jpg",
            "/images/classroom1.jpg",
            "/images/activity1.jpg",
            "/images/library.jpg",
            "/images/lab.jpg",
            "/images/sports.jpg",
          ].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 aspect-4/3"
            >
              <Image
                src={src}
                alt={`Gallery ${i}`}
                fill
                className="object-cover opacity-85 hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to-top,rgba(0,0,0,0.4),transparent)]"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[linear-gradient(135deg,#ffffff,#f1f8ff)] py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Why Choose Rainbow Academy?
          </h2>
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
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-[linear-gradient(145deg,#e0f7fa,#ffffff)] rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
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

      {/* CTA Section */}
      <section className="relative py-24 text-center text-white bg-[linear-gradient(90deg,#00acc1,#1565c0)] overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            Take the First Step Toward a Bright Future
          </h2>
          <p className="text-lg mb-10 text-blue-100">
            Enrollment is open for the new academic year. Let’s make your
            learning journey extraordinary!
          </p>
          <Link
            href="/enroll"
            className="inline-block px-10 py-4 bg-white text-cyan-700 font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            Enroll Now
          </Link>
        </motion.div>

        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}
