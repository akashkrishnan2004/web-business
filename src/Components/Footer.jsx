import { Link, NavLink } from "react-router-dom";

import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";

import { navLinks } from "../Data/Data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="font-heading text-2xl font-bold text-white">
                Your<span className="text-red-500">Brand.</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-400">
              We create modern digital experiences through creative design and
              reliable web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.id}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `text-sm transition ${
                      isActive
                        ? "text-red-500"
                        : "text-zinc-400 hover:text-white"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Our Services</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
              <Link
                to="/services"
                className="w-fit transition hover:text-red-500"
              >
                College Projects
              </Link>

              <Link
                to="/services"
                className="w-fit transition hover:text-red-500"
              >
                Portfolio Websites
              </Link>

              <Link
                to="/services"
                className="w-fit transition hover:text-red-500"
              >
                Business Websites
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white">Connect With Us</h3>

            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Have an idea or a project in mind? Let's connect and create
              something amazing.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="mailto:yourbusiness@email.com"
                aria-label="Email"
                className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
              >
                <Mail size={19} />
              </a>
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-400"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

          <p>Designed with creativity. Developed with passion.</p>
        </div>
      </div>
    </footer>
  );
}
