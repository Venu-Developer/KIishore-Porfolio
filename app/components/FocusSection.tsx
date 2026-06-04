"use client";

import { Compass, TrendingUp, FileText, Layers, LucideIcon } from "lucide-react";
import portfolioData from "../../data/portfolio.json";
import { FocusSectionData } from "../../types/portfolio";
import { motion } from "framer-motion";

const data: FocusSectionData = portfolioData.focusSection;

// Map strings to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  "trending-up": TrendingUp,
  "file-text": FileText,
  layers: Layers,
};

export default function FocusSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-24 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-wide">
            {data.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {data.subHeading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Compass;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] hover:border-orange-300 hover:shadow-[0_8px_30px_rgb(249,178,51,0.15)] cursor-pointer overflow-hidden"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 p-4 bg-[#F5F5F5] rounded-xl border border-gray-100 group-hover:border-orange-400 group-hover:bg-orange-50 transition-colors duration-500">
                    <IconComponent
                      size={32}
                      className="text-gray-700 group-hover:text-orange-500 transition-colors duration-500"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light group-hover:text-gray-800 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
