"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message submitted!"); // Replace with API call later
  };

  return (
    <section className="py-16 bg-orange-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Form */}
        <div className="bg-white shadow-md rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              required
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info + Map */}
        <div className="flex flex-col gap-6">
          {/* Info Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 flex flex-col gap-3">
            <h3 className="text-2xl font-semibold text-blue-500">
              Our Information
            </h3>
            <p className="text-gray-600">
              <strong>Address:</strong> 123 Rainbow Street, City, Country
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@rainbowacademy.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +123 456 7890
            </p>
          </div>

          
        </div>
      </div>
    </section>
  );
}
