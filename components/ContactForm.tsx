"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";
import { sendEmail } from "@/lib/actions";
import SuccessModal from "./SuccessModal";

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [formState, setFormState] = useState<{
    message: string;
    success: boolean;
  } | null>(null);
  const { pending } = useFormStatus();

  async function clientAction(formData: FormData) {
    const result = await sendEmail(formData);
    setFormState(result);
    if (result.success) {
      setShowModal(true);
      (document.getElementById("contactForm") as HTMLFormElement).reset();
    }
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
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 text-text-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 text-text-light "
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 text-text-light"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Project Type
            </label>
            <select
              name="projectType"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 text-text-light"
            >
              <option value="">Select a project type</option>
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
              <option value="industrial">Industrial</option>
              <option value="interior">Interior</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors shadow-sm hover:border-slate-300 resize-none text-text-light"
            ></textarea>
          </div>

          {state?.message && (
            <div
              className={`p-4 rounded-lg ${
                state.success
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {state.message}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={pending}
            className="w-full px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-md disabled:opacity-70"
          >
            {pending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
