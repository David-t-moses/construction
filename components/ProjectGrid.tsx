"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, HomeIcon, Factory, PaintBucket } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    name: "Delhi Metro Rail Corporation",
    image: "/eco-exterior.jpg",
    location: "New Delhi",
    description:
      "Line-3, Line-6, Airport Line: High Pressure PU, Epoxy, Micro Fine Cement Injection Grouting",
    value: "₹600 Lakhs",
  },
  {
    name: "HHC Metro Project",
    image: "/eco-interior.jpg",
    location: "New Delhi",
    description:
      "High Pressure PU Injection Grouting in Underground and Elevated Sections",
    value: "₹100 Lakhs",
  },
  {
    name: "J KUMAR CC24",
    image: "/tech-hub-exterior.jpg",
    location: "New Delhi",
    description:
      "High Pressure PU Injection Grouting in Underground Tunnel Section",
    value: "₹300 Lakhs",
  },
  {
    name: "GULARMARK TPL Project",
    image: "/tech-hub-interior.jpg",
    location: "Lucknow",
    description:
      "High Pressure PU Injection Grouting in Metro Water Tank Station",
    value: "₹500 Lakhs",
  },
  {
    name: "L&T Lucknow Metro",
    image: "/5.jpg",
    location: "Lucknow",
    description: "Injection Grouting and Epoxy Grouting for Metro Project",
    value: "₹28 Lakhs",
  },
  {
    name: "Panchsil Ocean Towers",
    image: "/1.jpg",
    location: "Kalbadevi, Mumbai",
    description: "Soil Stabilization Work for Ocean Towers Construction",
    value: "₹26 Lakhs",
  },
];

const ITEMS_PER_PAGE = 6;

export default function ProjectGrid() {
  // const [activeTab, setActiveTab] = useState(categories[0].title);
  // const [showAll, setShowAll] = useState(false);

  // const activeCategory = categories.find((cat) => cat.title === activeTab);
  // const displayedProjects = showAll
  //   ? activeCategory?.projects
  //   : activeCategory?.projects.slice(0, ITEMS_PER_PAGE);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Notable Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                    <span className="text-white/80 text-sm">
                      {project.location}
                    </span>
                    <span className="text-white font-semibold">
                      {project.value}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
