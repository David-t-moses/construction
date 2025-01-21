"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Clock, Shield, Star } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized excellence in construction and design",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly skilled professionals with decades of experience",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Consistent track record of timely project completion",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control and safety standards",
  },
];

const clients = [
  {
    name: "Seven Hills Healthcare Limited",
    location: "Marol Maroshi, Andheri (East)",
    logo: "/company-logo.webp",
  },
  {
    name: "NIRLON Knowledge Park",
    location: "Goregaon, Mumbai",
    logo: "/company-logo.webp",
  },
  {
    name: "HCC (BWSL Project)",
    location: "Bandra Worli Sea Link, Mumbai",
    logo: "/company-logo.webp",
  },
  {
    name: "Evershine Builders Pvt. Ltd",
    location: "Mumbai",
    logo: "/company-logo.webp",
  },
  {
    name: "Reliance Rabale",
    location: "Mumbai",
    logo: "/company-logo.webp",
  },
  {
    name: "Sterlite Foundation",
    location: "Marine Line",
    logo: "/company-logo.webp",
  },
  {
    name: "Aker Kvaerner Power Gas",
    location: "Kalyan Santacruz",
    logo: "/company-logo.webp",
  },
  {
    name: "Nav Nilambari C.H.S",
    location: "M.I.D.C Dombivali",
    logo: "/company-logo.webp",
  },
  {
    name: "HCC Marol Naka Metro",
    location: "Kurla Andheri Road",
    logo: "/company-logo.webp",
  },
  {
    name: "Adarsh Baug Hotel",
    location: "Marine Line",
    logo: "/company-logo.webp",
  },
  {
    name: "Gammon India LTD",
    location: "Novotel Hotel Project, Andheri",
    logo: "/company-logo.webp",
  },
  {
    name: "IVRCL (CIDCO)",
    location: "Vashi, Navi Mumbai",
    logo: "/company-logo.webp",
  },
  {
    name: "Kanakia Pvt. Ltd",
    location: "Marol Naka, Andheri",
    logo: "/company-logo.webp",
  },
  {
    name: "Gurukripa Enterprises",
    location: "Ghatkopar",
    logo: "/company-logo.webp",
  },
  {
    name: "Larsen & Toubro Limited",
    location: "Multiple Projects",
    logo: "/company-logo.webp",
  },
  {
    name: "J. Kumar Infrastructure Ltd",
    location: "DMRC Projects",
    logo: "/company-logo.webp",
  },
  {
    name: "TPL Gulermak JV",
    location: "Lucknow Metro Project",
    logo: "/company-logo.webp",
  },
  {
    name: "Afcons Infrastructure Limited",
    location: "Multiple Metro Projects",
    logo: "/company-logo.webp",
  },
  {
    name: "Transtonnelstroy Afcons JV",
    location: "Kolkata Metro Project",
    logo: "/company-logo.webp",
  },
  {
    name: "TOSHIBA JSW Power Systems",
    location: "Harduaganj, Aligarh",
    logo: "/company-logo.webp",
  },
  {
    name: "Larsen & Toubro Limited",
    location: "MTHL Package - 1 Project, Mumbai",
    logo: "/company-logo.webp",
  },
  {
    name: "Larsen & Toubro Limited",
    location: "Bullet Train, Vadodara",
    logo: "/company-logo.webp",
  },
  {
    name: "Larsen & Toubro Limited",
    location: "Coastal Project, Mumbai Metro",
    logo: "/company-logo.webp",
  },
  {
    name: "Afcons Infrastructure Ltd",
    location: "Meerut Package - 08",
    logo: "/company-logo.webp",
  },
  {
    name: "Larsen & Toubro - STEC JV",
    location: "Package - 01 & 07, Mumbai Metro",
    logo: "/company-logo.webp",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Why Choose Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/w-1.jpg"
                alt="Construction Excellence"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-4xl font-bold text-primary">14+</h4>
                  <p className="text-slate-600">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-primary">300+</h4>
                  <p className="text-slate-600">Projects Completed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Sudarshan Construction
                </span>
              </h2>
              <p className="mt-4 text-slate-600">
                We bring together expertise, innovation, and reliability to
                deliver exceptional construction solutions.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-text-light text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Our Trusted{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Clients
              </span>
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-team">
              {[...clients, ...clients].map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-[300px] mx-3"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-24 flex items-center justify-center mb-4">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        width={160}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-slate-800">
                        {client.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {client.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
