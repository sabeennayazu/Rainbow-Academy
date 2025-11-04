"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="text-gray-800">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <Image
          src="/images/aboutus.jpg"
          alt="About Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-6xl font-bold text-white">About Us</h1>
      </section>

      {/* ===== About Section ===== */}
      <section className=" mx-auto px-6 py-20 leading-relaxed bg-white">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">
          Who We Are
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <p className="mb-6 text-lg">
              Rainbow Academy is a dynamic educational institution dedicated to
              inspiring students through creativity, knowledge, and values.
              We believe education should empower minds, shape character, and
              nurture lifelong curiosity.
            </p>
            <p className="text-lg">
              Our classrooms are filled with motivation, teamwork, and purpose.
              From academics to extracurriculars, we create an environment that
              helps each learner discover their true potential.
            </p>
          </div>

          {/* Oval/Sphere Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-xl">
              <Image
                src="/images/vision.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mission / Values ===== */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-blue-700">
            Our Aim & Values
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            
            {/* Sphere image left side */}
            <div className="md:w-1/3 flex justify-center order-2 md:order-1">
              <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/images/mission.jpg"
                  alt="Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="md:w-2/3 order-1 md:order-2">
              <p className="text-lg mb-6">
                Our mission is to provide holistic education where discipline,
                curiosity, and compassion coexist. We help students not just
                succeed academically but grow as responsible individuals.
              </p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Discipline and respect for everyone</li>
                <li>Curiosity-driven learning</li>
                <li>Integrity and teamwork</li>
                <li>Leadership through service</li>
                <li>Continuous self-improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
