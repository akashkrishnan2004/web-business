import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111113]">

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-xs text-white backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="p-6">

        <h3 className="font-heading text-xl font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400"
        >
          View Project <ArrowUpRight size={17} />
        </a>

      </div>
    </div>
  );
}

export default ProjectCard;