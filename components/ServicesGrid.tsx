"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  HomeIcon,
  PaintBucket,
  Ruler,
  Wrench,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Full-scale commercial building solutions with modern architectural designs.",
    image: "/4.jpg",
    features: ["Office Buildings", "Retail Spaces", "Hotels", "Restaurants"],
  },
  {
    icon: HomeIcon,
    title: "Residential Projects",
    description:
      "Custom home building and renovation services tailored to your lifestyle.",
    image: "/5.jpg",
    features: [
      "Custom Homes",
      "Renovations",
      "Extensions",
      "Interior Remodeling",
    ],
  },
  {
    icon: Wrench,
    title: "Industrial Construction",
    description:
      "Specialized construction for manufacturing and industrial facilities.",
    image: "/6.jpg",
    features: [
      "Factories",
      "Warehouses",
      "Processing Plants",
      "Storage Facilities",
    ],
  },
  {
    icon: PaintBucket,
    title: "Interior Finishing",
    description: "Premium interior design and finishing touches for any space.",
    image: "/3.jpg",
    features: ["Painting", "Flooring", "Cabinetry", "Custom Finishes"],
  },
  {
    icon: Ruler,
    title: "Architecture & Planning",
    description:
      "Expert architectural design and construction planning services.",
    image: "/2.jpg",
    features: ["Design Services", "3D Modeling", "Project Planning", "Permits"],
  },
  {
    icon: Truck,
    title: "Construction Management",
    description: "Comprehensive project management and construction oversight.",
    image: "/1.jpg",
    features: [
      "Timeline Management",
      "Cost Control",
      "Quality Assurance",
      "Risk Management",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-white" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-slate-600"
                    >
                      <ArrowRight className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="mt-4 px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
