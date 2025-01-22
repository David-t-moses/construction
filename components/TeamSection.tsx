"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";

const team = [
  {
    name: "Harsh Singh",
    position: "Supervisor",
  },
  {
    name: "Rajkumar Shukla",
    position: "Supervisor",
  },
  {
    name: "Pritam Sawant",
    position: "Site Manager",
  },
  {
    name: "Vinay Singh",
    position: "Site Engineer",
  },
  {
    name: "Divyahsh Singh",
    position: "Site Engineer",
  },

  {
    name: "Nikhil",
    position: "Site Engineer",
  },
  {
    name: "Vijay",
    position: "Employee",
  },
  {
    name: "Jagram",
    position: "Employee",
  },
  {
    name: "Bittu",
    position: "Employee",
  },
  {
    name: "Dabalu",
    position: "Employee",
  },
  {
    name: "Dilip",
    position: "Employee",
  },
  {
    name: "Chandram",
    position: "Employee",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Team Members
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Meet our dedicated professionals who make excellence possible
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/labour-contractors-for-office-staff-022pxx22.xx22.160213102503.c6j9-ws0zkw7.webp"
                alt="Our Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center gap-4">
                    <Users className="w-8 h-8 text-white" />
                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        {team.length}+
                      </h4>
                      <p className="text-white/80">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team List Section */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-lg font-semibold text-primary">
                      {member.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-600">{member.position}</p>
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
