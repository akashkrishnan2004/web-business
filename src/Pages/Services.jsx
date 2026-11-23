import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import { services } from "../Data/service";
import ServiceCard from "../Components/ServiceCard";

export default function Services() {
  return (
    <main>

      {/* PAGE HERO */}
      <section className="relative overflow-hidden border-b border-white/10 py-24">

        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mx-auto max-w-4xl px-5 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
            What We Offer
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-6xl">
            Services Designed
            <span className="text-red-500"> Around You.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            From student projects to professional business websites,
            we provide solutions that bring your ideas to life.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="bg-[#111113] py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
                Our Commitment
              </p>

              <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
                Quality Work.
                <span className="text-red-500"> Every Time.</span>
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                We focus on understanding your requirements and providing
                solutions that match your goals.
              </p>
            </div>

            <div className="space-y-5">
              {[
                "Modern and responsive websites",
                "Clean and maintainable code",
                "User-friendly interfaces",
                "Clear project communication",
                "Reliable delivery and support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="shrink-0 text-red-500" size={22} />
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Have Something in Mind?
        </h2>

        <p className="mt-5 text-zinc-400">
          Let's discuss your next project.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-4 font-semibold text-white transition hover:bg-red-600"
        >
          Start a Project
          <ArrowUpRight size={18} />
        </Link>

      </section>

    </main>
  );
}
