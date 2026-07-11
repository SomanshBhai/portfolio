import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiVercel,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
    learning: true,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    learning: true,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    learning: false,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    learning: false,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-300",
    learning: true,
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-green-400",
    learning: true,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-red-500",
    learning: true,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
    learning: false,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    color: "text-white",
    learning: true,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    color: "text-pink-400",
    learning: true,
  },
];

function TechStack() {
  return (
    <section
      id="tech"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          Technologies
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
          TECH STACK
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col items-center gap-5 hover:border-green-400 transition-all duration-300"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 transition-all duration-300"></div>

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`relative text-6xl ${tech.color}`}
              >
                {tech.icon}
              </motion.div>

              <h3 className="relative font-bold text-lg text-center">
                {tech.name}
              </h3>

              {tech.learning && (
                <span className="relative text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/20">
                  Learning
                </span>
              )}

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;