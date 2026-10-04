import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import portfolioImg from "../assets/projects/portfolio.png";
import calculatorImg from "../assets/projects/calculator.png";
import playerImg from "../assets/projects/player.png";

const projects = [
  {
    title: "Personal Portfolio",
    subtitle: "React • Vite • Tailwind CSS • Framer Motion",
    description:
      "The portfolio you're looking at. I built it to experiment with React, animations, responsive design, and presenting the things I'm learning and building.",
    image: portfolioImg,
    github: "https://github.com/SomanshBhai/portfolio",
    demo: "https://portfolio-somansh-bhai.vercel.app",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    status: "Active",
  },
  {
    title: "Smart Calculator",
    subtitle: "Python • Tkinter",
    description:
      "One of my early Python projects. It helped me practice building a graphical interface, handling user input, and organizing simple application logic.",
    image: calculatorImg,
    github: "https://github.com/SomanshBhai/smart-calculator-python",
    demo: null,
    tech: ["Python", "Tkinter"],
    status: "Completed",
  },
  {
    title: "Player Introduction",
    subtitle: "Python",
    description:
      "A small beginner Python project built around user input and basic program logic. It represents one of the early steps in my programming journey.",
    image: playerImg,
    github: "https://github.com/SomanshBhai/player-introduction-python",
    demo: null,
    tech: ["Python"],
    status: "Completed",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-32 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          Things I've Built
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-24">
          PROJECTS
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010] shadow-[0_0_35px_rgba(34,197,94,.08)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-[340px] object-cover transition duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <p className="uppercase tracking-[0.3em] text-green-400 text-sm">
                    {project.subtitle}
                  </p>

                  <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400">
                    {project.status}
                  </span>
                </div>

                <h3 className="text-4xl font-black mb-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-8">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-400 text-black px-7 py-3 rounded-full font-bold hover:scale-105 transition"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-white/20 px-7 py-3 rounded-full hover:border-green-400 hover:text-green-400 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
