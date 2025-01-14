"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HomeIcon,
  PaintBucket,
  Ruler,
  Wrench,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Commercial Construction",
    description:
      "Full-scale commercial building solutions with modern architectural designs.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: HomeIcon,
    title: "Residential Projects",
    description:
      "Custom home building and renovation services tailored to your lifestyle.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Wrench,
    title: "Industrial Construction",
    description:
      "Specialized construction for manufacturing and industrial facilities.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: PaintBucket,
    title: "Interior Finishing",
    description: "Premium interior design and finishing touches for any space.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Ruler,
    title: "Architecture & Planning",
    description:
      "Expert architectural design and construction planning services.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Truck,
    title: "Construction Management",
    description: "Comprehensive project management and construction oversight.",
    color: "from-teal-500 to-teal-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-primary font-semibold">OUR EXPERTISE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/services-img.jpg"
              alt="Construction Services"
              fill
              className="object-cover"
            />
            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Expert Construction Solutions
              </h3>
              <p className="text-slate-600">
                Bringing innovation and excellence to every project
              </p>
            </div>
          </motion.div>

          {/* Right Column - Services Cards */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex-shrink-0 flex items-center justify-center`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-primary text-sm font-medium mt-2"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
