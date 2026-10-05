import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaPython,
  FaTerminal,
} from "react-icons/fa";

const features = [
  {
    title: "User Input",
    description:
      "Takes information from the user and uses it inside the program.",
  },
  {
    title: "Conditional Statements",
    description:
      "Uses beginner-friendly conditions to control how the program responds.",
  },
  {
    title: "Console Interaction",
    description:
      "Creates a simple interactive experience directly in the Python console.",
  },
  {
    title: "Beginner Python",
    description:
      "Built while learning the fundamentals of Python programming.",
  },
];

const techStack = [
  {
    name: "Python",
    description: "Core programming language used to build the project.",
    icon: <FaPython />,
  },
];

function PlayerIntroduction() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        <a
          href="/"
          className="inline-flex items-center gap-3 text-gray-400 hover:text-green-400 transition"
        >
          <FaArrowLeft />
          Back to Portfolio
        </a>
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.4em] text-green-400 text-sm mb-6">
            Python Project
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero text */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
                PLAYER
                <br />
                <span className="text-green-400">INTRODUCTION</span>
              </h1>

              <p className="text-gray-400 text-lg leading-8 max-w-2xl mb-10">
                A beginner Python project built while learning programming,
                focused on user input, conditional statements, and simple
                console interaction.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/SomanshBhai/player-introduction-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-400 text-black px-7 py-3 rounded-full font-bold hover:scale-105 transition"
                >
                  <FaGithub />
                  View on GitHub
                </a>

                <a
                  href="/projects/smart-calculator"
                  className="inline-flex items-center gap-3 border border-white/15 px-7 py-3 rounded-full hover:border-green-400 hover:text-green-400 transition"
                >
                  Next Project
                  <FaArrowRight />
                </a>
              </div>
            </div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-3xl border border-green-500/20 bg-[#0b0b0b] overflow-hidden shadow-[0_0_50px_rgba(34,197,94,.08)]"
            >
              <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-[#101010]">
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <span className="w-3 h-3 rounded-full bg-green-400/70" />

                <div className="ml-3 flex items-center gap-2 text-gray-500 text-sm">
                  <FaTerminal />
                  python
                </div>
              </div>

              <div className="p-6 md:p-8 font-mono text-sm leading-8">
                <p className="text-gray-500">
                  somansh@portfolio:~/player-introduction$
                </p>

                <p className="text-green-400">
                  python "Player Introduction(REAL WALA).py"
                </p>

                <p className="text-gray-400 mt-4">
                  [INFO] Starting Player Introduction...
                </p>

                <p className="text-gray-400">
                  [INFO] Waiting for user input...
                </p>

                <p className="text-green-400">
                  [OK] Console interaction ready
                </p>

                <p className="text-green-400">
                  ✓ Program started successfully.
                </p>

                <span className="inline-block w-2 h-5 bg-green-400 animate-pulse mt-2 align-middle" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ["Python", "Language"],
            ["Beginner", "Project level"],
            ["Console", "Interface"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl p-6 bg-white/[0.02]"
            >
              <p className="text-3xl font-black text-green-400">{value}</p>
              <p className="text-gray-500 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-4">
          Overview
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Starting with the fundamentals.
        </h2>

        <p className="text-gray-400 text-lg leading-8">
          Player Introduction is one of my beginner Python projects. The goal
          was to practice taking information from a user and using basic
          programming logic to create a simple interactive console program.
          Rather than trying to build something complicated, this project
          focuses on understanding the building blocks of Python.
        </p>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-4">
          Project Features
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-12">
          What it does.
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group border border-white/10 rounded-3xl p-7 bg-[#0a0a0a] hover:border-green-400/30 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 mb-6">
                <span className="font-bold">{index + 1}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-4">
          Tech Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-12">
          Built with.
        </h2>

        <div className="max-w-xl">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-5 border border-white/10 rounded-3xl p-7 bg-[#0a0a0a]"
            >
              <div className="text-4xl text-green-400">{tech.icon}</div>

              <div>
                <h3 className="text-2xl font-bold">{tech.name}</h3>
                <p className="text-gray-400 mt-2">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Learned */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-4">
          What I Learned
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Small projects build big foundations.
        </h2>

        <p className="text-gray-400 text-lg leading-8">
          This project helped me practice the fundamentals that make larger
          programs possible: receiving input, storing information, using
          conditions, and creating a simple flow for a user. It was a step
          toward becoming more comfortable with Python and writing programs
          from scratch.
        </p>
      </section>

      {/* GitHub CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <div className="rounded-3xl border border-green-500/20 bg-green-500/[0.04] p-8 md:p-12 text-center">
          <p className="uppercase tracking-[0.35em] text-green-400 text-sm mb-4">
            Explore the Code
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Want to see how it works?
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Check out the source code and see one of my early Python projects.
          </p>

          <a
            href="https://github.com/SomanshBhai/player-introduction-python"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            <FaGithub />
            Open GitHub Repository
          </a>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between gap-6 border-t border-white/10 pt-8">
          <a
            href="/projects/smart-calculator"
            className="group"
          >
            <p className="text-gray-500 text-sm mb-2">Previous Project</p>

            <div className="flex items-center gap-3 text-xl font-bold group-hover:text-green-400 transition">
              <FaArrowLeft />
              Smart Calculator
            </div>
          </a>

          <a
            href="/"
            className="group text-left md:text-right"
          >
            <p className="text-gray-500 text-sm mb-2">Back to</p>

            <div className="flex items-center justify-end gap-3 text-xl font-bold group-hover:text-green-400 transition">
              Portfolio
              <FaArrowRight />
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

export default PlayerIntroduction;
