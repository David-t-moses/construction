"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ArrowRight, ArrowLeft } from "lucide-react";
import { sendGetStartedRequest } from "@/lib/actions";
import SuccessModal from "@/components/SuccessModal";

const steps = [
  {
    id: 1,
    title: "Project Details",
    description: "Tell us more about your project",
    fields: [
      {
        type: "select",
        name: "projectSize",
        label: "Estimated Project Size",
        options: [
          { value: "small", label: "Small (< 1,000 sq ft)" },
          { value: "medium", label: "Medium (1,000 - 5,000 sq ft)" },
          { value: "large", label: "Large (> 5,000 sq ft)" },
        ],
      },
      {
        type: "select",
        name: "timeline",
        label: "Expected Timeline",
        options: [
          { value: "urgent", label: "Urgent (< 3 months)" },
          { value: "standard", label: "Standard (3-6 months)" },
          { value: "flexible", label: "Flexible (6+ months)" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Budget Range",
    description: "Help us understand your investment plans",
    fields: [
      {
        type: "radio",
        name: "budgetRange",
        options: [
          { value: "50k-100k", label: "$50,000 - $100,000", icon: "💰" },
          { value: "100k-250k", label: "$100,000 - $250,000", icon: "💰💰" },
          { value: "250k-500k", label: "$250,000 - $500,000", icon: "💰💰💰" },
          { value: "500k+", label: "$500,000+", icon: "💰💰💰💰" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Contact Information",
    description: "Let's get to know you",
    fields: [
      {
        type: "text",
        name: "fullName",
        label: "Full Name",
        placeholder: "John Doe",
        required: true,
      },
      {
        type: "email",
        name: "email",
        label: "Email Address",
        placeholder: "john@example.com",
        required: true,
      },
      {
        type: "tel",
        name: "phone",
        label: "Phone Number",
        placeholder: "(555) 123-4567",
        required: true,
      },
      {
        type: "textarea",
        name: "message",
        label: "Additional Details",
        placeholder: "Tell us more about your project requirements...",
        required: false,
      },
    ],
  },
];

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isStepValid = () => {
    const currentFields = steps[currentStep - 1].fields;
    return currentFields.every(
      (field) => formData[field.name] && formData[field.name].trim() !== ""
    );
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < steps.length && isStepValid()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isStepValid()) return;

    setIsSubmitting(true);

    const emailFormData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      emailFormData.append(key, value as string);
    });

    try {
      const result = await sendGetStartedRequest(emailFormData);
      if (result.success) {
        setShowModal(true);
        setFormData({});
        setCurrentStep(1);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.id <= currentStep
                      ? "bg-primary text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {step.id}
                </div>
              ))}
            </div>
            <div className="h-2 bg-slate-200 rounded-full">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{
                  width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  {steps[currentStep - 1].title}
                </h2>
                <p className="text-slate-600">
                  {steps[currentStep - 1].description}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {steps[currentStep - 1].fields.map((field, index) => (
                  <div key={index} className="space-y-4">
                    {field.type === "radio" ? (
                      <div className="grid grid-cols-2 gap-4">
                        {field.options.map((option) => (
                          <label
                            key={option.value}
                            className="relative flex flex-col items-center p-6 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors border-2 border-transparent focus-within:border-primary"
                          >
                            <input
                              type="radio"
                              name={field.name}
                              value={option.value}
                              onChange={handleInputChange}
                              className="sr-only text-text-light"
                            />
                            <span className="text-3xl mb-2">{option.icon}</span>
                            <span className="font-medium text-slate-900">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    ) : field.type === "select" ? (
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {field.label}
                        </label>
                        <select
                          name={field.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-text-light"
                        >
                          <option value="">Select an option</option>
                          {field.options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : field.type === "textarea" ? (
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {field.label}
                        </label>
                        <textarea
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-text-light resize-none"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-text-light"
                        />
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex justify-between pt-8">
                  <motion.button
                    whileHover={{ scale: currentStep > 1 ? 1.02 : 1 }}
                    whileTap={{ scale: currentStep > 1 ? 0.98 : 1 }}
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 flex items-center space-x-2 ${
                      currentStep === 1
                        ? "text-slate-400 cursor-not-allowed"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: isStepValid() ? 1.02 : 1 }}
                    whileTap={{ scale: isStepValid() ? 0.98 : 1 }}
                    type={currentStep === steps.length ? "submit" : "button"}
                    onClick={
                      currentStep === steps.length ? undefined : nextStep
                    }
                    disabled={!isStepValid() || isSubmitting}
                    className={`ml-auto px-8 py-3 bg-primary text-white rounded-lg flex items-center space-x-2 ${
                      !isStepValid() || isSubmitting
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <span>
                      {isSubmitting
                        ? "Submitting..."
                        : currentStep === steps.length
                        ? "Submit"
                        : "Next"}
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}
