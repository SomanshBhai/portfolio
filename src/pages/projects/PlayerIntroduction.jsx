import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaPython,
  FaTerminal,
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <main
      className="min-h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] blur-[140px] rounded-full"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
          }}
        />

        <div
          className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] blur-[140px] rounded-full"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
          }}
        />
      </div>

      {/* Navigation */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-3 transition"
          style={{ color: "var(--theme-muted)" }}
          onMouseEnter={(event) => {
            event.currentTarget.style.color = "var(--theme-accent)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.color = "var(--theme-muted)";
          }}
        >
          <FaArrowLeft />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="uppercase tracking-[0.4em] text-sm mb-6"
            style={{ color: "var(--theme-accent)" }}
          >
            Python Project
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-8">
                PLAYER
                <br />
                <span style={{ color: "var(--theme-accent)" }}>
                  INTRODUCTION
                </span>
              </h1>

              <p
                className="text-lg leading-8 max-w-2xl mb-10"
                style={{ color: "var(--theme-muted)" }}
              >
                A beginner Python project built while learning programming,
                focused on user input, conditional statements, and simple
                console interaction.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/SomanshBhai/player-introduction-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-full font-bold hover:scale-105 transition"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    color: "var(--theme-background)",
                  }}
                >
                  <FaGithub />
                  View on GitHub
                </a>

                <Link
                  to="/projects/smart-calculator"
                  className="inline-flex items-center gap-3 border px-7 py-3 rounded-full transition"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--theme-border) 35%, transparent)",
                    color: "var(--theme-text)",
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.borderColor =
                      "var(--theme-accent)";
                    event.currentTarget.style.color =
                      "var(--theme-accent)";
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.borderColor =
                      "color-mix(in srgb, var(--theme-border) 35%, transparent)";
                    event.currentTarget.style.color =
                      "var(--theme-text)";
                  }}
                >
                  Next Project
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-3xl border overflow-hidden"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-accent) 20%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-surface) 90%, var(--theme-background))",
                boxShadow:
                  "0 0 50px color-mix(in srgb, var(--theme-accent) 8%, transparent)",
              }}
            >
              <div
                className="flex items-center gap-2 px-5 py-4 border-b"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--theme-border) 15%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-surface) 85%, var(--theme-background))",
                }}
              >
                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />

                <span
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      "color-mix(in srgb, var(--theme-accent) 70%, transparent)",
                  }}
                />

                <div
                  className="ml-3 flex items-center gap-2 text-sm"
                  style={{ color: "var(--theme-muted)" }}
                >
                  <FaTerminal />
                  python
                </div>
              </div>

              <div className="p-6 md:p-8 font-mono text-sm leading-8">
                <p style={{ color: "var(--theme-muted)" }}>
                  somansh@portfolio:~/player-introduction$
                </p>

                <p style={{ color: "var(--theme-accent)" }}>
                  python "Player Introduction(REAL WALA).py"
                </p>

                <p
                  className="mt-4"
                  style={{ color: "var(--theme-muted)" }}
                >
                  [INFO] Starting Player Introduction...
                </p>

                <p style={{ color: "var(--theme-muted)" }}>
                  [INFO] Waiting for user input...
                </p>

                <p style={{ color: "var(--theme-accent)" }}>
                  [OK] Console interaction ready
                </p>

                <p style={{ color: "var(--theme-accent)" }}>
                  ✓ Program started successfully.
                </p>

                <span
                  className="inline-block w-2 h-5 animate-pulse mt-2 align-middle"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                  }}
                />
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
              className="rounded-2xl p-6 border"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 15%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-surface) 75%, transparent)",
              }}
            >
              <p
                className="text-3xl font-black"
                style={{ color: "var(--theme-accent)" }}
              >
                {value}
              </p>

              <p
                className="mt-2"
                style={{ color: "var(--theme-muted)" }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <p
          className="uppercase tracking-[0.35em] text-sm mb-4"
          style={{ color: "var(--theme-accent)" }}
        >
          Overview
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Starting with the fundamentals.
        </h2>

        <p
          className="text-lg leading-8"
          style={{ color: "var(--theme-muted)" }}
        >
          Player Introduction is one of my beginner Python projects. The goal
          was to practice taking information from a user and using basic
          programming logic to create a simple interactive console program.
          Rather than trying to build something complicated, this project
          focuses on understanding the building blocks of Python.
        </p>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <p
          className="uppercase tracking-[0.35em] text-sm mb-4"
          style={{ color: "var(--theme-accent)" }}
        >
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
              className="group rounded-3xl p-7 border transition"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 15%, transparent)",
                backgroundColor: "var(--theme-surface)",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--theme-accent) 30%, transparent)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--theme-border) 15%, transparent)";
              }}
            >
              <div
                className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                  borderColor:
                    "color-mix(in srgb, var(--theme-accent) 20%, transparent)",
                  color: "var(--theme-accent)",
                }}
              >
                <span className="font-bold">{index + 1}</span>
              </div>

              <h3
                className="text-2xl font-bold mb-3 transition"
                onMouseEnter={(event) => {
                  event.currentTarget.style.color =
                    "var(--theme-accent)";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.color =
                    "var(--theme-text)";
                }}
              >
                {feature.title}
              </h3>

              <p
                className="leading-7"
                style={{ color: "var(--theme-muted)" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <p
          className="uppercase tracking-[0.35em] text-sm mb-4"
          style={{ color: "var(--theme-accent)" }}
        >
          Tech Stack
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-12">
          Built with.
        </h2>

        <div className="max-w-xl">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-5 rounded-3xl p-7 border"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 15%, transparent)",
                backgroundColor: "var(--theme-surface)",
              }}
            >
              <div
                className="text-4xl"
                style={{ color: "var(--theme-accent)" }}
              >
                {tech.icon}
              </div>

              <div>
                <h3 className="text-2xl font-bold">{tech.name}</h3>

                <p
                  className="mt-2"
                  style={{ color: "var(--theme-muted)" }}
                >
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Learned */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pb-28">
        <p
          className="uppercase tracking-[0.35em] text-sm mb-4"
          style={{ color: "var(--theme-accent)" }}
        >
          What I Learned
        </p>

        <h2 className="text-4xl md:text-5xl font-black mb-8">
          Small projects build big foundations.
        </h2>

        <p
          className="text-lg leading-8"
          style={{ color: "var(--theme-muted)" }}
        >
          This project helped me practice the fundamentals that make larger
          programs possible: receiving input, storing information, using
          conditions, and creating a simple flow for a user. It was a step
          toward becoming more comfortable with Python and writing programs
          from scratch.
        </p>
      </section>

      {/* GitHub CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <div
          className="rounded-3xl border p-8 md:p-12 text-center"
          style={{
            borderColor:
              "color-mix(in srgb, var(--theme-accent) 20%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--theme-accent) 4%, transparent)",
          }}
        >
          <p
            className="uppercase tracking-[0.35em] text-sm mb-4"
            style={{ color: "var(--theme-accent)" }}
          >
            Explore the Code
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Want to see how it works?
          </h2>

          <p
            className="max-w-2xl mx-auto mb-8"
            style={{ color: "var(--theme-muted)" }}
          >
            Check out the source code and see one of my early Python projects.
          </p>

          <a
            href="https://github.com/SomanshBhai/player-introduction-python"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            style={{
              backgroundColor: "var(--theme-accent)",
              color: "var(--theme-background)",
            }}
          >
            <FaGithub />
            Open GitHub Repository
          </a>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div
          className="flex flex-col md:flex-row justify-between gap-6 border-t pt-8"
          style={{
            borderColor:
              "color-mix(in srgb, var(--theme-border) 15%, transparent)",
          }}
        >
          <Link
            to="/projects/smart-calculator"
            className="group"
          >
            <p
              className="text-sm mb-2"
              style={{ color: "var(--theme-muted)" }}
            >
              Previous Project
            </p>

            <div
              className="flex items-center gap-3 text-xl font-bold transition"
              onMouseEnter={(event) => {
                event.currentTarget.style.color =
                  "var(--theme-accent)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color =
                  "var(--theme-text)";
              }}
            >
              <FaArrowLeft />
              Smart Calculator
            </div>
          </Link>

          <Link
            to="/"
            className="group text-left md:text-right"
          >
            <p
              className="text-sm mb-2"
              style={{ color: "var(--theme-muted)" }}
            >
              Back to
            </p>

            <div
              className="flex items-center justify-end gap-3 text-xl font-bold transition"
              onMouseEnter={(event) => {
                event.currentTarget.style.color =
                  "var(--theme-accent)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color =
                  "var(--theme-text)";
              }}
            >
              Portfolio
              <FaArrowRight />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default PlayerIntroduction;