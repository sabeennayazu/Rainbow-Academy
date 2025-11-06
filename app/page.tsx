"use client";
import Image from "next/image";
import AboutSection from "./components/about";
import Contact from "./components/contact";
import Vision from "./components/vision";
import NewsSection from "./components/news";
import MessageSection from "./components/message";
import Testimonials from "./components/testimonials";

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
      <section
        className="h-screen w-full bg-fixed bg-center bg-cover flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/images/group1.jpg')" }}
      >
        {/* <div className="bg-black/40 absolute inset-0"></div> */}

        {/* Hero over the image */}
        <div className="relative z-10 px-4 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
Dream. Learn. Achieve.          </h2>
          <p className="text-lg mt-4  mx-auto md:mx-0 text-white text-center">
            We nurture curiosity, creativity, and confidence to help every student shine.
          </p>
        </div>

      </section>
    
        <NewsSection />
      
      <section className="bg-white py-20">

      <Testimonials />
      </section>
      <section
        className="h-screen w-full bg-fixed bg-center bg-cover flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/images/group3.jpg')" }}
      >
        {/* <div className="bg-black/40 absolute inset-0"></div> */}

        {/* Hero over the image */}
        <div className="relative z-10 px-4 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
Together, We Grow and Thrive          </h2>
          <p className="text-lg mt-4  mx-auto md:mx-0 text-white text-center">
Building a foundation of knowledge, character, and lifelong learning.          </p>
        </div>

      </section>
      <MessageSection />

      <Contact />


    </div>
  );
}
