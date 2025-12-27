"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        form.current,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
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
    <section className="py-20 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          Have a project or idea? Send me a message.
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`px-10 py-4 font-semibold rounded-xl transition ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 text-black"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          {success && (
            <p className="text-center text-green-400 mt-4">
              Thank you! Your message has been sent.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
