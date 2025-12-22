"use client";

import { motion, type Variants, easeOut } from "framer-motion";
import {
  FiArrowUpRight,
  FiSmartphone,
  FiMonitor,
  FiGlobe,
  FiCode,
  FiImage,
  FiLayers,
} from "react-icons/fi";

/* ===================== DATA ===================== */

const specialties = [
  { title: "Mobile Apps design", icon: <FiSmartphone /> },
  { title: "UI/UX design", icon: <FiMonitor /> },
  { title: "Website design", icon: <FiGlobe /> },
  { title: "Webflow development", icon: <FiCode /> },
  { title: "Brand identity", icon: <FiImage /> },
  { title: "Interaction design", icon: <FiLayers /> },
];

/* ===================== ANIMATIONS ===================== */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ===================== COMPONENT ===================== */

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-20 px-6 sm:px-8 md:px-12 lg:px-20 bg-white"
    >
      {/* Heading */}
      <motion.div
        className="flex flex-col md:flex-row gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {/* Left Title */}
        <motion.div variants={fadeUp} className="w-full md:w-1/2 relative">
          <p className="text-orange-500 font-semibold">Services</p>

          <div className="relative inline-block mt-2">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black relative z-10">
              My specialties
            </h2>
            <span className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#F9B233] rounded-full -z-10 opacity-80" />
          </div>
        </motion.div>

        {/* Right Text */}
        <motion.div variants={fadeUp} className="w-full md:w-1/2">
          <p className="text-[#08080899] mt-4">
            Synergistically seize front-end methods of empowerment without
            extensive core competencies. Progressively repurpose alternative
            platforms.
          </p>
        </motion.div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {/* Left Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:col-span-2">
          {specialties.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                scale: 1.06,
                rotate: 1,
                boxShadow: "0px 15px 40px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative p-6 bg-[#F5F5F5] rounded-2xl shadow-sm 
                         cursor-pointer overflow-hidden group border
                         border-transparent hover:border-orange-400 duration-300"
            >
              {/* Shine */}
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                           opacity-0 group-hover:opacity-80 translate-x-[-100%] 
                           group-hover:translate-x-[200%] transition-all duration-[900ms]"
              />

              {/* Icon */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-gray-200 rounded-xl flex items-center 
                           justify-center text-2xl text-orange-500"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <div className="flex justify-between items-start mt-4">
                <p className="text-lg font-semibold text-black">
                  {item.title}
                </p>
                <FiArrowUpRight className="text-gray-500 text-xl group-hover:text-orange-500 transition" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Black Card */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
          className="p-8 bg-black text-white rounded-2xl flex flex-col justify-between shadow-lg min-h-[300px]"
        >
          <FiArrowUpRight className="text-3xl text-orange-400 self-end" />

          <div className="mt-10">
            <p className="text-orange-400 text-sm uppercase mb-1">
              Say Hello!
            </p>
            <h3 className="text-2xl font-bold break-all">
              hello@henry.com
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
