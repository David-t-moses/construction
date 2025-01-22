"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    name: "Delhi Metro Rail Corporation",
    image: "/India-Delhi-Metro-Bhaven-Jani-Shutterstock-pic-cropped.webp",
    location: "New Delhi",
    description:
      "Line-3, Line-6, Airport Line: High Pressure PU, Epoxy, Micro Fine Cement Injection Grouting",
    value: "₹600 Lakhs",
  },
  {
    name: "HCC Metro Project",
    image: "/HCC_Metro_Project.webp",
    location: "New Delhi",
    description:
      "High Pressure PU Injection Grouting in Underground and Elevated Sections",
    value: "₹100 Lakhs",
  },
  {
    name: "J KUMAR CC24",
    image: "/J_Kumar.webp",
    location: "New Delhi",
    description:
      "High Pressure PU Injection Grouting in Underground Tunnel Section",
    value: "₹300 Lakhs",
  },
  {
    name: "GULERMARK TPL Project",
    image:
      "/gulermak-tpl-pune-metro-jv-deccan-gymkhana-pune-construction-companies-sqf2es6akn.webp",
    location: "Lucknow",
    description:
      "High Pressure PU Injection Grouting in Metro Water Tank Station",
    value: "₹500 Lakhs",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold">OUR PORTFOLIO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our landmark projects that showcase our commitment to
            excellence and innovation in construction.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-[300px]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    {/* <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-sm mb-3">
                      {project.category}
                    </span> */}
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    {/* <p className="text-white/90 text-sm">
                      {project.description}
                    </p> */}
                  </div>
                  <Link href="/projects/#projects">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    >
                      →
                    </motion.button>
                  </Link>
                </div>

                {/* Project Stats */}
                {/* <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/20">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-white/60 text-sm">{key}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  ))}
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
