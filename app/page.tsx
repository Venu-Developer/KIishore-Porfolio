import Image from "next/image";
import { FaBehance, FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";
import PricingSection from "./components/Pricing";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/About";
import FocusSection from "./components/FocusSection";
import ProjectsSection from "./components/ProjectsSection";
import ApproachSection from "./components/ApproachSection";
import ExpertiseSection from "./components/ExpertiseSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Focus Section */}
      <section id="focus">
        <FocusSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Approach Section */}
      <section id="approach">
        <ApproachSection />
      </section>

      {/* Expertise Section */}
      <section id="expertise">
        <ExpertiseSection />
      </section>


      {/* About Section */}
      <section id="about">
        <AboutPage />
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
