"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ================= Navigation Links =================
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Expect From Me", href: "#expect-from-me" },
  // { name: "Achievements", href: "#achievements" }, // fixed spelling
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" }, // corrected
  // { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-end items-center h-auto py-4">
        {/* LOGO */}
        {/* <Link href="/" className="text-2xl font-bold text-white">
          MyLogo
        </Link> */}

        {/* DESKTOP MENU */}
        {/* <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-gray-200 font-medium transition"
            >
              {item.name}
            </Link>
          ))}
        </div> */}

        {/* MOBILE MENU BUTTON */}
        {/* className="md:hidden text-3xl text-white" */}
        <button
          className=" text-3xl text-white bg-black p-1 rounded-md"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={` bg-black/60 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          open ? "max-h-auto" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-4">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 border-b border-white/20 text-white hover:text-gray-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
