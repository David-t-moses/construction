"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, HomeIcon, Factory, PaintBucket } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    icon: Building2,
    title: "Commercial",
    count: 45,
    description: "Office buildings, retail spaces, and corporate headquarters",
    projects: [
      { name: "Tech Hub Tower", image: "/1.jpg", location: "Silicon Valley" },
      { name: "Downtown Plaza", image: "/2.jpg", location: "New York" },
      { name: "Business Center", image: "/3.jpg", location: "Chicago" },
      { name: "Corporate Park", image: "/4.jpg", location: "Boston" },
      { name: "Innovation Hub", image: "/5.jpg", location: "Seattle" },
      { name: "Commerce Tower", image: "/6.jpg", location: "Miami" },
    ],
  },
  {
    icon: HomeIcon,
    title: "Residential",
    count: 78,
    description: "Luxury homes, apartments, and residential complexes",
    projects: [
      { name: "Luxury Villas", image: "/3.jpg", location: "Beverly Hills" },
      { name: "Sky Apartments", image: "/2.jpg", location: "Manhattan" },
      { name: "Garden Homes", image: "/1.jpg", location: "San Diego" },
      { name: "Ocean View", image: "/4.jpg", location: "Miami Beach" },
      {
        name: "Mountain Lodge",
        image: "/5.jpg",
        location: "Denver",
      },
    ],
  },
  {
    icon: Factory,
    title: "Industrial",
    count: 34,
    description: "Manufacturing facilities and industrial warehouses",
    projects: [
      { name: "Tech Factory", image: "/6.jpg", location: "Detroit" },
      { name: "Logistics Hub", image: "/5.jpg", location: "Houston" },
      { name: "Manufacturing Plant", image: "/4.jpg", location: "Phoenix" },
      { name: "Distribution Center", image: "/3.jpg", location: "Dallas" },
    ],
  },
  {
    icon: PaintBucket,
    title: "Interior",
    count: 56,
    description: "Modern interior designs and renovations",
    projects: [
      { name: "Modern Office", image: "/2.jpg", location: "San Francisco" },
      { name: "Luxury Home", image: "/1.jpg", location: "Los Angeles" },
      { name: "Restaurant Design", image: "/4.jpg", location: "Las Vegas" },
      { name: "Hotel Lobby", image: "/5.jpg", location: "Orlando" },
      { name: "Retail Space", image: "/6.jpg", location: "Portland" },
    ],
  },
];

const ITEMS_PER_PAGE = 6;

export default function ProjectGrid() {
  const [activeTab, setActiveTab] = useState(categories[0].title);
  const [showAll, setShowAll] = useState(false);

  const activeCategory = categories.find((cat) => cat.title === activeTab);
  const displayedProjects = showAll
    ? activeCategory?.projects
    : activeCategory?.projects.slice(0, ITEMS_PER_PAGE);

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
            Explore Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Project Categories
            </span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTab(category.title);
                setShowAll(false);
              }}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors
                ${
                  activeTab === category.title
                    ? "bg-primary text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
            >
              <category.icon className="w-5 h-5" />
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects?.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    {project.name}
                  </h3>
                  <p className="text-white/80 text-sm">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {activeCategory?.projects.length > ITEMS_PER_PAGE && !showAll && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
            className="mt-12 mx-auto px-8 py-3 bg-primary text-white rounded-lg flex items-center gap-2"
          >
            Show More Projects
          </motion.button>
        )}
      </div>
    </section>
  );
}
