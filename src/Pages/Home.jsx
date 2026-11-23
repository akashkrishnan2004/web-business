import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Palette,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { services } from "../Data/service";
import { projects } from "../Data/project";

import ServiceCard from "../Components/ServiceCard";
import ProjectCard from "../Components/ProjectCard";

function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-red-500/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-8">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              <Sparkles size={16} />
              Creative Web Development Studio
            </div>

            <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              We Build
              <span className="block text-red-500">Digital</span>
              Experiences.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">
              From college projects to professional portfolios and business
              websites, we turn your ideas into modern digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-red-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-500"
              >
                Explore Our Work
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Technologies */}
            <div className="mt-14">
              <p className="text-xs font-medium uppercase tracking-[3px] text-zinc-500">
                Technologies We Work With
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "MongoDB",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl border border-white/10 bg-[#111113] p-5 shadow-2xl shadow-red-500/5 sm:p-8">
              <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />

                <span className="ml-auto text-xs text-zinc-500">
                  creative-studio.jsx
                </span>
              </div>

              <div className="py-10">
                <p className="text-sm text-red-400">
                  // Your vision, our creativity
                </p>

                <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Turning Ideas Into
                  <span className="block text-red-500">Reality.</span>
                </h2>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  Beautiful designs. Powerful development. Experiences that make
                  a difference.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <Code2 className="text-red-500" size={25} />
                    <h3 className="mt-4 font-semibold text-white">
                      Development
                    </h3>
                    <p className="mt-2 text-xs text-zinc-500">
                      Clean & modern code
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                    <Palette className="text-red-500" size={25} />
                    <h3 className="mt-4 font-semibold text-white">
                      Creative Design
                    </h3>
                    <p className="mt-2 text-xs text-zinc-500">
                      Unique experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -bottom-6 -right-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#18181b] p-4 shadow-xl sm:flex">
              <div className="rounded-full bg-green-500/10 p-2 text-green-400">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Ideas to Reality
                </p>
                <p className="text-xs text-zinc-500">
                  Let's build something great
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-[#0e0e10] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
                What We Do
              </p>

              <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-5xl">
                Our Services
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                We provide creative and reliable web development solutions
                designed around your needs.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400"
            >
              View All Services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              Why Choose Us
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
              We Don't Just Build Websites.
              <span className="text-red-500"> We Build Experiences.</span>
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Every project deserves attention to detail. We focus on
              understanding your requirements and creating websites that combine
              modern design, performance and functionality.
            </p>

            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-500"
            >
              Know More About Us
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Palette,
                title: "Modern Design",
                description: "Clean, attractive and user-friendly interfaces.",
              },
              {
                icon: Code2,
                title: "Quality Development",
                description: "Reliable and maintainable development practices.",
              },
              {
                icon: Rocket,
                title: "Fast Performance",
                description: "Optimized websites for better user experience.",
              },
              {
                icon: CheckCircle2,
                title: "Responsive Design",
                description: "Websites that work across all screen sizes.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-[#111113] p-7 transition hover:border-red-500/40"
                >
                  <Icon size={30} className="text-red-500" />

                  <h3 className="mt-6 font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-[#0e0e10] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
                Our Portfolio
              </p>

              <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-5xl">
                Featured Projects
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-zinc-400">
                A glimpse of our creativity, ideas and development work.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400"
            >
              Explore All Projects
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              How We Work
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-5xl">
              Simple Process.
              <span className="text-red-500"> Great Results.</span>
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              From your first idea to the final launch, we keep the process
              simple and transparent.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                description: "We understand your ideas and requirements.",
              },
              {
                number: "02",
                title: "Plan & Design",
                description: "We plan the structure and design your website.",
              },
              {
                number: "03",
                title: "Develop",
                description: "We transform the design into a working website.",
              },
              {
                number: "04",
                title: "Deliver",
                description: "We test, launch and deliver your website.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="border-l-2 border-red-500/40 pl-6"
              >
                <span className="font-heading text-4xl font-bold text-red-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-red-500/20 bg-[#171113] px-7 py-20 text-center sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-500/20 blur-[100px]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              Have a Project in Mind?
            </p>

            <h2 className="mx-auto mt-6 max-w-3xl font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
              Let's Build Something
              <span className="text-red-500"> Amazing Together.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-zinc-400">
              Have an idea? We'd love to hear about it. Let's discuss your
              project and bring your vision to life.
            </p>

            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-red-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Let's Talk
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
