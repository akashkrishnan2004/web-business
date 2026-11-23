import { Link } from "react-router-dom";
import {Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Your<span className="text-red-500">Brand.</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-7 text-zinc-400">
              We create modern digital experiences through creative design and
              reliable web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
              <Link to="/" className="hover:text-red-500">
                Home
              </Link>
              <Link to="/services" className="hover:text-red-500">
                Services
              </Link>
              <Link to="/projects" className="hover:text-red-500">
                Projects
              </Link>
              <Link to="/about" className="hover:text-red-500">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Our Services</h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
              <span>College Projects</span>
              <span>Portfolio Websites</span>
              <span>Business Websites</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white">Connect With Us</h3>

            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-white/10 p-3 text-zinc-400 transition hover:border-red-500 hover:text-red-500"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
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
              className="mt-6 inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-400"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <p>Designed with creativity. Developed with passion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
