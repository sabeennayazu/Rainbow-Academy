"use client";
import Image from "next/image";
import AboutSection from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Vision from "./components/vision";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* ===== First Background ===== */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Image
          src="/images/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/40 -z-10"></div>

    

      {/* ===== Hero Section (Over first image) ===== */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center text-white text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Welcome to Rainbow Academy
        </h1>
        <p className="text-xl mt-4">Where learning meets inspiration</p>
      </section>

      {/* ===== About Section ===== */}
      <AboutSection />
{/* ===== Second Background Section (with Parallax) ===== */}
<section
  className="h-screen w-full bg-fixed bg-center bg-cover flex flex-col justify-center items-center text-white text-center"
  style={{ backgroundImage: "url('/images/group.jpg')" }}
>
  {/* <div className="bg-black/40 absolute inset-0"></div> */}

  {/* Hero over the image */}
  <div className="relative z-10 px-4">
    <h2 className="text-5xl md:text-7xl font-bold">
      Together We Achieve More
    </h2>
    <p className="text-lg mt-4 max-w-xl mx-auto">
      Our community grows through teamwork, creativity, and shared learning.
    </p>
  </div>
</section>

      {/* ===== Contact Section ===== */}
      <Vision />
      <Contact />
      

    </div>
  );
}
