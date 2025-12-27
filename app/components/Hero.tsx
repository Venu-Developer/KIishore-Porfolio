// "use client";

// import Image from "next/image";
// import { FaBehance, FaLinkedinIn, FaDribbble, FaGithub } from "react-icons/fa";

// export default function Hero() {
//   return (
//     <section className="flex flex-col md:flex-row w-full h-[90vh] md:h-screen bg-[#F7E2D4]  px-6 md:px-12 lg:px-2 overflow-hidden">
      
//       {/* LEFT SIDE */}
//       <div className="w-full md:w-1/2 h-auto flex justify-center items-center">
//         <div className="z-[5] text-center md:text-left">
          
//           <p className="text-3xl font-medium text-gray-900">
//             Hello, I’m <span>✌️</span>
//           </p>

//           <div className="relative inline-block">
//             <h2 className="text-7xl font-bold text-black relative z-[2]">
//               Kishore
//             </h2>
//             <span className="absolute inset-0 -z-[1] bg-[#F9B233] w-16 h-16 rounded-full"></span>
//           </div>

//           <h2 className="text-7xl font-bold text-black">Kumar</h2>

//           <p className="mt-6 text-2xl text-gray-700 font-medium sm:text-xl">
//             Product Designer | Based in Germany
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex gap-6 justify-center md:justify-start flex-wrap">
//             <button className="bg-black text-white px-8 py-3 rounded-xl text-lg font-semibold hover:opacity-90">
//               Let’s Talk →
//             </button>

//             <button className="border border-black px-8 py-3 rounded-xl text-lg font-semibold text-black hover:bg-black hover:text-white transition">
//               My Work →
//             </button>
//           </div>

//           {/* Stats + Icons */}
//           <div className="mt-10 flex gap-10 flex-wrap justify-center md:justify-start items-center text-black">
//             <p className="text-3xl font-bold text-center md:text-left">
//               1.2K<span className="text-2xl">+</span>
//               <br />
//               <span className="text-sm">Worldwide Clients</span>
//             </p>

//             <div className="flex gap-4 items-center text-3xl">
//               <FaBehance className="cursor-pointer hover:text-blue-600 duration-200" />
//               <FaLinkedinIn className="cursor-pointer hover:text-blue-700 duration-200" />
//               <FaDribbble className="cursor-pointer hover:text-pink-500 duration-200" />
//               <FaGithub className="cursor-pointer hover:text-gray-700 duration-200" />
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="relative w-full h-full md:w-1/2 ">
        
//         {/* Yellow Shape */}
//         <div
//           className="
//             absolute w-[650px] h-[500px] 
//             bg-[#F9B233]
//             top-[-80px] right-[-120px]
//             rounded-[150px] rotate-[-45deg] 
//             z-[1]
//           "
//         ></div>

//         {/* Big Name Text */}
//         <div
//           className="
//             absolute font-bold text-[90px] leading-[90px] text-white
//             top-[30%] right-[5%] z-[2]
//             md:text-[70px] md:leading-[75px]
//             hidden md:block
//           "
//         >
//           Kishor Kumar
//         </div>

//         {/* Profile Image */}
//         <div
//           className="
//             absolute bottom-0 right-[10%] z-[3]
//             w-[250px] sm:w-[300px] md:w-[450px]
//             h-[350px] sm:h-[450px] md:h-[550px]
//           "
//         >
//           <Image
//             src="/hero.png"
//             alt="profile"
//             width={500}
//             height={700}
//             className="w-full h-full object-cover"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaBehance, FaLinkedinIn, FaDribbble, FaGithub } from "react-icons/fa";
import Link from "next/link";


export default function Hero() {
  const circleRef = useRef(null);
  const imageRef = useRef(null);

  // 🔥 GSAP Animations
  useEffect(() => {
    gsap.from(circleRef.current, {
      rotate: -60,
      y: -100,
      duration: 2,
      ease: "power3.out",
    });

    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);
 const name = "Kumar";

  const letterAnimation = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col md:flex-row w-full h-[90vh] md:h-screen bg-[#F7E2D4] px-6 md:px-12 lg:px-2 overflow-hidden">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex justify-center items-center p-5"
      >
        <div className="z-[5] text-center md:text-left">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay:0.1, duration:1 }}
            className="text-3xl font-medium text-gray-900"
          >
            Hello, I’m <span>✌️</span>
          </motion.p>

          {/* Name Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-7xl font-bold text-black relative z-[2]">
              Kishore
            </h2>
            <span
              className="absolute inset-0 -z-[1] bg-[#F9B233] w-16 h-16 rounded-full"
            ></span>
          </motion.div>

           <motion.h2 className="text-7xl font-bold text-black flex gap-1">
      {name.split("").map((letter, i) => (
        <motion.span
          key={i}
          variants={letterAnimation}
          initial="initial"
          animate="animate"
          transition={{
            delay: i * 0.2, // stagger effect
            duration: 0.6,
            repeat: Infinity,
            repeatType: "mirror", // appear → disappear → appear
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 text-2xl text-gray-700 font-medium sm:text-xl"
          >
            Brand Strategist | Based in Germany |Cinematic Storyteller | Ad Filmmaker | Digital Marketer
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 flex gap-6 justify-center md:justify-start flex-wrap"
          >
            <Link href="/contact">  
             <button className="bg-black text-white px-8 py-3 rounded-xl text-lg font-semibold hover:opacity-90 cursor-pointer">
            Let’s Work Together →
            </button>
            </Link>
           
           <Link
              key={"#portfolio"}
              href={"#portfolio"}
              >
                <button className="border border-black px-8 py-3 rounded-xl text-lg font-semibold text-black hover:bg-black hover:text-white transition cursor-pointer">
              My Work →
            </button>
              </Link>
               
         
           
          </motion.div>

          {/* Stats + Icons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-10 flex gap-10 flex-wrap justify-center md:justify-start items-center text-black"
          >
            <p className="text-3xl font-bold text-center md:text-left">
              1.2K<span className="text-2xl">+</span>
              <br />
              <span className="text-sm">Worldwide Clients</span>
            </p>

            <div className="flex gap-4 items-center text-3xl">
              <FaBehance className="cursor-pointer hover:text-blue-600 duration-200" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700 duration-200" />
              <FaDribbble className="cursor-pointer hover:text-pink-500 duration-200" />
              <FaGithub className="cursor-pointer hover:text-gray-700 duration-200" />
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="relative w-full h-full md:w-1/2">

        {/* Yellow Shape — GSAP Animation */}
        <div
          ref={circleRef}
          className="
            absolute w-[650px] h-[500px] 
            bg-[#F9B233]
            top-[-80px] right-[-120px]
            rounded-[150px] rotate-[-45deg] 
            z-[1]
          "
        ></div>

        {/* Big Name */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="
            absolute font-bold text-[90px] leading-[90px] text-white
            top-[30%] right-[5%] z-[2]
            md:text-[70px] md:leading-[75px]
            hidden md:block
          "
        >
          Kishor Kumar
        </motion.div>

        {/* Profile Image — GSAP Floating Animation */}
        <div
          ref={imageRef}
          className="
            absolute -bottom-8 right-[10%] z-[3]
            w-[250px] sm:w-[300px] md:w-[450px]
            h-[350px] sm:h-[450px] md:h-[550px]
          "
        >
          <Image
            src="/hero.png"
            alt="profile"
            width={500}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
