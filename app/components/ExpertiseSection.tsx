"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import portfolioData from "../../data/portfolio.json";
import { ExpertiseData } from "../../types/portfolio";

const data: ExpertiseData = portfolioData.expertise;

export default function ExpertiseSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-32">
        
        {/* LEFT SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-wide">
              {data.leftTitle}
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>
          
          <ul className="space-y-6">
            {data.leftItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-5 group cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                  <CheckCircle2 size={24} className="text-orange-500" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold text-gray-800 group-hover:text-black transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <div className="mb-12 md:pl-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-wide">
              {data.rightTitle}
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>
          
          <ul className="space-y-6 md:pl-8">
            {data.rightItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-5 group cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                  <CheckCircle2 size={24} className="text-orange-500" strokeWidth={2.5} />
                </div>
                <span className="text-2xl font-bold text-gray-800 group-hover:text-black transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
