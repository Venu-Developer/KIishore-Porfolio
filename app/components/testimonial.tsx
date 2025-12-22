"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const testimonials = [
  {
    quote:
      "Energetically build alternative scenarios via cross-unit applications.",
    author: "Jhon Smith",
  },
  {
    quote:
      "Unleash strategies via seamless cross-unit initiatives for portals.",
    author: "Jhon Smith",
  },
  {
    quote:
      "Aliquam vehicula facilisis tincidunt feugiat. Pellentesque viverra.",
    author: "Jhon Smith",
  },
];

const logos = [
  "/logos/matrixian.png",
  "/logos/google.png",
  "/logos/factual.png",
  "/logos/airbnb.png",
  "/logos/chase.png",
  "/logos/logitech.png",
];

// ✅ Correctly typed variants
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ FIXED (no string)
    },
  },
};

export default function Testimonials() {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-orange-500 font-semibold">Testimonial</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Client feedback
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className="bg-gray-100 px-6 py-4 rounded-xl shadow-sm"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                “{t.quote}”
              </p>
              <p className="font-semibold text-sm mt-3 text-black">
                — {t.author}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          className="flex flex-wrap justify-center mt-16 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
              className="opacity-70"
            >
              <Image
                src={logo}
                alt="logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
