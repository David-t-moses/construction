"use client";
import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

export default function ServiceModal({ isOpen, onClose, service }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden"
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <service.icon className="absolute bottom-6 left-6 w-12 h-12 text-white" />
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <Dialog.Title className="text-2xl font-bold text-slate-800">
                      {service.title}
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-slate-600">
                      {service.description}
                    </Dialog.Description>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start space-x-2 text-slate-600"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <Link href="/get-started">
                      <button
                        onClick={onClose}
                        className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        Get Started
                      </button>
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
