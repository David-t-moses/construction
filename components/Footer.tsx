"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                ConstructCo
              </span>
            </div>
            <p className="text-text-light">
              Building dreams into reality with innovation and excellence in
              construction.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-light text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <motion.li key={item} whileHover={{ x: 5 }}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-text-light hover:text-primary flex items-center space-x-1"
                    >
                      <span>{item}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-text-light text-lg font-semibold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                "Commercial Construction",
                "Residential Projects",
                "Interior Design",
                "Renovation",
                "Construction Planning",
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link
                    href="#"
                    className="text-text-light hover:text-primary flex items-center space-x-1"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-text-light text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text: "123 Construction Ave, Building City, BC 12345",
                },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "info@constructco.com" },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <item.icon className="w-5 h-5 text-primary mt-1" />
                  <span className="text-text-light">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-light text-sm">
              © {new Date().getFullYear()} ConstructCo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-sm text-text-light hover:text-primary"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
