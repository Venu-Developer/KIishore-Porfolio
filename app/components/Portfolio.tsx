"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Basinik Finance App",
      tags: ["APP", "DEVELOPMENT"],
      image: "/projects/finance-app.jpg",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Oxilex Dashboard Design",
      tags: ["APP", "DEVELOPMENT"],
      image: "/projects/dashboard-design.jpg",
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: "E-commerce Mobile App",
      tags: ["UI/UX", "APP"],
      image: "/projects/ecommerce-app.jpg",
      link: "https://example.com/project3",
    },
    {
      id: 4,
      title: "Marketing Website Redesign",
      tags: ["WEB", "DEVELOPMENT"],
      image: "/projects/website-redesign.png",
      link: "https://example.com/project4",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#F6DCC8] py-20">
      <div className="max-w-[1186px] mx-auto px-5">
        {/* Title */}
        <div className="text-center mb-10">
          <p className="text-orange-600 font-medium">Portfolio</p>
          <h2 className="text-5xl font-bold text-black">
            My recent{" "}
            <span className="relative inline-block">
              w
              <span className="absolute inset-0 bg-yellow-300 rounded-full w-7 h-7 -z-10 top-1 left-1"></span>
            </span>
            ork
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {visibleProjects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              className="group flex flex-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <div className="relative h-[300px] rounded-xl overflow-hidden bg-gray-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Tags */}
              <div className="flex gap-3 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-black-300 rounded-full text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <div className="flex items-center justify-between mt-2">
                <h3 className="text-lg font-semibold group-hover:underline text-black">
                  {project.title}
                </h3>
                <span className="text-xl font-bold group-hover:translate-x-1 transition text-black">
                  ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="bg-black text-white px-10 py-3 rounded-md hover:bg-gray-900 transition-all"
            >
              View All Projects ↗
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="bg-black text-white px-10 py-3 rounded-md hover:bg-gray-900 transition-all"
            >
              Show Less ↑
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
