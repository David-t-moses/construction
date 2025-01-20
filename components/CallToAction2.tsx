"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    title: "Call Us Now",
    description: "+1 (555) 123-4567",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "contact@Sudarshan Construction.com",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Calendar,
    title: "Book Meeting",
    description: "Schedule Consultation",
    color: "from-purple-500 to-purple-600",
  },
];

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold">
              GET STARTED TODAY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Construction Vision?
              </span>
            </h2>
            <p className="text-slate-300 text-lg">
              Let's collaborate to bring your construction dreams to life. Our
              expert team is ready to deliver excellence at every step.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-lg flex items-center gap-2 shadow-lg shadow-primary/30"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Contact Options */}
          <div className="grid gap-6">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center`}
                  >
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{option.title}</h3>
                    <p className="text-slate-300">{option.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary ml-auto transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
