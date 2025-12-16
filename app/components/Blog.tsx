"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  image?: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    category: "UI Design",
    date: "03 May 2019",
    title: "Right-to-left behind development in mobile web design",
  },
  {
    id: 2,
    category: "UI Design",
    date: "03 May 2019",
    title: "Connect craft: Reading the smart experience",
  },
  {
    id: 3,
    category: "UI Design",
    date: "03 May 2019",
    title: "Ecoglow: Sustainable skincare a brighter tomorrow",
  },
  {
    id: 4,
    category: "UI Design",
    date: "03 May 2019",
    title: "Right-to-left behind development in mobile web design",
  },
];

export default function Blog() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-orange-500 text-sm font-medium">Blog</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-orange-500">Blog Posts</span>
        </h2>
      </div>

      {/* Zig-zag layout */}
      <div className="relative space-y-20">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className={`flex flex-col md:flex-row items-center md:justify-between ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image / Placeholder */}
            <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 md:px-8">
              <p className="text-xs text-gray-400 mb-2">
                <span className="font-semibold text-black">{post.category}</span> • {post.date}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-500 hover:text-orange-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
