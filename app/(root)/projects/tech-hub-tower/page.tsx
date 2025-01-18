"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TechHubTower() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-[70vh]">
        <Image
          src="/tech-hub-hero.jpg"
          alt="Tech Hub Tower"
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
                Commercial Project
              </span>
              <h1 className="text-5xl font-bold mb-4">Tech Hub Tower</h1>
              <p className="text-xl text-white">
                A 25-story modern office complex redefining sustainable
                architecture in Silicon Valley
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
              <p className="font-semibold text-slate-900">Silicon Valley, CA</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-900">
                Project Value
              </p>
              <p className="font-semibold text-slate-900">$85M</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-900">Duration</p>
              <p className="font-semibold text-slate-900">24 months</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-900">
                Square Footage
              </p>
              <p className="font-semibold text-slate-900">450,000 sq ft</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Project Overview
          </h2>
          <p className="text-slate-900 mb-8">
            Tech Hub Tower represents a breakthrough in sustainable commercial
            architecture. This 25-story structure combines cutting-edge design
            with environmental responsibility, setting new standards for modern
            office spaces in Silicon Valley.
          </p>

          <div className="my-12">
            <Image
              src="/tech-hub-interior.jpg"
              alt="Tech Hub Interior"
              width={900}
              height={500}
              quality={85}
              className="rounded-lg"
            />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Sustainable Features
          </h2>
          <ul className="space-y-3 text-slate-900 mb-8">
            <li>
              Solar-integrated facade generating 15% of building power needs
            </li>
            <li>
              Smart building management system reducing energy consumption by
              30%
            </li>
            <li>
              Rainwater harvesting system supporting 60% of irrigation needs
            </li>
            <li>Green spaces across 15 floors promoting biodiversity</li>
            <li>LEED Platinum certification achieved</li>
          </ul>

          <div className="my-12">
            <Image
              src="/tech-hub-exterior.jpg"
              alt="Tech Hub Exterior"
              width={900}
              height={500}
              quality={85}
              className="rounded-lg"
            />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Innovation & Technology
          </h2>
          <p className="text-slate-900 mb-4">
            The building incorporates state-of-the-art technologies including:
          </p>
          <ul className="space-y-3 text-slate-900 mb-8">
            <li>AI-powered climate control systems</li>
            <li>Touchless access throughout the building</li>
            <li>Smart elevator systems with predictive algorithms</li>
            <li>IoT sensors monitoring air quality and occupancy</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Impact & Recognition
          </h2>
          <p className="text-slate-900">
            Tech Hub Tower has received multiple awards for its innovative
            design and sustainable features, including the 2023 Sustainable
            Building of the Year award. The project has become a blueprint for
            future commercial developments in the region.
          </p>
        </motion.article>
      </div>
    </main>
  );
}
