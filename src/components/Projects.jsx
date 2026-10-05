import { motion } from "framer-motion";

import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import portfolioImg from "../assets/projects/portfolio.png";
import calculatorImg from "../assets/projects/calculator.png";
import playerImg from "../assets/projects/player.png";

const projects = [
  {
    title: "Personal Portfolio",
    subtitle: "React • Tailwind CSS • Framer Motion",
    description:
      "A modern portfolio website showcasing my skills, projects, and learning journey with smooth animations and a fully responsive design.",
    image: portfolioImg,
    github: "https://github.com/SomanshBhai/portfolio",
    demo: "https://portfolio-somansh-bhai.vercel.app",
    details: "/projects/portfolio",
    tech: ["React", "Tailwind", "Framer Motion"],
  },

  {
    title: "Smart Calculator",
    subtitle: "Python • Tkinter",
    description:
      "A desktop calculator built with Python and Tkinter featuring a clean GUI, basic arithmetic operations, and input validation.",
    image: calculatorImg,
    github: "https://github.com/SomanshBhai/smart-calculator-python",
    demo: null,
    details: "/projects/smart-calculator",
    tech: ["Python", "Tkinter"],
  },

  {
    title: "Player Introduction",
    subtitle: "Python",
    description:
      "An interactive console application that introduces users through input, conditions, and beginner-friendly Python programming concepts.",
    image: playerImg,
    github: "https://github.com/SomanshBhai/player-introduction-python",
    demo: null,
    details: "/projects/player-introduction",
    tech: ["Python"],
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
        <p className="uppercase tracking-[0.4em] theme-accent text-center mb-4">
          My Work
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-24 theme-text">
          FEATURED PROJECTS
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
                whileHover={{
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-3xl border theme-border bg-[var(--theme-surface)] shadow-[0_0_35px_color-mix(in_srgb,var(--theme-accent)_8%,transparent)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[340px] object-cover transition duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Content */}
              <div>
                <p className="uppercase tracking-[0.3em] theme-accent text-sm mb-4">
                  {project.subtitle}
                </p>

                <h3 className="text-4xl font-black mb-6 theme-text">
                  {project.title}
                </h3>

                <p className="theme-muted leading-8 mb-8">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border theme-accent-border bg-[color-mix(in_srgb,var(--theme-accent)_10%,transparent)] theme-accent text-sm transition-all duration-300 hover:bg-[color-mix(in_srgb,var(--theme-accent)_18%,transparent)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {/* View Project */}
                  {project.details && (
                    <Link
                      to={project.details}
                      className="flex items-center gap-2 theme-accent-bg px-7 py-3 rounded-full font-bold theme-background transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_color-mix(in_srgb,var(--theme-accent)_30%,transparent)]"
                    >
                      View Project
                      <FaArrowRight />
                    </Link>
                  )}

                  {/* Live Demo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border theme-accent-border px-7 py-3 rounded-full theme-text transition-all duration-300 hover:theme-accent-bg hover:theme-background hover:scale-105"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border theme-border px-7 py-3 rounded-full theme-text transition-all duration-300 hover:theme-accent-border hover:theme-accent"
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
