"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/lib/actions";
import SuccessModal from "./SuccessModal";

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const { pending } = useFormStatus();

  async function clientAction(formData: FormData) {
    setIsSubmitting(true);
    const result = await sendEmail(formData);
    setFormState(result);
    if (result.success) {
      setShowModal(true);
      (document.getElementById("contactForm") as HTMLFormElement).reset();
    }
    setIsSubmitting(false);
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-200 to-slate-300">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.form
          id="contactForm"
          action={clientAction}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-2xl p-8 md:p-10 shadow-lg space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const formData = new FormData(form);
            clientAction(formData);
          }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                autoComplete="given-name"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 appearance-none"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                autoComplete="family-name"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 appearance-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 appearance-none"
            />
          </div>
          {/* 
          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Project Type
            </label>
            <div className="relative">
              <select
                id="projectType"
                name="projectType"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 appearance-none pr-10"
              >
                <option value="">Select a project type</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none" />
            </div>
          </div> */}

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 resize-none appearance-none"
            ></textarea>
          </div>

          {/* {formState?.message && (
            <div
              className={`p-4 rounded-lg ${
                formState.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {formState.message}
            </div>
          )} */}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting || pending}
            className="w-full px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md disabled:opacity-70 flex items-center justify-center space-x-2"
          >
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </motion.button>
        </motion.form>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
