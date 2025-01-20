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
    title: "High Pressure Injection Grouting",
    description:
      "Secure and stabilize your structures with our advanced injection grouting solutions. Designed to fill voids, seal cracks, and strengthen foundations, this service ensures durability and enhances structural integrity.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: HomeIcon,
    title: "Specialized Concrete Repairs and Re-strengthening",
    description:
      "Restore and reinforce concrete structures with our expert repair solutions. From damage repair to load-bearing enhancements, we provide innovative techniques to bring long-lasting strength to your projects.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Wrench,
    title: "Waterproofing Works",
    description:
      "Protect your spaces from water damage with our comprehensive waterproofing services for roofs, basements, bathrooms, and external walls. We also provide heat insulation treatments for added comfort and efficiency.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: PaintBucket,
    title: "Expansion Joint Treatments",
    description:
      "Ensure flexibility and durability in your structures with our specialized expansion joint treatments. Prevent cracking, leaking, and movement issues with solutions tailored to withstand various pressures.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Ruler,
    title: "Anti-Corrosion Coatings",
    description:
      "Guard your surfaces against rust and degradation with our high-performance anti-corrosion coatings. Ideal for industrial and residential applications, these treatments extend the life and appearance of your assets.",
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
                      href={"/services"}
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
