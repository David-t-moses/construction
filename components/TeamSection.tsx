"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    image: "/cl-1.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sarah Johnson",
    position: "Chief Architect",
    image: "/cl-2.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Chen",
    position: "Project Director",
    image: "/cl-3.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Brown",
    position: "Operations Manager",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function TeamSection() {
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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to delivering excellence in
            every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-primary transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">
                {member.name}
              </h3>
              <p className="text-slate-600">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
