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

const testimonials = [
  {
    name: "Robert Chen",
    position: "CEO, Tech Innovations",
    image: "/cl-1.jpg",
    quote:
      "The attention to detail and commitment to excellence exceeded our expectations. A truly remarkable construction partner.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    position: "Director, Urban Development",
    image: "/cl-2.jpg",
    quote:
      "Their innovative approach and professional execution made our complex project a seamless experience.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    position: "Property Developer",
    image: "/cl-3.jpg",
    quote:
      "Outstanding quality and reliability. They've consistently delivered excellence across multiple projects.",
    rating: 5,
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
                  <h4 className="text-4xl font-bold text-primary">25+</h4>
                  <p className="text-slate-600">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-primary">500+</h4>
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
                  ConstructCo
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Client{" "}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h4 className="text-text-light font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
