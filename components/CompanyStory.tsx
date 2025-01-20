"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "250+", label: "Team Members" },
];

export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Our Journey of{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-slate-600">
              Founded in 1998, Sudarshan Construction has grown from a small
              local contractor to one of the nation's leading construction
              firms. Our commitment to quality, innovation, and client
              satisfaction has been the cornerstone of our success.
            </p>
            <p className="text-slate-600">
              We've built our reputation on delivering complex projects on time
              and within budget, while maintaining the highest standards of
              safety and quality.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/services-img.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-8 border-white">
              <Image
                src="/hero-1.jpg"
                alt="Our Beginning"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
