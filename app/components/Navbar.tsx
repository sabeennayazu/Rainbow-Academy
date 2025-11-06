"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News & Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:text-orange-500 transition"
        >
          Rainbow Academy
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Enroll Button (Desktop) */}
        <Link
          href="/enroll"
          className={`hidden md:inline px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            scrolled
              ? "bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white"
              : "border border-white text-white hover:bg-white hover:text-black"
          }`}
        >
          Enroll Now
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden absolute top-full left-0 w-full flex flex-col items-center gap-4 py-6 transition-all duration-300 ${
            scrolled ? "bg-white text-black shadow-md" : "bg-black/80 text-white"
          }`}
        >
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-blue-500"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/enroll"
            onClick={() => setOpen(false)}
            className="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-orange-500 text-white hover:bg-orange-600"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
