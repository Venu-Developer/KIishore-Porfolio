"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Layers, TrendingUp, CheckCircle, GraduationCap, Coffee, Gamepad2, ShoppingBag } from "lucide-react";
import portfolioData from "../../data/portfolio.json";
import { HowIApproachData } from "../../types/portfolio";

const data: HowIApproachData = portfolioData.howIApproach;

const stepIcons = [Target, Lightbulb, Layers, TrendingUp];
const industryIcons = [GraduationCap, Coffee, Gamepad2, ShoppingBag];

export default function ApproachSection() {
  return (
    <section className="w-full bg-[#F5F5F5] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT SIDE: How I Approach Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-wide">
              {data.leftTitle}
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>
          
          <div className="space-y-8">
            {data.steps.map((step, index) => {
              const Icon = stepIcons[index] || CheckCircle;
              
              return (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center group-hover:border-orange-400 group-hover:bg-orange-50 transition-all duration-300">
                      <Icon size={24} className="text-orange-500" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-orange-500 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT SIDE: Industries */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="mb-10 lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-wide">
              {data.rightTitle}
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pl-8">
            {data.industries.map((industry, index) => {
              const Icon = industryIcons[index] || CheckCircle;
              
              return (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-orange-400 hover:shadow-md transition-all duration-300 group cursor-default"
                >
                  <div className="w-10 h-10 bg-[#F5F5F5] rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
                    <Icon size={22} className="text-gray-500 group-hover:text-orange-500 transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-orange-500 mb-1 uppercase tracking-wider">
                    {industry.category}
                  </h4>
                  <p className="text-lg font-bold text-black">
                    {industry.client}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
