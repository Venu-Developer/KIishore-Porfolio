"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#F6DCC8] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT: Text ================= */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold text-black mb-4">
            About Me
          </h2>

          <p className="text-gray-800 leading-relaxed text-lg">
            I began my creative journey on Tamil film sets, not in an office. As an Assistant Director, my days revolved around scripts, retakes, and late-night discussions about details most people never notice. That world trained my eyes to look beyond the frame — to read emotion, tension, and the unspoken questions in the audience’s mind.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            Cinema taught me a simple, brutal truth: if a frame does not have a reason, it does not deserve to exist. That lesson stayed with me.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            When I moved into branding and digital marketing, it did not feel like a career shift — just the same storytelling on a different screen. Now the scenes are brand pages, campaigns, and content. The audience is a customer with a busy life and limited attention. And the story carries a new responsibility: to build trust and move people to action.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            For over two years, I have worked as a Brand Strategist and Digital Marketer, living at the intersection where story meets strategy. Every script, reel, or campaign still begins with the same question: <span className="font-semibold">why should this exist?</span> If there is no clear reason, it does not go on the timeline.
          </p>

          <p className="text-gray-800 leading-relaxed text-lg">
            I do not chase noise for the sake of views. I focus on clarity, consistency, and creativity — because whether it is films or brands, the goal is the same: to leave a feeling that stays even after the screen goes dark.
          </p>
        </motion.div>

        {/* ================= RIGHT: Image/Illustration ================= */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/profile.jpg" // replace with your photo
              alt="Kishore Kumar"
              width={400}
              height={500}
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
