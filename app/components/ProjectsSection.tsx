"use client";

import { CheckCircle2 } from "lucide-react";
import portfolioData from "../../data/portfolio.json";
import { ProjectsSectionData } from "../../types/portfolio";
import { motion } from "framer-motion";
import PdfViewer from "./PdfViewer";

const data: ProjectsSectionData = portfolioData.projectsSection;

export default function ProjectsSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-wide">
            {data.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {data.subHeading}
          </p>
        </motion.div>

        <div className="relative space-y-12 pb-32">
          {data.projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
                className={`relative flex flex-col-reverse gap-6 lg:gap-12 items-start lg:items-stretch bg-white border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Text Content */}
                <div
                  className="w-full lg:w-1/2 flex flex-col justify-start py-4"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    {project.title}
                  </h3>
                  <p className="text-xl text-orange-500 italic font-medium mb-6">
                    {project.tagline}
                  </p>

                  <div className="space-y-4 text-gray-600 font-light leading-relaxed mb-8">
                    {project.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>

                  <div className="bg-[#F5F5F5] border border-transparent rounded-2xl p-6 md:p-8 hover:border-orange-400 transition-colors duration-500 shadow-sm">
                    <h4 className="text-lg font-semibold text-black mb-5">Key Results</h4>
                    <ul className="space-y-4">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-orange-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                          <span className="text-gray-600 font-medium leading-snug">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Video Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex justify-center items-start lg:sticky lg:top-0 pt-4 pb-4"
                >
                  <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-[40px] border-[12px] sm:border-[16px] border-black bg-black shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
                    <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gray-900 flex items-center justify-center">
                      {/* Media Player (Video, Image, or Custom PDF Viewer) */}
                      {project.videoUrl.toLowerCase().endsWith('.pdf') ? (
                        <div className="w-full h-full bg-white relative z-10">
                          <PdfViewer url={project.videoUrl} />
                        </div>
                      ) : project.videoUrl.toLowerCase().match(/\.(jpeg|jpg|gif|png|webp)$/) ? (
                        <img
                          src={project.videoUrl}
                          alt={project.title}
                          className="w-full h-full object-cover relative z-10"
                        />
                      ) : (
                        <video
                          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                          autoPlay
                          muted
                          loop
                          playsInline
                        >
                          <source src={project.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}

                      {/* Ambient Inner Glow to simulate screen bezel */}
                      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none rounded-[24px] sm:rounded-[28px]" />
                    </div>
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
