"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-semibold mb-4">
            Let’s work together
          </h1>
          <p className="text-gray-400">
            Based in India | LinkedIn
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-gray-700 rounded-2xl p-8 hover:scale-105 transition"
          >
            <p className="text-gray-400 mb-4">
              Looking for a brand strategist and creative partner?
            </p>
            <div className="flex justify-between items-center">
              <p className="text-orange-400 font-medium">
                kishore.dmme@gmail.com
              </p>
              <ArrowUpRight />
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-gray-700 rounded-2xl p-8 hover:scale-105 transition"
          >
            <p className="text-gray-400 mb-4">
              Want to discuss a project or idea?
            </p>
            <div className="flex justify-between items-center">
              <p className="text-orange-400 font-medium">
                +91-99445 13575
              </p>
              <ArrowUpRight />
            </div>
          </motion.div>
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400 text-sm mb-24"
        >
          <div className="space-y-2">
            <p><span className="font-semibold text-white">Role:</span> Brand Strategist and Creative Professional</p>
            <p><span className="font-semibold text-white">Experience:</span> 2+ Years in Branding and Digital Marketing</p>
            <p><span className="font-semibold text-white">Specialization:</span> Content Marketing, Copywriting, Scripts, Strategy</p>
            <p><span className="font-semibold text-white">Work Type:</span> Freelance and Project Based</p>
            <p><span className="font-semibold text-white">Availability:</span> Open for New Projects</p>
          </div>
          <div className="space-y-2">
            <p><span className="font-semibold text-white">Email:</span> kishore.dmme@gmail.com</p>
            <p><span className="font-semibold text-white">Location:</span> Tamil Nadu, India</p>
            <p><span className="font-semibold text-white">Language:</span> English, Tamil</p>
          </div>
        </motion.div>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[70px] md:text-[110px] font-extrabold text-center text-[#f2d8c7]"
        >
          KISHORE KUMAR
        </motion.h1>

      </div>
    </section>
  );
}
