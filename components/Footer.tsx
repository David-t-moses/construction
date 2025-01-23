"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <Image
                src="/logo.webp"
                alt="logo"
                height={30}
                width={30}
                className="rounded-full"
              />
              </div>
              <span className="text-xl text-black/60 font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Sudarshan Construction
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
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
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
                "High Pressure Injection Grouting",
                "Specialized Concrete Re-Strengthening",
                "Waterproofing works",
                "Expansion Joint Treatments",
                "Anti - Corrosion Coatings",
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <Link
                    href="/services/#services-grid"
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
                  text: "City Mall 1st floor office No. A112 Near Pendharkar College M.I.D.C. Dombivali (East) pin-421203 mumbai.",
                },
                { icon: Phone, text: "+91 (983) 397-6319" },
                { icon: Mail, text: "sudarshanconstruction9@gmail.com" },
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
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
              © {new Date().getFullYear()} Sudarshan Construction. All rights
              reserved.
            </p>
            {/* <div className="flex space-x-6">
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
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
