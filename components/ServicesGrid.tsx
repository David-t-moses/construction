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
    icon: Wrench,
    title: "High-Pressure Injection Grouting",
    description:
      "Secure and stabilize your structures with our advanced injection grouting solutions. Designed to fill voids, seal cracks, and strengthen foundations, this service ensures durability and enhances structural integrity.",
    image: "/1.jpg",
    features: [
      "Crack Sealing",
      "Foundation Strengthening",
      "Void Filling",
      "Structural Integrity",
    ],
  },
  {
    icon: Building2,
    title: "Specialized Concrete Repairs and Re-strengthening",
    description:
      "Restore and reinforce concrete structures with our expert repair solutions. From damage repair to load-bearing enhancements, we provide innovative techniques to bring long-lasting strength to your projects.",
    image: "/4.jpg",
    features: [
      "Damage Repair",
      "Structural Re-strengthening",
      "Crack Sealing",
      "Load-Bearing Enhancements",
    ],
  },
  {
    icon: HomeIcon,
    title: "Waterproofing Works",
    description:
      "Protect your spaces from water damage with our comprehensive waterproofing services for roofs, basements, bathrooms, and external walls. We also provide heat insulation treatments for added comfort and efficiency.",
    image: "/5.jpg",
    features: [
      "Roof Waterproofing",
      "Basement Waterproofing",
      "Bathroom Sealing",
      "Heat Insulation Treatments",
    ],
  },
  {
    icon: Ruler,
    title: "Expansion Joint Treatments",
    description:
      "Ensure flexibility and durability in your structures with our specialized expansion joint treatments. Prevent cracking, leaking, and movement issues with solutions tailored to withstand various pressures.",
    image: "/2.jpg",
    features: [
      "Flexibility Solutions",
      "Leak Prevention",
      "Durability Enhancements",
      "Custom Treatments",
    ],
  },
  {
    icon: PaintBucket,
    title: "Anti-Corrosion Coatings",
    description:
      "Guard your surfaces against rust and degradation with our high-performance anti-corrosion coatings. Ideal for industrial and residential applications, these treatments extend the life and appearance of your assets.",
    image: "/3.jpg",
    features: [
      "Rust Protection",
      "Long-Lasting Coatings",
      "Surface Preservation",
      "Industrial & Residential Solutions",
    ],
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

                {/* <button className="mt-4 px-6 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Learn More
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
