"use client";

import { motion, type Variants, easeOut } from "framer-motion";

/* ===================== ANIMATIONS ===================== */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
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

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* ===================== COMPONENT ===================== */

export default function Experience() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* LEFT SIDE SHAPE */}
        <motion.div
          className="relative flex justify-center"
          variants={fadeUp}
        >
          {/* Grey Abstract Shape */}
          <div
            className="bg-gray-200 w-[260px] h-[350px] rounded-[50%] rotate-[-25deg]
                       md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[500px]"
          />

          {/* 12+ Badge */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="absolute bottom-10 right-6 bg-yellow-400 text-black
                       w-20 h-20 md:w-24 md:h-24 flex flex-col justify-center items-center 
                       rounded-full font-semibold text-lg md:text-xl shadow-lg cursor-pointer"
          >
            2+
            <span className="text-[10px] md:text-xs font-medium">
              years exp
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div
          className="space-y-6"
          variants={fadeUp}
        >
          <div className="text-black">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              I Don’t Just Create Content, <br />
              I Build Brands People Remember
            </h2>
            <p className="text-gray-500 mt-2 text-lg">
              I’m Kishore Kumar — a brand strategist and creative professional helping businesses stand out with cinematic storytelling, sharp strategy, and performance-focused content. If your brand feels invisible, I help make it impossible to ignore.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 text-center md:text-left">
            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-bold text-orange-400">2M+</h3>
              <p className="text-gray-700 text-sm ">Content Views</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-bold text-orange-400">5</h3>
              <p className="text-gray-700 text-sm">Brand Success Stories</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-2xl font-bold  text-orange-400">100+</h3>
              <p className="text-gray-700 text-sm">Scripts Written</p>
            </motion.div>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="px-6 py-3 bg-black text-white rounded-lg transition-all"
          >
           See My Works
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
