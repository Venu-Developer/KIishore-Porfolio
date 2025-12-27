// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// interface Plan {
//   name: string;
//   hours: number;
//   perWeek: string;
//   price: string;
// }

// const plans: Plan[] = [
//   { name: "Basic", hours: 20, perWeek: "10 hours per week", price: "$48/h" },
//   { name: "Premium", hours: 30, perWeek: "15 hours per week", price: "$60/h" },
//   { name: "Platinum", hours: 40, perWeek: "20 hours per week", price: "$80/h" },
// ];

// export default function PricingSection() {
//   return (
//     <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 bg-white">
//       {/* Heading */}
//       <p className="text-orange-500 text-sm font-semibold">Pricing</p>

//       <h2 className="text-5xl font-bold leading-tight mt-2 mb-10 text-black">
//         Stay chill and
//         <br />
//         pick your <span className="text-orange-500">plan</span>
//       </h2>

//       {/* Button */}
//       <div className="mb-12 text-center">
//         <button className="px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-900 transition flex items-center gap-2">
//           Contact for Custom Project
//           <svg
//             width="16"
//             height="16"
//             stroke="white"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
//           </svg>
//         </button>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {plans.map((plan, index) => (
//           <motion.div
//             key={plan.name}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
//             whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
//             className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 border border-gray-200 cursor-pointer"
//           >
//             <div className="flex justify-between mb-3">
//               <span className="text-gray-500 text-sm">{plan.name}</span>
//               <span className="text-orange-500 text-sm font-semibold">
//                 {plan.price}
//               </span>
//             </div>

//             <h3 className="text-3xl font-bold text-black">{plan.hours} hrs</h3>
//             <p className="text-gray-500 text-sm mt-1">{plan.perWeek}</p>

//             {/* Arrow Icon with motion */}
//             <motion.div
//               className="mt-6 flex justify-end"
//               whileHover={{ x: 5 }}
//               transition={{ type: "spring", stiffness: 150 }}
//             >
//               <svg
//                 width="20"
//                 height="20"
//                 fill="none"
//                 stroke="black"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 className="cursor-pointer"
//               >
//                 <path d="M5 12h14M13 5l7 7-7 7" />
//               </svg>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";

interface Plan {
  name: string;
  price: string;
  hours: string;
}

const plans: Plan[] = [
  { name: "Basic", price: "$12 / h", hours: "40 hours" },
  { name: "Premium", price: "$25 / h", hours: "35 hours" },
  { name: "Platinum", price: "$40 / h", hours: "30 hours" },
];

export default function PricingSection() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-20 bg-white">
      
      {/* ===================== HEADING ===================== */}
      <p className="text-orange-500 text-sm font-semibold">Pricing</p>

      <h2 className="text-5xl font-bold leading-tight mt-2 mb-12 text-black">
        Stay chill and
        <br />
        pick your <span className="text-orange-500">plan.</span>
      </h2>

      {/* ===================== PRICING CARDS ===================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
            }}
            className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 border border-gray-200 cursor-pointer"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 text-sm font-medium">
                {plan.name}
              </span>
              <span className="text-orange-500 text-sm font-semibold">
                {plan.price}
              </span>
            </div>

            {/* Hours */}
            <h3 className="text-4xl font-bold text-black">
              {plan.hours}
            </h3>

            {/* Arrow */}
            <motion.div
              className="mt-8 flex justify-end"
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <svg
                width="22"
                height="22"
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ===================== CTA BUTTON ===================== */}
      <div className="text-center">
        <button className="px-10 py-4 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-900 transition inline-flex items-center gap-2">
          Contact me for the best price
          <svg
            width="16"
            height="16"
            stroke="white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeWidth="2" />
          </svg>
        </button>
      </div>

    </section>
  );
}
