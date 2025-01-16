"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-1.jpg"
          alt="Our Projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl space-y-6"
        >
          <span className="text-primary font-semibold">OUR PORTFOLIO</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Landmark{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl">
            Explore our diverse portfolio of innovative construction projects
            that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
