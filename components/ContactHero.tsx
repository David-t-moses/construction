"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 (983) 397-6319",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@Sudarshan Construction.com",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapPin,
    title: "Office",
    details:
      "City Mall 1st floor office No. A112 Near Pendharkar College M.I.D.C. Dombivali (East) pin-421203 mumbai.",
    color: "from-purple-500 to-purple-600",
  },
];

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-2.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-primary font-semibold">GET IN TOUCH</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-slate-300 text-lg">
              Ready to start your next construction project? Contact us today
              for a consultation and let's bring your vision to life.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{info.title}</h3>
                    <p className="text-slate-300">{info.details}</p>
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
