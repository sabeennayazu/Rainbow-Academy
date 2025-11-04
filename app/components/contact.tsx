"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message submitted!"); // Replace with API call later
  };

  return (
    <section className="min-h-screen bg-white text-black flex flex-col md:flex-row bg-gray-100 px-8 md:px-16 pt-16 ">
      
      {/* Left: Contact Form */}
      <div className="md:w-1/2 md:pr-12 mb-12 md:mb-0 shadow">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            required
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right: Contact Info + Google Map */}
      <div className="md:w-1/2 md:pl-12 flex flex-col gap-6">
        {/* Info */}
        <div className="bg-white rounded shadow p-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold">Our Information</h3>
          <p><strong>Address:</strong> 123 Rainbow Street, City, Country</p>
          <p><strong>Email:</strong> info@rainbowacademy.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>

        {/* Google Map */}
        <div className="w-full h-64 md:h-80 rounded overflow-hidden shadow">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.0114589697523!2d85.38904837546553!3d27.65511717621251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1086ac9677cb%3A0xf91bc405e7adddea!2sRainbow%20English%20Secondary%20School!5e0!3m2!1sen!2snp!4v1762242451698!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen={false}
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
