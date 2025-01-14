"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Phone,
  Users,
  Building2,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Building2 },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "About", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-background/70 backdrop-blur-md z-50 border-b border-primary/10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center h-16 relative">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
            >
              ConstructCo
            </Link>
          </motion.div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-text hover:bg-primary/10 hover:text-primary focus:text-primary focus:font-semibold transition-all"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Get Started Button - Right Aligned */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block ml-auto px-6 py-2 bg-primary text-white rounded-lg"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden ml-auto p-2 hover:bg-primary/10 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-text" />
            ) : (
              <Menu className="w-6 h-6 text-text" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - With Icons */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        className="md:hidden bg-background/70 backdrop-blur-md border-t border-primary/10"
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <motion.div key={item.name} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.href}
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 text-text hover:text-primary focus:text-primary focus:font-semibold  transition-all"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            </motion.div>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 px-6 py-3 bg-primary text-white rounded-lg flex items-center justify-center space-x-2"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
