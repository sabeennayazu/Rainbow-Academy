"use client";
import Image from "next/image";
import { CalendarDays, Trophy, Newspaper } from "lucide-react";
import { useState } from "react";
import Carousel from "../components/carousal";

export default function NewsEventsPage() {
  const [active, setActive] = useState(0);

  const slides = [
    "/images/fair.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
  ];

  const newsData = [
    {
      title: "Science Fair ",
      img: "/images/9.jpg",
      desc: "Our students displayed creativity and teamwork in this year’s science fair!",
    },
    {
      title: "Handwriting Improvement Training",
      img: "/images/5.jpg",
      desc: "Handwriting improvement training for students with the help of vedanta academy pvt. ltd.",
    },
    {
      title: "Cultural Day Success",
      img: "/images/53.jpg",
      desc: "An amazing day full of colors, performances, and unity among students.",
    },
  ];

  const events = [
    { date: "Nov 12", title: "Inter-House Quiz", desc: "Fun challenge for grades 6–10." },
    { date: "Nov 25", title: "Annual Sports Day", desc: "Cheer for your houses!" },
    { date: "Dec 10", title: "Winter Art Exhibition", desc: "Creative artworks on display." },
  ];

  const achievements = [
    "National Debate Winner",
    "STEM Olympiad Gold",
    "Best Green School Award",
  ];

  return (
    <main className="text-gray-800 font-[Poppins] bg-white overflow-x-hidden">
      {/* ===== Hero Section with Fixed Parallax Background ===== */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover brightness-50"
          style={{ backgroundImage: "url('/images/a4.jpg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-black/20"></div>
        <h1 className="relative text-6xl font-extrabold text-white drop-shadow-lg tracking-wide z-10">
          News & Events
        </h1>
      </section>

      {/* ===== School News ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10 -mt-12 bg-white rounded-t-3xl shadow-md">
        <div className="flex items-center gap-3 mb-8">
          <Newspaper className="text-blue-700 w-8 h-8" />
          <h2 className="text-4xl font-bold text-blue-700">Latest School News</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((news, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="relative h-48 w-full mb-4 rounded-2xl overflow-hidden ">
                <Image src={news.img} alt={news.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 text-sm">{news.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Achievements ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-8">
            <Trophy className="text-yellow-600 w-8 h-8" />
            <h2 className="text-4xl font-bold text-blue-800">Recent Achievements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((award, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  🏅
                </div>
                <h3 className="text-xl font-semibold mb-2">{award}</h3>
                <p className="text-gray-600 text-sm">
                  We are proud of our talented students who made this possible.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Event Highlights (Carousel) ===== */}
      <Carousel />

      {/* ===== Upcoming Events ===== */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-700 font-bold text-xl">{event.date}</span>
                  <span className="text-gray-500 text-sm">2025</span>
                </div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
