"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Phone, Mail, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import { validateEmail, validateName, sanitizeInput, rateLimitCheck } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });

  const validate = useCallback((vals: typeof values) => {
    const errs: Record<string, string> = {};
    if (!validateName(vals.name)) errs.name = "Please enter a valid name (2–50 letters).";
    if (!validateEmail(vals.email)) errs.email = "Please enter a valid email address.";
    if (vals.message.trim().length < 10) errs.message = "Message must be at least 10 characters.";
    if (vals.message.trim().length > 500) errs.message = "Message must be under 500 characters.";
    return errs;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitized = value.replace(/<[^>]*>/g, "");
    setValues((prev) => ({ ...prev, [name]: sanitized }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    if (!rateLimitCheck("contact_form", 3, 60000)) {
      setErrors({ _form: "Too many submissions. Please wait a minute and try again." });
      return;
    }
    setFormState("submitting");
    const safe = {
      name: sanitizeInput(values.name),
      email: sanitizeInput(values.email),
      phone: sanitizeInput(values.phone),
      message: sanitizeInput(values.message),
    };
    await new Promise<void>((res) => setTimeout(res, 1800));
    console.log("Form submitted:", safe);
    setFormState("success");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F0FFFE] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(6,182,212,0.12) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag mb-4">Get In Touch</div>
          <h2 className="section-heading text-navy-800 mb-4">
            Questions?{" "}
            <em className="text-gradient not-italic">We&apos;re Here</em>
          </h2>
          <p className="text-navy-500 text-lg font-light">
            Call us, stop by, or send a message. We love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                desc: "Fastest way to reach us",
                value: "(405) 748-8990",
                href: "tel:+14057488990",
                color: "text-cyan-500",
                bg: "bg-cyan-500/10",
              },
              {
                icon: Mail,
                title: "Email Us",
                desc: "We reply within 24 hours",
                value: "info@bubbleslaundromat.com",
                href: "mailto:info@bubbleslaundromat.com",
                color: "text-indigo-500",
                bg: "bg-indigo-500/10",
              },
              {
                icon: MessageSquare,
                title: "Visit Us",
                desc: "Walk-ins always welcome",
                value: "815 W Britton Rd, OKC, OK 73114",
                href: "#location",
                color: "text-violet-500",
                bg: "bg-violet-500/10",
              },
            ].map(({ icon: Icon, title, desc, value, href, color, bg }, i) => (
              <motion.a
                key={i}
                href={href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all duration-200 group"
                whileHover={{ x: 4 }}
              >
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                  <div className="font-semibold text-navy-800 text-sm group-hover:text-cyan-600 transition-colors">
                    {title}
                  </div>
                  <div className="text-navy-400 text-xs mb-0.5">{desc}</div>
                  <div className="text-navy-600 text-sm font-medium">{value}</div>
                </div>
              </motion.a>
            ))}

            <motion.a
              href="tel:+14057488990"
              className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl text-white font-bold text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-6 h-6" />
              Call Now: (405) 748-8990
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="font-display text-2xl text-navy-800 mb-2">Message Sent!</h3>
                <p className="text-navy-500 text-sm mb-6">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setFormState("idle"); setValues({ name: "", email: "", phone: "", message: "" }); }}
                  className="btn-primary mx-auto text-sm"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <h3 className="font-display text-2xl text-navy-800 mb-5">Send a Message</h3>

                {errors._form && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errors._form}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wide">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      maxLength={50}
                      autoComplete="name"
                      className={`form-input ${errors.name ? "border-red-400 ring-1 ring-red-400" : ""}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      maxLength={254}
                      autoComplete="email"
                      className={`form-input ${errors.email ? "border-red-400 ring-1 ring-red-400" : ""}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wide">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="(405) 000-0000"
                    maxLength={20}
                    autoComplete="tel"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-600 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    maxLength={500}
                    className={`form-input resize-none ${errors.message ? "border-red-400 ring-1 ring-red-400" : ""}`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    ) : <span />}
                    <span className="text-navy-300 text-xs">{values.message.length}/500</span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-primary w-full justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={formState !== "submitting" ? { scale: 1.02 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  {formState === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </motion.button>

                <p className="text-navy-300 text-xs text-center">
                  Your information is secure and never shared with third parties.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
