// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, type Variants, easeOut } from "framer-motion";

// type Project = {
//   id: number;
//   title: string;
//   tags: string[];
//   image: string;
//   link: string;
// };

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "Basinik Finance App",
//     tags: ["APP", "DEVELOPMENT"],
//     image: "/projects/finance-app.jpg",
//     link: "https://example.com/project1",
//   },
//   {
//     id: 2,
//     title: "Oxilex Dashboard Design",
//     tags: ["APP", "DEVELOPMENT"],
//     image: "/projects/dashboard-design.jpg",
//     link: "https://example.com/project2",
//   },
//   {
//     id: 3,
//     title: "E-commerce Mobile App",
//     tags: ["UI/UX", "APP"],
//     image: "/projects/ecommerce-app.jpg",
//     link: "https://example.com/project3",
//   },
//   {
//     id: 4,
//     title: "Marketing Website Redesign",
//     tags: ["WEB", "DEVELOPMENT"],
//     image: "/projects/website-redesign.png",
//     link: "https://example.com/project4",
//   },
// ];

// /* ===================== ANIMATION ===================== */

// const cardVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: easeOut,
//     },
//   },
// };

// /* ===================== COMPONENT ===================== */

// export default function Portfolio() {
//   const [showAll, setShowAll] = useState(false);

//   const visibleProjects = showAll ? projects : projects.slice(0, 2);

//   return (
//     <section className="bg-[#F6DCC8] py-20">
//       <div className="max-w-[1186px] mx-auto px-5">
//         {/* Title */}
//         <div className="text-center mb-10">
//           <p className="text-orange-600 font-medium">Portfolio</p>

//           <h2 className="text-5xl font-bold text-black">
//             My recent{" "}
//             <span className="relative inline-block">
//               w
//               <span className="absolute inset-0 bg-yellow-300 rounded-full w-7 h-7 -z-10 top-1 left-1"></span>
//             </span>
//             ork
//           </h2>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
//           {visibleProjects.map((project) => (
//             <motion.a
//               key={project.id}
//               href={project.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex flex-col"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.2 }}
//               variants={cardVariants}
//               whileHover={{ scale: 1.03 }}
//             >
//               {/* Image */}
//               <div className="relative h-[300px] rounded-xl overflow-hidden bg-gray-300">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition duration-300"
//                 />
//               </div>

//               {/* Tags */}
//               <div className="flex gap-3 mt-4">
//                 {project.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="text-xs px-3 py-1 border border-gray-400 rounded-full text-black"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Title */}
//               <div className="flex items-center justify-between mt-2">
//                 <h3 className="text-lg font-semibold group-hover:underline text-black">
//                   {project.title}
//                 </h3>
//                 <span className="text-xl font-bold group-hover:translate-x-1 transition text-black">
//                   ↗
//                 </span>
//               </div>
//             </motion.a>
//           ))}
//         </div>

//         {/* View More Button */}
//         <div className="text-center">
//           {!showAll ? (
//             <button
//               onClick={() => setShowAll(true)}
//               className="bg-black text-white px-10 py-3 rounded-md hover:bg-gray-900 transition-all"
//             >
//               View All Projects ↗
//             </button>
//           ) : (
//             <button
//               onClick={() => setShowAll(false)}
//               className="bg-black text-white px-10 py-3 rounded-md hover:bg-gray-900 transition-all"
//             >
//               Show Less ↑
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ===================== TYPES ===================== */

type Project = {
  id: number;
  title: string;
  type: "image" | "video";
  image?: string;
  video?: string;
  content: string;
};

/* ===================== DATA (HIGHLIGHTS ONLY) ===================== */

const projects: Project[] = [
  {
    id: 1,
    title: "Kadai2Manai Branding",
    type: "image",
    image: "/projects/kadai2manai.jpg",
    content: `Kadai2Manai, a fresh vegetable brand from Karur, Tamil Nadu that delivers produce to homes on a daily basis, is one of my recent projects. I shaped the brand’s direction, tone, and colour story, then collaborated with a designer who translated those ideas into the logo and visuals you see here.`,
  },
  {
    id: 2,
    title: "Aryu Academy Scripts",
    type: "image",
    image: "/projects/aryu-academy.jpg",
    content: `For Aryu Academy, Chennai, India I’ve written over 100 scripts as part of a long-term content partnership. From that work, this is one of the strongest one-month sets: 15 Tanglish educational scripts that helped their videos grow from 50K views to over 500K views.`,
  },
  {
    id: 3,
    title: "Product Film Direction",
    type: "video",
    video: "/projects/product-video.mp4",
    content: `A recent product video I directed, built like a mini cinematic sequence from my shot ideas and storyboards, then crafted on set together with my cameraman to make the brand feel premium and alive.`,
  },
];

/* ===================== COMPONENT ===================== */

export default function Portfolio() {
  return (
    <section className="bg-[#F6DCC8] py-20">
      <div className="max-w-[1186px] mx-auto px-5">

        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-orange-600 font-medium mb-2">Portfolio</p>
          <h2 className="text-5xl font-bold text-black">
            My Recent <span className="text-orange-600">Creative Works</span>
          </h2>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative h-[380px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* IMAGE */}
              {project.type === "image" && project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                />
              )}

              {/* VIDEO */}
              {project.type === "video" && project.video && (
                <video
                  src={project.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 p-6 text-white overflow-y-auto">
                  <h3 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {project.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-block bg-black text-white px-12 py-4 rounded-md hover:bg-gray-900 transition-all"
          >
            View All Projects ↗
          </Link>
        </div>

      </div>
    </section>
  );
}
