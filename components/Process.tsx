"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, Hammer, CheckCircle } from "lucide-react";

const processes = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Planning & Design",
    description:
      "Detailed project planning, architectural design, and requirements gathering.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Development",
    description:
      "Creating detailed blueprints and securing necessary permits and approvals.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Construction",
    description:
      "Expert execution with quality materials and skilled craftsmanship.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Completion",
    description: "Final inspections, quality assurance, and project handover.",
    color: "from-purple-500 to-purple-600",
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Construction{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A systematic approach to bringing your construction projects to
            life, ensuring quality and efficiency at every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connecting Line */}
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-slate-300 -translate-y-1/2 z-0" />
              )}

              <div className="relative z-10 text-center p-6 rounded-xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r ${process.color} flex items-center justify-center`}
                  >
                    <process.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="absolute -top-4 -right-4 text-5xl font-bold text-slate-300 select-none">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-text-light text-xl font-semibold mb-2">
                  {process.title}
                </h3>
                <p className="text-slate-600">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
