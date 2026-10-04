import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolioImg from "../assets/projects/portfolio.png";
import calculatorImg from "../assets/projects/calculator.png";
import playerImg from "../assets/projects/player.png";

const featuredProjects = [
  {
    title: "Personal Portfolio",
    subtitle: "React • Tailwind CSS • Framer Motion",
    description:
      "My personal developer portfolio and the foundation for a larger developer hub showcasing my projects, skills, learning journey, and experiments.",
    image: portfolioImg,
    github: "https://github.com/SomanshBhai/portfolio",
    demo: "https://portfolio-somansh-bhai.vercel.app",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Nox Busted",
    subtitle: "Python • discord.py • Discord",
    description:
      "An all-in-one Discord bot built for community servers, bringing moderation, tickets, server utilities, giveaways, leveling, welcome systems, music, and more into one bot.",
    image: null,
    github: "https://github.com/SomanshBhai/Nox-Busted",
    demo: null,
    tech: ["Python", "discord.py", "Discord"],
  },
];

const moreProjects = [
  {
    title: "Smart Calculator",
    subtitle: "Python • Tkinter",
    description:
      "A desktop calculator built with Python and Tkinter featuring a clean GUI, basic arithmetic operations, and input validation.",
    image: calculatorImg,
    github: "https://github.com/SomanshBhai/smart-calculator-python",
    demo: null,
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
    tech: ["Python"],
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`grid lg:grid-cols-2 gap-14 items-center ${
        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image / Project Preview */}
      {project.image ? (
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-[#101010] shadow-[0_0_35px_rgba(34,197,94,.08)]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[340px] object-cover transition duration-500 hover:scale-105"
          />
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="h-[340px] rounded-3xl border border-white/10 bg-[#101010] shadow-[0_0_35px_rgba(34,197,94,.08)] flex items-center justify-center overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_65%)]" />

          <div className="relative text-center px-8">
            <div className="text-green-400 text-sm uppercase tracking-[0.35em] mb-4">
              Project
            </div>

            <h4 className="text-4xl md:text-5xl font-black">
              {project.title}
            </h4>

            <p className="text-gray-500 mt-4">
              No project preview available yet
            </p>
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div>
        <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
          {project.subtitle}
        </p>

        <h3 className="text-4xl font-black mb-6">{project.title}</h3>

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
  );
}

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
        {/* Section Heading */}
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          My Work
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-24">
          PROJECTS
        </h2>

        {/* Featured Projects */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-green-400 text-sm uppercase tracking-[0.3em]">
              01
            </span>

            <h3 className="text-2xl md:text-3xl font-bold">
              Featured Projects
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* More Projects */}
        <div className="mt-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-green-400 text-sm uppercase tracking-[0.3em]">
              02
            </span>

            <h3 className="text-2xl md:text-3xl font-bold">
              More Projects
            </h3>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="space-y-20">
            {moreProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Future Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-[0.3em] mb-3">
            More coming soon
          </p>

          <p className="text-gray-400 max-w-xl mx-auto leading-7">
            More experiments, Minecraft projects, and new builds will be added
            here as they become real projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
