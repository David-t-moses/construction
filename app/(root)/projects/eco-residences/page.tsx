"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EcoResidences() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-[70vh]">
        <Image
          src="/eco-hero.jpg"
          alt="Eco Residences"
          fill
          priority
          quality={85}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link
              href="/projects/#case-studies"
              className="inline-flex items-center text-white hover:text-white/90 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Case Studies
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl text-white"
            >
              <span className="px-4 py-1 bg-primary/20 text-white rounded-full text-sm mb-4 inline-block">
                Residential Project
              </span>
              <h1 className="text-5xl font-bold mb-4">Eco Residences</h1>
              <p className="text-xl text-white">
                Luxury sustainable living redefined with panoramic ocean views
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl py-20">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg max-w-none"
        >
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-900">Location</p>
              <p className="font-semibold text-slate-900">Coastal City, CA</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-900">
                Project Value
              </p>
              <p className="font-semibold text-slate-900">$65M</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-900">Total Units</p>
              <p className="font-semibold text-slate-900">120 Luxury Units</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-900">Completion</p>
              <p className="font-semibold text-slate-900">2023</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Project Overview
          </h2>
          <p className="text-slate-900 mb-8">
            Eco Residences stands as a testament to sustainable luxury living.
            This oceanfront development seamlessly integrates environmental
            consciousness with premium amenities, creating a new standard for
            coastal residential projects.
          </p>

          <div className="my-12">
            <Image
              src="/eco-exterior.jpg"
              alt="Eco Residences Exterior"
              width={900}
              height={500}
              quality={85}
              className="rounded-lg"
            />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Sustainable Living Features
          </h2>
          <ul className="space-y-3 text-slate-900 mb-8">
            <li>Solar-powered common areas and energy systems</li>
            <li>Smart home automation in every unit</li>
            <li>Greywater recycling system</li>
            <li>Native landscaping requiring minimal irrigation</li>
            <li>Electric vehicle charging stations</li>
          </ul>

          <div className="my-12">
            <Image
              src="/eco-interior.jpg"
              alt="Eco Residences Interior"
              width={900}
              height={500}
              quality={85}
              className="rounded-lg"
            />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Luxury Amenities
          </h2>
          <ul className="space-y-3 text-slate-900 mb-8">
            <li>Infinity pool overlooking the ocean</li>
            <li>State-of-the-art fitness center</li>
            <li>Rooftop garden and social spaces</li>
            <li>Private beach access</li>
            <li>24/7 concierge services</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Environmental Impact
          </h2>
          <p className="text-slate-900">
            The project achieved a 40% reduction in energy consumption compared
            to traditional residential buildings. Our innovative water
            management system saves over 1 million gallons annually, while the
            building's design promotes natural ventilation and maximizes
            daylight usage.
          </p>
        </motion.article>
      </div>
    </main>
  );
}
