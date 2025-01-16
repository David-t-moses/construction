"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Tech Hub Tower",
    category: "Commercial",
    location: "Silicon Valley",
    year: "2023",
    image: "/5.jpg",
    description: "25-story modern office complex with sustainable features",
    stats: {
      "Project Value": "$85M",
      "Square Footage": "450,000 sq ft",
      Duration: "24 months",
    },
  },
  {
    title: "Eco Residences",
    category: "Residential",
    location: "Coastal City",
    year: "2023",
    image: "/6.jpg",
    description: "Luxury sustainable apartment complex with ocean views",
    stats: {
      "Project Value": "$65M",
      Units: "120 units",
      Duration: "18 months",
    },
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-[400px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {study.category}
                      </span>
                      <span className="text-slate-500">{study.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">
                      {study.title}
                    </h3>
                    <p className="text-slate-600">{study.description}</p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {Object.entries(study.stats).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-sm text-slate-500">{key}</p>
                          <p className="font-semibold text-slate-800">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <button className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </button>
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
