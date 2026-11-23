import { useState } from "react";
import { motion } from "framer-motion";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  MessageCircle,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  // Replace with your actual WhatsApp number.
  // Include country code without + or spaces.
  const businessWhatsApp = "91XXXXXXXXXX";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
*New Project Enquiry*

*Name:* ${formData.name}

*Email:* ${formData.email}

*Phone:* ${formData.phone}

*Service:* ${formData.service}

*Budget:* ${formData.budget || "Not specified"}

*Project Description:*
${formData.message}
    `;

    const whatsappURL = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10 py-24">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-4xl px-5 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
            Get In Touch
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-6xl">
            Let's Talk About
            <span className="text-red-500"> Your Project.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            Have an idea or need a website? Tell us about your project. We'd
            love to work with you.
          </p>
        </motion.div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-5 lg:px-8">
          {/* CONTACT INFORMATION */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              Contact Information
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold text-white">
              Let's Start a Conversation.
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Reach out to us through any of the following channels. We're happy
              to discuss your requirements.
            </p>

            <div className="mt-10 space-y-7">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-500">
                  <Mail size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Email Us</h3>

                  <a
                    href="mailto:yourbusiness@email.com"
                    className="mt-2 block text-sm text-zinc-400 hover:text-red-500"
                  >
                    yourbusiness@email.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-500">
                  <Phone size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Call Us</h3>

                  <p className="mt-2 text-sm text-zinc-400">+91 XXXXXXXXXX</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-red-500/10 p-3 text-red-500">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Location</h3>

                  <p className="mt-2 text-sm text-zinc-400">Kerala, India</p>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <h3 className="font-semibold text-white">Follow Us</h3>

              <div className="mt-5 flex gap-3">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href={`https://wa.me/${businessWhatsApp}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-3xl border border-white/10 bg-[#111113] p-6 sm:p-10 lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-white">
              Tell Us About Your Project
            </h2>

            <p className="mt-3 text-sm text-zinc-400">
              Fill in the details below and we'll connect with you.
            </p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-6">
              {/* Name and Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm text-zinc-300">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm text-zinc-300">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
                  />
                </div>
              </div>

              {/* Phone and Service */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm text-zinc-300">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm text-zinc-300">
                    Service Required *
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-4 text-sm text-zinc-300 outline-none transition focus:border-red-500"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="College Mini Project">
                      College Mini Project
                    </option>

                    <option value="College Major Project">
                      College Major Project
                    </option>

                    <option value="Portfolio Website">Portfolio Website</option>

                    <option value="Business Website">Business Website</option>

                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="mb-3 block text-sm text-zinc-300">
                  Estimated Budget
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#09090b] px-4 py-4 text-sm text-zinc-300 outline-none transition focus:border-red-500"
                >
                  <option value="">Select your budget</option>
                  <option value="Below ₹5,000">Below ₹5,000</option>
                  <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                  <option value="₹10,000 - ₹20,000">₹10,000 - ₹20,000</option>
                  <option value="Above ₹20,000">Above ₹20,000</option>
                  <option value="Not decided">Not decided</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 block text-sm text-zinc-300">
                  Project Description *
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your project requirements..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#09090b] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Send Enquiry via WhatsApp
                <Send size={18} />
              </button>

              <p className="text-center text-xs text-zinc-500">
                You'll be redirected to WhatsApp to send your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

