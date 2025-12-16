"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold leading-tight">
              <span className="inline-block w-4 h-4 bg-orange-400 rounded-full mr-2"></span>
              Let’s work
              <br /> together
            </h2>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6 text-gray-300 text-sm">
              <span>Based in Germany</span>
              <span> | </span>
              <a href="#" className="hover:text-white transition">Be</a>
              <a href="#" className="hover:text-white transition">in</a>
              <a href="#" className="hover:text-white transition">⚙</a>
            </div>
          </motion.div>

          {/* Contact Box 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <p className="text-gray-400 mb-4 text-sm">Looking for a hectic designer?</p>
            <div className="flex items-center justify-between">
              <p className="text-orange-400 font-medium">hello@henry.com</p>
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>

          {/* Contact Box 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-black border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform"
          >
            <p className="text-gray-400 mb-4 text-sm">Want a more in-depth look at my history?</p>
            <div className="flex items-center justify-between">
              <p className="text-orange-400 font-medium">+598 6879 9874</p>
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>

        </div>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[70px] md:text-[100px] font-extrabold text-center mt-20 tracking-tight text-[#f2d8c7]"
        >
          KISHORE KUMAR
        </motion.h1>

        <hr className="border-gray-700 my-10" />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row justify-between text-gray-400 text-sm"
        >
          <p>©2025 Mark Henry, All Rights Reserved</p>
          <a href="#" className="mt-4 md:mt-0 hover:text-white flex items-center gap-1 transition">
            Back to Top <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
