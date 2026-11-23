import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import { teamMembers } from "../Data/Data";

export default function Team() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10 py-24">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-red-500/10 blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-4xl px-5 text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
            <Users size={27} className="text-red-500" />
          </div>

          <p className="mt-7 text-sm font-semibold uppercase tracking-[3px] text-red-500">
            Meet The Team
          </p>

          <h1 className="mt-6 font-heading text-4xl font-bold text-white sm:text-6xl">
            The People Behind
            <span className="text-red-500"> The Ideas.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            We're a team of passionate developers who believe in turning
            creative ideas into powerful digital experiences. Get to know the
            people behind our work.
          </p>
        </motion.div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
              The Founders
            </p>

            <h2 className="mt-5 font-heading text-3xl font-bold text-white sm:text-4xl">
              Meet Our Team
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-zinc-400">
              Two individuals, one shared vision and a passion for building
              something meaningful.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111113] transition duration-300 hover:-translate-y-2 hover:border-red-500/30"
              >
                {/* Profile Image */}
                <div className="relative h-80 overflow-hidden bg-zinc-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#111113] via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-6 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-400 backdrop-blur-md">
                    Founder 0{member.id}
                  </span>
                </div>

                {/* Profile Details */}
                <div className="p-7 sm:p-9">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-red-500">
                    {member.role}
                  </p>

                  <p className="mt-5 text-sm leading-8 text-zinc-400">
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7">
                    <h4 className="text-xs font-semibold uppercase tracking-[2px] text-zinc-500">
                      Skills & Technologies
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/3 px-3 py-2 text-xs text-zinc-300 transition hover:border-red-500/30 hover:text-red-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-xs font-medium text-zinc-500">
                      Connect With Me
                    </span>

                    <div className="flex gap-3">
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                        className="rounded-xl border border-white/10 p-2.5 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
                      >
                        <FaGithub size={18} />
                      </a>

                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="rounded-xl border border-white/10 p-2.5 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
                      >
                        <FaLinkedin size={18} />
                      </a>

                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Instagram`}
                        className="rounded-xl border border-white/10 p-2.5 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
                      >
                        <FaInstagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PHILOSOPHY */}
      <section className="bg-[#0e0e10] py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-red-500">
            Our Philosophy
          </p>

          <h2 className="mt-6 font-heading text-3xl font-bold leading-tight text-white sm:text-5xl">
            Great Things Happen
            <span className="text-red-500"> When Ideas Come Together.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-zinc-400">
            We believe that great websites are built through collaboration,
            creativity and continuous learning. Every project is an opportunity
            to explore new ideas and create something better.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-red-500/20 bg-[#171113] px-7 py-16 text-center sm:px-12">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Want to Work With Us?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-zinc-400">
            Have an idea or project? Let's connect and make it happen.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-500 px-7 py-4 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Start a Project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
