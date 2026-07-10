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
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-300",
  },
  {
    name: "Python",
    icon: <FaPython />,
    color: "text-green-400",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-red-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
    color: "text-white",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    color: "text-pink-400",
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
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col items-center gap-5 hover:border-green-400 hover:bg-green-500/10"
            >
              <div className={`text-6xl ${tech.color}`}>
                {tech.icon}
              </div>

              <h3 className="font-bold text-lg text-center">
                {tech.name}
              </h3>
            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
}

export default TechStack;