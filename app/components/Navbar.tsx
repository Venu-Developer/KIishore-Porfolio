"use client";

import CardNav from './CardNav';

export default function Navbar() {
  const items = [
    {
      label: "About",
      bgColor: "#F5F5F5",
      textColor: "#000",
      links: [
        { label: "My Expertise", ariaLabel: "Expertise", href: "#expertise" },
        { label: "What I Focus On", ariaLabel: "Focus", href: "#focus" },
        { label: "About Me", ariaLabel: "About", href: "#about" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#F9B233", // Orange theme
      textColor: "#000",
      links: [
        { label: "Selected Work", ariaLabel: "Selected Work", href: "#projects" },
        { label: "Creative Work", ariaLabel: "Creative Work", href: "#creative-work" }
      ]
    },
    {
      label: "Connect",
      bgColor: "#000", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:kishore.dmme@gmail.com" },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/kishore-kumar-a9296a16b" },
        { label: "Contact Form", ariaLabel: "Contact Form", href: "#contact" }
      ]
    }
  ];

  return (
    <div className="fixed top-0 w-full z-[100] pointer-events-none">
      <div className="pointer-events-auto">
        <CardNav
          logo=""
          logoAlt="Kishore"
          items={items}
          baseColor="rgba(255, 255, 255, 0.85)"
          menuColor="#000"
          buttonBgColor="#F9B233"
          buttonTextColor="#000"
          ease="power3.out"
        />
      </div>
    </div>
  );
}
