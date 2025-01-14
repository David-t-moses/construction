"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "25+ Years Experience",
  "Award-winning Projects",
  "Certified Experts",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Enhanced Mobile Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Enhanced Mobile Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building Your Vision,{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Crafting Excellence
              </span>
            </h1>

            <p className="md:text-text-light text-black text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
              Transform your construction dreams into reality with our expert
              team of builders, architects, and designers delivering innovative
              solutions.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-text whitespace-nowrap">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-lg flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <span>Start Project</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-primary/20 text-text rounded-lg hover:bg-primary/5 w-full sm:w-auto"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Enhanced Mobile Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative grid grid-cols-2 gap-3 md:gap-4 h-[400px] md:h-[600px] mt-8 lg:mt-0"
          >
            <div className="relative col-span-2 h-48 md:h-auto">
              <Image
                src="/hero-1.jpg"
                alt="Modern Construction"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="relative h-32 md:h-auto">
              <Image
                src="/hero-2.jpg"
                alt="Interior Design"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
              />
            </div>
            <div className="relative h-32 md:h-auto">
              <Image
                src="/hero-3.jpg"
                alt="Architecture"
                fill
                className="object-cover rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
