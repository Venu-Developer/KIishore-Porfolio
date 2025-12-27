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
import AboutPage from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

       {/* Services Section */}
    <section id="services">
      <Services />
    </section>

    {/* About Section */}
    <section id="about">
      <AboutPage />
    </section>

    {/* Experience Section */}
    <section id="experience">
      <Experience />
    </section>

    {/* Expect From Me Section */}
    <section id="expect-from-me">
      <Aboutme />
    </section>

    {/* Achievements Section */}
    {/* <section id="achievements">
      <Achievements />
    </section> */}

    {/* Portfolio Section */}
    <section id="portfolio">
      <Portfolio />
    </section>

    {/* Testimonials Section */}
    <section id="testimonials">
      <Testimonials />
    </section>

    {/* Pricing Section */}
    <section id="pricing">
      <PricingSection />
    </section>

    {/* Blog Section */}
    {/* <section id="blog">
      <Blog />
    </section> */}

    {/* Contact Section */}
    <section id="contact">
      <Footer />
    </section>
    </>
  );
}
