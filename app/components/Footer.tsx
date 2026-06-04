"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Briefcase } from "lucide-react";
import emailjs from "@emailjs/browser";
import portfolioData from "../../data/portfolio.json";
import { ContactSectionData, HeroData, FooterData } from "../../types/portfolio";

const contactData: ContactSectionData = portfolioData.contactSection;
const heroData: HeroData = portfolioData.hero;
const footerData: FooterData = portfolioData.footer;

export default function Footer() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const fd = new FormData(form.current);
    if (!fd.get("name") || !fd.get("email") || !fd.get("message")) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    setErrorMsg("");
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


        {/* ================= Layer 1: Contact Cards + Form ================= */}
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
            <form ref={form} onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
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
                placeholder="Your Message *"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 resize-none"
              />
              {errorMsg && <p className="text-red-400 text-sm text-center">{errorMsg}</p>}
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

        {/* ================= Layer 3: 3-Column Footer ================= */}
        <div className="pt-20 pb-4 border-t border-gray-800 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

            {/* Left: Brand / Intro */}
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-white tracking-wider uppercase">
                {footerData.left.name}
              </h2>
              <p className="text-orange-400 font-medium">
                {footerData.left.role}
              </p>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                {footerData.left.description}
              </p>
            </div>

            {/* Middle: Quick Links */}
            <div className="space-y-6 md:pl-10">
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                {footerData.middle.title}
              </h3>
              <ul className="space-y-3">
                {footerData.middle.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.link} className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-500 transition-colors"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Connect */}
            <div className="space-y-6 md:pl-10">
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                {footerData.right.title}
              </h3>
              <ul className="space-y-4 mt-6">
                {footerData.right.links.map((link, idx) => {
                  const getIcon = () => {
                    const l = link.label.toLowerCase();
                    if (l.includes("linkedin")) return <Linkedin size={18} className="text-gray-500 group-hover:text-orange-400 transition-colors" />;
                    if (l.includes("email") || l.includes("mail")) return <Mail size={18} className="text-gray-500 group-hover:text-orange-400 transition-colors" />;
                    if (l.includes("upwork")) return <Briefcase size={18} className="text-gray-500 group-hover:text-orange-400 transition-colors" />;
                    return <ArrowUpRight size={18} className="text-gray-500 group-hover:text-orange-400 transition-colors" />;
                  };

                  return (
                    <li key={idx}>
                      <a href={link.link} className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group">
                        {getIcon()}
                        <span className="font-medium tracking-wide">{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm border-t border-gray-800 pt-8">
            <p>{contactData.copyright}</p>
            <a href="#" className="flex items-center gap-1 hover:text-orange-400 mt-4 md:mt-0 transition-colors">
              Back to Top <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
