"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="text-gray-800 font-[Poppins] bg-amber-50">
      {/* ===== Hero Section ===== */}
        <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden mb-20">
      {/* Background image */}
      <Image
        src="/images/contact.jpg"
        alt="Contact Banner"
        fill
        className="object-cover  brightness-50"
        priority
      />

      {/* Optional gradient overlay */}

      {/* Heading text */}
      <h1 className="relative text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
        Contact Us
      </h1>
    </section>
      {/* ===== Contact Info ===== */}
      <section className="max-w-6xl mx-auto bg-white px-6 py-20 grid md:grid-cols-2 gap-10">
        {/* Info Section */}
        <div className="space-y-4 px-10">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700">
            We’d love to hear from you! Whether you have questions, feedback,
            or want to visit our campus, we’re always here to help.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600 w-6 h-6" />
              <span>Rainbow Academy, Anantalingeshwor, Bhaktapur, Nepal</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600 w-6 h-6" />
              <span>+977-61-555123 | +977-9801234567</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600 w-6 h-6" />
              <span>info@rainbowacademy.edu.np</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="text-blue-600 w-6 h-6" />
              <span>Mon – Fri: 8:00 AM – 4:00 PM</span>
            </div>
          </div>

          {/* Optional extra info */}
          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
            <p className="text-blue-700 font-medium">
              Admissions Open for 2025! Visit our office for enrollment details.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white border border-gray-200 shadow-xl rounded-3xl p-8 mr-4">
          <h3 className="text-2xl font-bold mb-6 text-blue-700">
            Send a Message
          </h3>
          <form className="space-y-4 ">
            <div>
              <label className="block text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== Map Section ===== */}
      <section className="relative w-full h-[400px]">
        <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113066.36311492581!2d85.3002199564532!3d27.67638397683719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1086ac9677cb%3A0xf91bc405e7adddea!2sRainbow%20English%20Secondary%20School!5e0!3m2!1sen!2snp!4v1762321425688!5m2!1sen!2snp"
          className="absolute inset-0 w-full h-full border-none"
            allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
