// "use client";

// import React from "react";
// import { ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Top Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

//           {/* Left Side */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-4xl font-semibold leading-tight">
//               <span className="inline-block w-4 h-4 bg-orange-400 rounded-full mr-2"></span>
//               Let’s work
//               <br /> together
//             </h2>

//             {/* Social Icons */}
//             <div className="flex items-center gap-4 mt-6 text-gray-300 text-sm">
//               <span>Based in Germany</span>
//               <span> | </span>
//               <a href="#" className="hover:text-white transition">Be</a>
//               <a href="#" className="hover:text-white transition">in</a>
//               <a href="#" className="hover:text-white transition">⚙</a>
//             </div>
//           </motion.div>

//           {/* Contact Box 1 */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="bg-black border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform"
//           >
//             <p className="text-gray-400 mb-4 text-sm">Looking for a hectic designer?</p>
//             <div className="flex items-center justify-between">
//               <p className="text-orange-400 font-medium">hello@henry.com</p>
//               <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1" />
//             </div>
//           </motion.div>

//           {/* Contact Box 2 */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="bg-black border border-gray-700 rounded-2xl p-6 hover:scale-105 transition-transform"
//           >
//             <p className="text-gray-400 mb-4 text-sm">Want a more in-depth look at my history?</p>
//             <div className="flex items-center justify-between">
//               <p className="text-orange-400 font-medium">+598 6879 9874</p>
//               <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1" />
//             </div>
//           </motion.div>

//         </div>

//         {/* Big Name */}
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="text-[70px] md:text-[100px] font-extrabold text-center mt-20 tracking-tight text-[#f2d8c7]"
//         >
//           KISHORE KUMAR
//         </motion.h1>

//         <hr className="border-gray-700 my-10" />

//         {/* Bottom Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           className="flex flex-col md:flex-row justify-between text-gray-400 text-sm"
//         >
//           <p>©2025 Mark Henry, All Rights Reserved</p>
//           <a href="#" className="mt-4 md:mt-0 hover:text-white flex items-center gap-1 transition">
//             Back to Top <ArrowUpRight size={14} />
//           </a>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const oneLookDetails = [
  { label: "Name", value: "Kishore Kumar" },
  { label: "Role", value: "Brand Strategist and Creative Professional" },
  { label: "Experience", value: "2+ Years in Branding and Digital Marketing" },
  { label: "Specialization", value: "Content Marketing, Copywriting, Scripts, Strategy" },
  { label: "Work Type", value: "Freelance and Project Based" },
  { label: "Availability", value: "Open for New Projects" },
  { label: "Email", value: "kishore.dmme@gmail.com" },
  { label: "Location", value: "Tamil Nadu, India" },
  { label: "Language", value: "English, Tamil" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-5xl font-semibold mb-4">
            Let’s work together
          </h2>
          <p className="text-gray-400">
            Based in India | LinkedIn
          </p>
        </motion.div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
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

        {/* ================= ONE LOOK DETAILS ================= */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-10"
        >
          Kishore in One Look
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 mb-24">
          {oneLookDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-gray-700 pb-4"
            >
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                {item.label}
              </p>
              <p className="text-lg font-medium">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ================= BIG NAME ================= */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[70px] md:text-[110px] font-extrabold text-center text-[#f2d8c7]"
        >
          KISHORE KUMAR
        </motion.h1>

        <hr className="border-gray-700 my-10" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>©2025 Kishore Kumar. All Rights Reserved</p>
          <a href="#" className="flex items-center gap-1 hover:text-white mt-4 md:mt-0">
            Back to Top <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}

