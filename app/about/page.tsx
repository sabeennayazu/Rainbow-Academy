"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="text-gray-800 font-[Poppins]">
      {/* ===== Hero Section ===== */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image src="/images/aboutus.jpg" alt="About Banner" fill className="object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/20"></div>
        <h1 className="relative text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
          About Us
        </h1>
      </section>

      {/* ===== Vision & Mission ===== */}
      <section className="bg-linear-to-r from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-4xl font-bold text-blue-700">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              To nurture confident, compassionate, and creative learners who make
              a positive difference in the world through knowledge and kindness.
            </p>
            <h2 className="text-4xl font-bold text-blue-700 mt-8">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our mission is to create an engaging learning environment that
              encourages curiosity, teamwork, and lifelong learning — blending
              academics with moral and emotional growth.
            </p>
          </div>

          {/* Decorative Shape */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 bg-white rounded-[3rem] rotate-6 overflow-hidden shadow-2xl hover:rotate-0 transition">
              <Image src="/images/mission.jpg" alt="Mission Image" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Principal’s Message ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 relative">
            {/* Hexagon shape */}
            <div className="w-56 h-56 bg-gray-200 clip-hex shadow-lg overflow-hidden">
              <Image src="/images/principal.jpg" alt="Principal" fill className="object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-4xl font-bold text-blue-700">Principal’s Message</h2>
            <p className="text-lg leading-relaxed">
              At Rainbow Academy, we value every learner as unique. Our goal is
              to empower students to think independently, act responsibly, and
              lead compassionately in a fast-changing world.
            </p>
            <p className="italic font-semibold text-blue-600">— Principal, Rainbow Academy</p>
          </div>
        </div>
      </section>

      {/* ===== School Overview ===== */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2 relative">
            {/* Triangle shape */}
            <div className="relative w-64 h-64 bg-gray-300 clip-triangle shadow-xl overflow-hidden">
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
        </div>
      </section>

      {/* ===== Achievements / Awards ===== */}
      <section className="bg-linear-to-r from-yellow-50 to-yellow-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-700 mb-10">Achievements & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Best School 2023", "Innovation in Education 2022", "Cultural Excellence 2021"].map(
              (award, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
                >
                  <div className="w-24 h-24 mx-auto bg-yellow-200 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold">{award}</h3>
                  <p className="text-gray-600 mt-2">
                    Recognized for excellence and commitment to student success.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

/* === Custom Shape Clips (Add to globals.css) ===
.clip-hex {
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}
.clip-triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
*/
