"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Download, Building2 } from "lucide-react";

const certificates = [
  {
    title: "Afcons Infra WB Certificate",
    description: "",
    image: "/PDF_file_icon.svg.png",
    pdfUrl: "/cert/Afcons Infra WB Certificate.pdf",
  },
  {
    title: "HCC-SAMSUNG WORK COMPLETION CERTIFICATE",
    description: "",
    image: "/PDF_file_icon.svg.png",
    pdfUrl: "/cert/HCC-SAMSUNG WORK COMPLETION CERTIFICATE GM - 1.pdf",
  },
  {
    title: "Project Pkg 8 of NCRTC",
    description: "",
    image: "/PDF_file_icon.svg.png",
    pdfUrl: "/cert/Project Pkg 8 of NCRTC.pdf",
  },
  {
    title: "Pune Metro Rail Project",
    description: "",
    image: "/PDF_file_icon.svg.png",
    pdfUrl: "/cert/Pune Metro Rail Project.pdf",
  },
  {
    title: "J Kumar CRTG (JV) Work Completion Certificate",
    description: "",
    image: "/jpg-icon.png",
    pdfUrl: "/cert/J Kumar CRTG (JV) Work Completion Certificate.jpeg",
  },
  {
    title: "Delhi Metro Rail Corporation Ltd.",
    description: "",
    image: "/jpg-icon.png",
    pdfUrl: "/cert/Delhi Metro Rail Corporation Ltd.jpeg",
  },
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero-1.jpg"
            alt="Certificates Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Credentials &
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                {" "}
                Partnerships
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Explore our industry certifications and strategic partnerships
              that demonstrate our commitment to excellence and quality
              standards.
            </p>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-slate-300">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-slate-300">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">14+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <h1 className="text-4xl font-bold text-slate-800 mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Certifications
              </span>
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image src={cert.image} alt={cert.title} fill />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl text-black font-semibold mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{cert.description}</p>
                    <a
                      href={cert.pdfUrl}
                      download
                      className="inline-flex items-center text-primary hover:text-primary-dark"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Certificate
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
