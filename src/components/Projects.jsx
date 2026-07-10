import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio",
    subtitle: "React • Tailwind • Framer Motion",
    description:
      "A modern portfolio showcasing my skills, projects, and journey as a Class 9 student passionate about web development.",
    icon: "🌐",
  },
  {
    title: "Player Introduction",
    subtitle: "Python • Interactive Console App",
    description:
      "An interactive Python console application that welcomes users, asks questions, validates their responses, and creates a fun introduction experience using conditional statements and user input.",
    icon: "🐍",
  },
  {
    title: "Smart Calculator",
    subtitle: "Python • Tkinter GUI",
    description:
      "A desktop calculator built with Python and Tkinter that performs addition, subtraction, multiplication, and division through a simple graphical interface with input validation and error handling.",
    icon: "🧮",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-32 px-6 space-y-32"
    >
      <h2 className="text-5xl md:text-7xl font-black text-center">
        FEATURED WORK
      </h2>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Project Preview */}
          <div className="h-[320px] rounded-3xl border border-green-500/20 bg-gradient-to-br from-[#111] to-[#1b1b1b] flex flex-col items-center justify-center hover:scale-105 transition duration-500 shadow-lg shadow-green-500/10">
            <div className="text-8xl mb-6">{project.icon}</div>

            <h3 className="text-3xl font-black text-white">
              {project.title}
            </h3>

            <p className="text-green-400 mt-3">
              {project.subtitle}
            </p>
          </div>

          {/* Project Info */}
          <div>
            <p className="uppercase tracking-[0.3em] text-green-400 text-sm mb-4">
              {project.subtitle}
            </p>

            <h3 className="text-4xl font-black mb-6">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              {project.description}
            </p>

            <button className="border border-green-500 px-8 py-3 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300">
              View Project →
            </button>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Projects;