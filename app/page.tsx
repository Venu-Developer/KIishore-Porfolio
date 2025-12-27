import Image from "next/image";
import { FaBehance, FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Aboutme from "./components/Aboutme";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/testimonial";
import Blog from "./components/Blog";
import PricingSection from "./components/Pricing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* About Section */}
      <section id="about">
        <Aboutme />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Blog */}
      {/* <section id="blog">
        <Blog />
      </section> */}

      {/* Pricing */}
      <section id="pricing">
        <PricingSection />
      </section>

      {/* Contact */}
      <section id="contact">
        <Footer />
      </section>
    </>
  );
}
