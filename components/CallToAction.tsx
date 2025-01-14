"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 flex flex-col"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Ready to Start Your Next
            <span className="block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent mt-2">
              Construction Project?
            </span>
          </h2>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-lg flex items-center gap-2 mx-auto shadow-lg shadow-primary/30"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
