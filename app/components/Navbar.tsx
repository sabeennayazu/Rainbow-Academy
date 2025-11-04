"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Left: Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-blue-600 transition"
        >
          Rainbow Academy
        </Link>

        {/* Center: Nav Links */}
        <ul className="flex gap-10 text-lg font-medium justify-center items-center">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Enroll Button */}
        <Link
          href="/enroll"
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-orange-500 text-white border border-orange-500 hover:bg-orange-600"
              : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Enroll Now
        </Link>
      </nav>
    </header>
  );
}
