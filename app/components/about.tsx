"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white">
   {/* Left: Text */}
      <div className="md:w-1/2 p-12 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          About Rainbow Academy
        </h2>
        <p className="text-lg md:text-xl mb-4 text-black leading-relaxed">
          Rainbow Academy is committed to providing quality education and fostering creativity among students.
          Our goal is to inspire learners and prepare them for a bright future.
        </p>
        <p className="text-lg md:text-xl mb-6 text-black leading-relaxed">
          We offer a variety of programs that encourage intellectual curiosity, 
          social development, and personal growth. Our experienced faculty and modern infrastructure 
          ensure a safe and stimulating learning environment.
        </p>
        
        {/* Button */}
        <button className="mt-4 px-6 py-3 border-2 border-black text-black font-semibold rounded relative overflow-hidden group w-max hover: hover:text-white">
          <span className="absolute inset-0 bg-black  translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            Know More <ArrowRight size={20} />
          </span>
        </button>
      </div>

      {/* Right: Full half Image */}
      <div className="md:w-1/2 relative h-[50vh] md:h-screen">
        <Image
          src="/images/about.jpg"
          alt="About Rainbow Academy"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
