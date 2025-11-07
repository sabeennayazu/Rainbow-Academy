"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white min-h-screen">
      {/* Left: Text */}
      <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-black">
          About Rainbow Academy
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-4 text-black leading-relaxed">
          Rainbow Academy is committed to providing quality education and fostering creativity among students.
          Our goal is to inspire learners and prepare them for a bright future.
        </p>

        <p className="text-base sm:text-lg md:text-xl mb-6 text-black leading-relaxed">
          We offer a variety of programs that encourage intellectual curiosity,
          social development, and personal growth. Our experienced faculty and modern infrastructure
          ensure a safe and stimulating learning environment.
        </p>

        {/* Button */}
        <button className="mt-4 px-6 py-3 border-2 border-black text-black font-semibold rounded relative overflow-hidden group w-max mx-auto md:mx-0 hover:text-white transition-colors">
          <span className="absolute inset-0 bg-black translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            Know More <ArrowRight size={20} />
          </span>
        </button>
      </div>

     {/* Right: Image */}
<div className="w-full md:w-1/2 relative h-[50vh] sm:h-[60vh] md:h-screen flex justify-center items-center">
  <Image
    src="/images/a2.jpg"
    alt="About Rainbow Academy"
    fill
    className="object-cover object-right md:object-contain "
    priority
  />
</div>

    </section>
  );
}
