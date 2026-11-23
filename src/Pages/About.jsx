import { motion } from "framer-motion";
import {
  Code2,
  Target,
  Lightbulb,
  Rocket,
  Users,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function About() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

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
            About Us
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-6xl">
            Two Minds.
            <span className="text-red-500"> One Vision.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            We are a small web development team passionate about
            technology, creativity and building meaningful digital
            experiences.
          </p>
        </motion.div>

      </section>

      {/* INTRODUCTION */}
      <section className="py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              Who We Are
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
              Turning Creative Ideas Into
              <span className="text-red-500"> Digital Solutions.</span>
            </h2>

            <p className="mt-7 leading-8 text-zinc-400">
              We started with a simple idea: helping people bring their
              digital ideas to life.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              Whether it's a college project, a personal portfolio or
              a business website, we focus on creating modern,
              responsive and user-friendly solutions.
            </p>

            <p className="mt-5 leading-8 text-zinc-400">
              Our goal is to combine creativity and technology to
              deliver websites that make a difference.
            </p>

          </div>

          {/* Visual Card */}
          <div className="relative rounded-3xl border border-white/10 bg-[#111113] p-8 sm:p-12">

            <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-red-500/10 blur-2xl" />

            <Code2 size={45} className="text-red-500" />

            <h3 className="mt-8 font-heading text-3xl font-bold text-white">
              Build.
              <span className="text-red-500"> Create.</span>
              <br />
              Innovate.
            </h3>

            <p className="mt-6 leading-8 text-zinc-400">
              Every great website begins with an idea.
              We help transform that idea into a digital experience.
            </p>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs uppercase tracking-[3px] text-zinc-500">
                Our Philosophy
              </p>

              <p className="mt-3 text-lg font-semibold text-white">
                Creativity meets technology.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* MISSION AND VISION */}
      <section className="bg-[#0e0e10] py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              What Drives Us
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
              Our Mission & Vision
            </h2>

          </div>

          <div className="grid gap-7 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-[#111113] p-8 sm:p-10">

              <Target size={35} className="text-red-500" />

              <h3 className="mt-7 font-heading text-2xl font-semibold text-white">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                To provide accessible, creative and reliable web
                development solutions that help students,
                professionals and businesses establish their
                digital presence.
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-[#111113] p-8 sm:p-10">

              <Lightbulb size={35} className="text-red-500" />

              <h3 className="mt-7 font-heading text-2xl font-semibold text-white">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-zinc-400">
                To grow into a creative digital studio known for
                quality work, innovative ideas and meaningful
                digital experiences.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* OUR VALUES */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              Our Approach
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
              What Makes Us Different
            </h2>

          </div>

          <div className="grid gap-7 md:grid-cols-3">

            {[
              {
                icon: Lightbulb,
                title: "Creative Thinking",
                description:
                  "We approach every project with fresh ideas and creative solutions.",
              },
              {
                icon: Code2,
                title: "Modern Technology",
                description:
                  "We use modern development tools and technologies to build websites.",
              },
              {
                icon: Rocket,
                title: "Continuous Improvement",
                description:
                  "We continuously learn, improve and refine our development process.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#111113] p-8 transition hover:border-red-500/40"
                >
                  <Icon size={32} className="text-red-500" />

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* FOUNDERS SECTION */}
      <section className="bg-[#0e0e10] py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-14 text-center">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              Meet The Team
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
              The People Behind The Work
            </h2>

            <p className="mt-5 text-zinc-400">
              Two developers working together to turn ideas into reality.
            </p>

          </div>

          <div className="mx-auto grid max-w-3xl gap-7 sm:grid-cols-2">

            {[
              {
                name: "Founder One",
                role: "Co-Founder & Developer",
                description: "Creative development and digital solutions.",
              },
              {
                name: "Founder Two",
                role: "Co-Founder & Developer",
                description: "Building modern and meaningful web experiences.",
              },
            ].map((founder) => (
              <div
                key={founder.name}
                className="rounded-2xl border border-white/10 bg-[#111113] p-8 text-center"
              >

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
                  <Users size={35} className="text-red-500" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {founder.name}
                </h3>

                <p className="mt-2 text-sm text-red-500">
                  {founder.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {founder.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TECHNOLOGIES */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
            Our Tech Stack
          </p>

          <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
            Technologies We Use
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-[#111113] px-6 py-3 text-sm text-zinc-300 transition hover:border-red-500 hover:text-red-500"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-5 pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl rounded-3xl border border-red-500/20 bg-[#171113] px-7 py-16 text-center sm:px-12">

          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Let's Create Something Together.
          </h2>

          <p className="mt-5 text-zinc-400">
            Have an idea? We're ready to hear about it.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;