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
    <section className="w-full bg-[#292929] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#E5E7EB] mb-6 tracking-wide">
            {data.heading}
          </h2>
          <p className="text-lg md:text-xl text-[#9CA3AF] max-w-3xl mx-auto font-light leading-relaxed">
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
                className="group relative bg-[#292929]/40 backdrop-blur-md border border-[#fff]/30 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:scale-[1.02] hover:border-[#D4AF37]/50 hover:shadow-[0_8px_30px_rgb(212,175,55,0.05)] cursor-pointer overflow-hidden"
              >
                {/* Subtle gradient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                  <div className="flex-shrink-0 p-4 bg-[#232731] rounded-xl border border-[#333845] group-hover:border-[#F9B233] transition-colors duration-500">
                    <IconComponent
                      size={32}
                      className="text-[#E2E8F0] group-hover:text-[#F9B233] transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <h3 className="text-2xl font-semibold text-[#F3F4F6] mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#9CA3AF] leading-relaxed font-light group-hover:text-[#D1D5DB] transition-colors">
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
