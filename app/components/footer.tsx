"use client";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Social Media */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook size={26} className="hover:text-blue-600 transition" />
            </a>
            
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram size={26} className="hover:text-pink-400 transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin size={26} className="hover:text-blue-500 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="#home" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-gray-400 transition">About</a></li>
            <li><a href="#programs" className="hover:text-gray-400 transition">Programs</a></li>
            <li><a href="#contact" className="hover:text-gray-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* School Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold mb-2">Rainbow Academy</h3>
          <p><strong>Address:</strong> 123 Rainbow Street, City, Country</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> info@rainbowacademy.com</p>
          <p><strong>Availability:</strong> Mon - Fri: 8:00am - 5:00pm</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400">
        © {new Date().getFullYear()} Rainbow Academy. All rights reserved.
      </div>
    </footer>
  );
}
