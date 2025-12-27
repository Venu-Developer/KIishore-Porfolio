"use client";

import { useState } from "react";
import { motion, type Variants, easeOut } from "framer-motion";

/* ===================== DATA ===================== */

const resumeData = {
  about: {
    title: "About Me",
    content: `I began my creative journey on Tamil film sets, not in an office. As an Assistant Director, my days revolved around scripts, retakes, and late-night discussions about details most people never notice. That world trained my eye to read emotion, tension, and the unspoken questions in the audience’s mind.

Cinema taught me a simple, brutal truth: if a frame does not have a reason, it does not deserve to exist. That lesson stayed with me.

When I moved into branding and digital marketing, it didn’t feel like a career shift—just the same storytelling on a different screen. Now the scenes are brand pages, campaigns, and content. The audience is a customer with limited attention, and the story carries the responsibility to build trust and drive action.

For over two years, I’ve worked as a Brand Strategist and Digital Marketer at the intersection of story and strategy. I don’t chase noise for views; I focus on clarity, consistency, and creativity—because whether it’s films or brands, the goal is the same: to leave a feeling that stays after the screen goes dark.`,
  },

  experience: {
    title: "On Time Delivery",
    content: `
I plan every project with clear timelines, realistic milestones, and structured workflows. From concept to execution, I ensure deliverables are completed on schedule without compromising creative quality. Consistency and reliability are core to how I work.
    `,
  },

  education: {
    title: "Strategic Thinking",
    content: `
I approach every campaign and piece of content with a strategic lens—understanding the brand objective, audience psychology, and long-term impact. Every creative decision is backed by intent, insight, and measurable purpose.
    `,
  },

  skills: {
    title: "Clean Communication",
    content: `
I believe strong ideas deserve clear communication. I maintain transparent discussions with clients and teams, translate complex ideas into simple narratives, and ensure alignment at every stage of execution.
    `,
  },

  awards: {
    title: "Creative Execution",
    content: `
From scripting reels to building brand narratives, I transform ideas into compelling visual and written content. My execution balances creativity with structure, ensuring every output serves both emotion and strategy.
    `,
  },

  Quality: {
    title: "Quality First",
    content: `
Quality is never an afterthought. I focus on detail, consistency, and refinement across all deliverables—because strong brands are built not on volume, but on thoughtful, well-crafted work.
    `,
  },
};


type ResumeKey = keyof typeof resumeData;

/* ===================== ANIMATION ===================== */

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

/* ===================== COMPONENT ===================== */

export default function Aboutme() {
  const [activeKey, setActiveKey] = useState<ResumeKey>("about");

  return (
    <div className="w-full py-20 px-5 sm:px-8 md:px-12 lg:px-20 bg-white">
      {/* Heading */}
      <div className="mb-10">
        <p className="text-orange-500 font-semibold">What You Can 
</p>

        <div className="relative inline-block mt-2">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-black relative z-10">
            Expect From Me
          </h2>
          <span className="absolute top-4 left-4 w-16 h-16 sm:w-20 sm:h-20 bg-[#F9B233] rounded-full -z-10 opacity-80"></span>
        </div>
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* LEFT MENU */}
        <div className="w-full md:w-1/3 flex flex-col gap-3">
          {(Object.keys(resumeData) as ResumeKey[]).map((key) => (
            <motion.button
              key={key}
              onClick={() => setActiveKey(key)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`text-left px-5 py-3 rounded-md border transition-all cursor-pointer
                ${
                  activeKey === key
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }`}
            >
              {resumeData[key].title}
            </motion.button>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          key={activeKey}
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="w-full md:w-2/3 p-6 bg-orange-100 rounded-xl shadow-sm border"
        >
          <h2 className="text-2xl font-bold mb-3 text-black">
            {resumeData[activeKey].title}
          </h2>

          <p className="text-gray-700 leading-7 whitespace-pre-line">
            {resumeData[activeKey].content}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
