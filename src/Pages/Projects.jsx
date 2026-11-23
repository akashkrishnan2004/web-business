import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen } from "lucide-react";

import { projects } from "../Data/project";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

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
            Our Portfolio
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-6xl">
            Ideas We've
            <span className="text-red-500"> Brought to Life.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            Explore our collection of projects, creative ideas and
            digital experiences.
          </p>
        </motion.div>

      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* Section Heading */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
                Selected Work
              </p>

              <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
                Explore Our Projects
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <FolderOpen size={18} />
              {filteredProjects.length} Projects
            </div>

          </div>

          {/* Category Filters */}
          <div className="mt-10 flex flex-wrap gap-3">

            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-red-500 bg-red-500 text-white"
                    : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-red-500/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}

          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >

            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}

          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">

              <FolderOpen
                size={45}
                className="mx-auto text-zinc-600"
              />

              <h3 className="mt-5 text-xl font-semibold text-white">
                No Projects Found
              </h3>

              <p className="mt-3 text-sm text-zinc-500">
                No projects are available in this category yet.
              </p>

            </div>
          )}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="px-5 pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl rounded-3xl border border-red-500/20 bg-[#171113] px-7 py-16 text-center sm:px-12">

          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Have an Idea for Your Next Project?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-zinc-400">
            Let's work together and turn your ideas into something amazing.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </a>

        </div>

      </section>

    </main>
  );
}

export default Projects;