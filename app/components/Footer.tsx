"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import portfolioData from "../../data/portfolio.json";
import { ContactSectionData, HeroData } from "../../types/portfolio";

const contactData: ContactSectionData = portfolioData.contactSection;
const heroData: HeroData = portfolioData.hero;

export default function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="bg-black text-white min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* ================= Layer 1: One Look Details ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h3 className="text-3xl font-semibold mb-8 text-orange-400 text-center">
            {contactData.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {contactData.oneLookDetails.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b border-gray-700 pb-4"
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  {item.label}
                </p>
                <p className="text-lg font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= Layer 2: Contact Cards + Form ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-3 md:p-10">

          {/* ================= Left: Contact Cards ================= */}
          <div className="space-y-6">

            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-gray-700 rounded-2xl p-8 hover:scale-105 transition h-44 flex flex-col justify-center"
            >
              <p className="text-gray-400 mb-2 text-center md:text-left">
                {contactData.cards.left.text}
              </p>
              <div className="flex justify-center md:justify-between items-center mt-2">
                <p className="text-orange-400 font-medium text-center md:text-left">
                  {contactData.cards.left.value}
                </p>
                <ArrowUpRight className="hidden md:block" />
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-gray-700 rounded-2xl p-8 hover:scale-105 transition h-44 flex flex-col justify-center"
            >
              <p className="text-gray-400 mb-2 text-center md:text-left">
                {contactData.cards.right.text}
              </p>
              <div className="flex justify-center md:justify-between items-center mt-2">
                <p className="text-orange-400 font-medium text-center md:text-left">
                  {contactData.cards.right.value}
                </p>
                <ArrowUpRight className="hidden md:block" />
              </div>
            </motion.div>

          </div>

          {/* ================= Right: Contact Form ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900 rounded-2xl p-8"
          >
            <h3 className="text-3xl font-semibold mb-6 text-orange-400 text-center">
              {contactData.formTitle}
            </h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 resize-none"
              />
              <div className="text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-10 py-4 font-semibold rounded-xl transition ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600 text-black"
                    } inline-flex items-center gap-2`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowUpRight />
                </button>
              </div>
              {success && (
                <p className="text-center text-green-400 mt-2">
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </motion.div>

        </div>

        {/* ================= Layer 3: Big Name + Socials ================= */}
        <div className="text-center mt-24 space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[70px] md:text-[110px] font-extrabold text-[#f2d8c7] uppercase"
          >
            {heroData.firstName} {heroData.lastName}
          </motion.h1>

          <div className="flex justify-center items-center gap-6 text-gray-400">
            <a href={heroData.socialLinks.linkedin || "#"} target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaLinkedin size={28} />
            </a>
            {/* Kept github icon for consistency but you can update in JSON if needed */}
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaGithub size={28} />
            </a>
          </div>

          <hr className="border-gray-700 my-10" />

          <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm">
            <p>{contactData.copyright}</p>
            <a href="#" className="flex items-center gap-1 hover:text-white mt-4 md:mt-0 justify-center md:justify-start">
              Back to Top <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
