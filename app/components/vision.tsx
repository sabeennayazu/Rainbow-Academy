"use client";
import Image from "next/image";
import React from "react";

export default function VisionPage() {
  return (
    <main className="bg-orange-50 text-gray-800 py-20 px-6 md:px-16 overflow-hidden">
      {/* Vision Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-32">
        {/* Text */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/icons/vision.svg" alt="Vision Icon" width={40} height={40} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
          </div>
          <p className="leading-relaxed text-gray-600 text-lg">
            We envision Rainbow Academy as a dynamic and inspiring educational institution that sets
            an example for the learning community. We are committed to providing an outstanding
            learning environment to our students, enabling them to excel and thrive in a complex,
            constantly changing world that is becoming more interconnected every day.
          </p>
        </div>

        {/* Image blob */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-orange-100 rounded-[60%_40%_50%_50%/60%_40%_50%_50%] overflow-hidden shadow-lg">
            <Image
              src="/images/2.jpg"
              alt="Vision"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Text */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/icons/mission.svg" alt="Mission Icon" width={40} height={40} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <p className="leading-relaxed text-gray-600 text-lg">
            The mission of Rainbow Academy is to produce lifelong learners with a value system that
            turns them into good human beings. Honesty, integrity, and sincerity are the core values
            that form the strong foundation on which we build an educational process, culminating in
            both academic and personal success of our students.
          </p>
        </div>

        {/* Image blob */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-blue-100 rounded-[60%_40%_50%_50%/50%_60%_40%_50%] overflow-hidden shadow-lg">
            <Image
              src="/images/38.jpg"
              alt="Mission"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
