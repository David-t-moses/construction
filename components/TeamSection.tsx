"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Harsh Singh",
    position: "Superviser",
    image: "/cl-1.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Pritam Sawant",
    position: "Site Manger",
    image: "/cl-2.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Vijay",
    position: "Employee",
    image: "/cl-3.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Bittu",
    position: "Employee",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Vinay Singh",
    position: "Site Engineer",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Divyahsh Singh",
    position: "Site Engineer",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Rajkumar Shukla",
    position: "Superviser",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Nikhil",
    position: "Site Engineer",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Jagram",
    position: "Employee",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Bittu",
    position: "Employee",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Dabalu",
    position: "Employee",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Dilip",
    position: "Employee",
    image: "/cl-4.webp",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Chandram",
    position: "Employee",
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
        {/* Header remains the same */}

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-team">
            {[...team, ...team].map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                className="flex-shrink-0 w-[250px] mx-3 group"
              >
                <div className="relative h-72 rounded-2xl overflow-hidden mb-4">
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
      </div>
    </section>
  );
}
