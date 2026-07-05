"use client";

import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";

export default function ZigZagSection() {
  const data = (portfolioData as any).zigZagSection;

  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section className="w-full bg-[#111] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            {data.heading}
          </h2>
          {data.subHeading && (
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-4 font-light leading-relaxed">
              {data.subHeading}
            </p>
          )}
        </motion.div>

        <div className="space-y-24">
          {data.items.map((item: any, index: number) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={item.id || index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
                className={`sticky flex flex-col gap-12 lg:gap-16 items-center bg-[#1a1a1a] p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] border border-gray-800 shadow-2xl ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} max-h-[90vh] overflow-y-auto hide-scrollbar`}
                style={{
                  top: `calc(10vh + ${index * 15}px)`,
                  zIndex: index
                } as React.CSSProperties}
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>

                {/* Video/Image Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex justify-center"
                >
                  <div className="w-full max-w-[550px] aspect-video rounded-2xl overflow-hidden bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[4px] border-[#222]">
                    <video
                      src={item.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
