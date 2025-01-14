"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    image: "/1.jpg",
    description:
      "25-story contemporary office building with sustainable features",
    location: "Downtown Business District",
    year: "2023",
    stats: { area: "45,000 sq ft", duration: "18 months" },
  },
  {
    title: "Luxury Apartments",
    category: "Residential",
    image: "/2.jpg",
    description: "High-end residential complex with premium amenities",
    location: "Riverside Heights",
    year: "2023",
    stats: { units: "120 units", area: "80,000 sq ft" },
  },
  {
    title: "Manufacturing Facility",
    category: "Industrial",
    image: "/3.jpg",
    description: "State-of-the-art manufacturing plant with smart technology",
    location: "Industrial Park",
    year: "2022",
    stats: { area: "100,000 sq ft", capacity: "500 workers" },
  },
  {
    title: "Corporate Headquarters",
    category: "Interior",
    image: "/4.jpg",
    description: "Modern interior design for tech company headquarters",
    location: "Tech Hub",
    year: "2023",
    stats: { floors: "5 floors", workstations: "300+" },
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
              key={project.title}
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
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-sm mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    →
                  </motion.button>
                </div>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/20">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-white/60 text-sm">{key}</p>
                      <p className="font-semibold">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
