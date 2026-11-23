import { Code2, Lightbulb, Rocket } from "lucide-react";

import Akash from "../assets/Akash.jpg"
import Anandhu from "../assets/Anandhu.jpg"

// Navbar.jsx
export const navLinks = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Services", path: "/services" },
  { id: 3, label: "Projects", path: "/projects" },
  { id: 4, label: "About", path: "/about" },
  { id: 5, label: "Our Team", path: "/team" },
  //   { id: 6, label: "Contact", path: "/contact" },
];

// About.jsx
export const technologies = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Express.js",
  "Git",
  "GitHub",
];

[];

export const approach = [
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
];

// Team.jsx
export const teamMembers = [
  {
    id: 1,
    name: "Anandhu AS",
    role: "Co-Founder & Web Developer",
    image: Anandhu,
    description:
      "Focused on creative problem-solving, modern web design and developing responsive websites that deliver great user experiences.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    social: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
  {
    id: 2,
    name: "Akash Krishnan",
    role: "Co-Founder & Full Stack Developer",
    image: Akash,
    description:
      "Passionate about building modern web applications and creating meaningful digital experiences through technology.",
    skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    social: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/",
      instagram: "https://instagram.com/",
    },
  },
];
