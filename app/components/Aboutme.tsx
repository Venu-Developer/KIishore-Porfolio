"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const resumeData = {
  about: {
    title: "About Me",
    content: `
      Mark Henry, Product Designer based in Germany.
      Lover of words, crafting copy that reflects identity and purpose.
      Creating communication that resonates and connects.
    `,
  },
  experience: {
    title: "Experience",
    content: `
      Over 12+ years of product design experience across multiple industries.
      Building user-centered solutions with functional design systems.
    `,
  },
  education: {
    title: "Education",
    content: `
      Bachelor in Product Design, Berlin Design School.
      Certified UX & Interaction Designer.
    `,
  },
  skills: {
    title: "Skills",
    content: `
      UX Design, UI Design, Wireframing, Prototyping,
      Branding, User Research, Visual Design.
    `,
  },
  awards: {
    title: "Awards",
    content: `
      Best Product Designer Award – 2021.
      German UX Innovation Award – 2023.
    `,
  },
};

export default function Aboutme() {
  const [activeKey, setActiveKey] = useState("about");

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full py-20 px-5 sm:px-8 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-orange-500 font-semibold">About Me</p>

        <div className="relative inline-block mt-2">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black relative z-10">
            My Journey
          </h2>
          <span className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#F9B233] rounded-full -z-10 opacity-80"></span>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT MENU */}
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          {Object.keys(resumeData).map((key) => (
            <motion.button
              key={key}
              onClick={() => setActiveKey(key)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`text-left px-5 py-3 rounded-md border transition-all cursor-pointer
                ${activeKey === key
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }`}
            >
              {resumeData[key].title}
            </motion.button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          key={activeKey} // triggers animation on tab change
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="w-full md:w-2/3 p-6 bg-orange-100 rounded-xl shadow-sm border"
        >
          <h2 className="text-2xl font-bold mb-3 text-black">
            {resumeData[activeKey].title}
          </h2>
          <p className="text-gray-700 leading-7 whitespace-pre-line">
            {resumeData[activeKey].content}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
