import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Desktop GUI",
    description:
      "A graphical calculator interface built for a simple and practical desktop experience.",
  },
  {
    title: "Core Calculations",
    description:
      "Handles the fundamental arithmetic operations expected from a calculator.",
  },
  {
    title: "Python Logic",
    description:
      "The calculation logic and application behavior are powered by Python.",
  },
  {
    title: "Tkinter Interface",
    description:
      "Uses Tkinter to create the desktop graphical user interface.",
  },
];

const technologies = [
  {
    name: "Python",
    description: "Core programming language",
  },
  {
    name: "Tkinter",
    description: "Desktop GUI framework",
  },
];

function Section({ number, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="mb-8 flex items-center gap-4">
        <span className="font-mono text-sm text-green-400">
          {number}
        </span>

        <div className="h-px flex-1 bg-white/10" />

        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {title}
        </h2>
      </div>

      {children}
    </motion.section>
  );
}

function SmartCalculator() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full bg-green-400/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-16">
        {/* Top Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono text-sm text-white/60 transition hover:text-green-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Portfolio
          </Link>

          <span className="rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 font-mono text-xs text-green-400">
            PYTHON PROJECT
          </span>
        </motion.div>

        {/* Hero */}
        <section className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-green-400"
          >
            Personal Project
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl"
          >
            Smart
            <span className="text-green-400"> Calculator.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/55 md:text-lg"
          >
            A Python desktop calculator built while exploring GUI
            development, application logic, and the fundamentals of
            creating interactive software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="https://github.com/SomanshBhai/smart-calculator-python"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-green-400/30 bg-green-400/10 px-5 py-3 font-mono text-sm text-green-400 transition hover:bg-green-400/20"
            >
              View on GitHub ↗
            </a>

            <Link
              to="/projects/portfolio"
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 font-mono text-sm text-white/70 transition hover:border-white/20 hover:text-white"
            >
              Previous Project
            </Link>
          </motion.div>
        </section>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-24 overflow-hidden rounded-2xl border border-white/10 bg-[#090909] shadow-2xl"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="h-3 w-3 rounded-full bg-white/20" />
            <span className="h-3 w-3 rounded-full bg-white/20" />

            <span className="ml-3 font-mono text-xs text-white/30">
              calculator.py
            </span>
          </div>

          <div className="overflow-x-auto p-6 font-mono text-sm leading-8">
            <p className="text-white/30">
              somansh@portfolio:~/smart-calculator$
            </p>

            <p className="text-white/70">
              python calculator.py
            </p>

            <p className="mt-3 text-green-400">
              [INFO] Starting Smart Calculator...
            </p>

            <p className="text-green-400">
              [INFO] Initializing Tkinter interface...
            </p>

            <p className="text-green-400">
              [OK] Calculator ready.
            </p>

            <p className="mt-3 text-white/30">
              &gt; 12 + 8
            </p>

            <p className="text-white">
              20
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <section className="mb-24 grid gap-4 sm:grid-cols-3">
          {[
            ["01", "Python", "Built with"],
            ["02", "Tkinter", "GUI framework"],
            ["03", "Desktop", "Application"],
          ].map(([number, value, label], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <p className="font-mono text-xs text-white/30">
                {number}
              </p>

              <p className="mt-5 text-2xl font-bold text-green-400">
                {value}
              </p>

              <p className="mt-1 text-sm text-white/40">
                {label}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Overview */}
        <Section number="01" title="Overview">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 md:p-9">
              <p className="text-base leading-8 text-white/60 md:text-lg">
                Smart Calculator is a Python desktop project focused on
                learning how programming logic can be connected to a
                graphical user interface.
              </p>

              <p className="mt-5 text-base leading-8 text-white/60 md:text-lg">
                Instead of keeping the project entirely in the terminal,
                I used Tkinter to experiment with windows, buttons,
                inputs, events, and user interaction.
              </p>
            </div>

            <div className="rounded-2xl border border-green-400/10 bg-green-400/[0.03] p-7 md:p-9">
              <p className="font-mono text-xs uppercase tracking-widest text-green-400">
                Project Focus
              </p>

              <ul className="mt-6 space-y-4 text-sm text-white/60">
                <li>→ Python fundamentals</li>
                <li>→ GUI development</li>
                <li>→ Event-driven interaction</li>
                <li>→ Application structure</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Goals */}
        <Section number="02" title="Project Goals">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Build a functional calculator application.",
              "Learn the fundamentals of Tkinter.",
              "Connect interface actions with Python logic.",
              "Understand how desktop applications are structured.",
            ].map((goal, index) => (
              <motion.div
                key={goal}
                initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <span className="font-mono text-sm text-green-400">
                  0{index + 1}
                </span>

                <p className="mt-4 text-white/70">
                  {goal}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section number="03" title="Features">
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:border-green-400/20 hover:bg-green-400/[0.03]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/5 font-mono text-sm text-green-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-white/45">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section number="04" title="Tech Stack">
          <div className="grid gap-4 sm:grid-cols-2">
            {technologies.map((technology, index) => (
              <div
                key={technology.name}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-7"
              >
                <span className="font-mono text-xs text-green-400">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {technology.name}
                </h3>

                <p className="mt-2 text-sm text-white/40">
                  {technology.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Learning */}
        <Section number="05" title="What I Learned">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-7 md:p-10">
            <p className="max-w-3xl text-lg leading-8 text-white/60">
              This project helped me understand that building software
              isn't only about writing the core logic. The interface,
              user interaction, event handling, and structure all work
              together to turn code into an actual application.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 p-5">
                <p className="font-bold text-green-400">
                  Logic
                </p>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Turning mathematical operations into program logic.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 p-5">
                <p className="font-bold text-green-400">
                  UI
                </p>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Building an interface that users can interact with.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 p-5">
                <p className="font-bold text-green-400">
                  Structure
                </p>
                <p className="mt-2 text-sm leading-6 text-white/40">
                  Connecting multiple parts into one working application.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Development Mindset */}
        <Section number="06" title="Development Mindset">
          <div className="rounded-2xl border border-green-400/10 bg-green-400/[0.03] p-8 md:p-10">
            <p className="font-mono text-sm text-green-400">
              // BUILD → LEARN → IMPROVE
            </p>

            <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-white/75 md:text-2xl">
              Small projects like this are part of the journey — taking
              an idea, turning it into working code, and learning from
              every iteration.
            </p>
          </div>
        </Section>

        {/* GitHub CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              Source Code
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Explore the project.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/45">
              Check out the source code and see how the calculator was
              built with Python and Tkinter.
            </p>

            <a
              href="https://github.com/SomanshBhai/smart-calculator-python"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-xl border border-green-400/30 bg-green-400/10 px-6 py-3 font-mono text-sm text-green-400 transition hover:bg-green-400/20"
            >
              Open GitHub Repository ↗
            </a>
          </div>
        </motion.section>

        {/* Project Navigation */}
        <section className="border-t border-white/10 pt-10">
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/projects/portfolio"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-green-400/20"
            >
              <p className="font-mono text-xs text-white/30">
                ← PREVIOUS PROJECT
              </p>

              <h3 className="mt-4 text-xl font-bold transition group-hover:text-green-400">
                Personal Portfolio
              </h3>

              <p className="mt-2 text-sm text-white/40">
                React • Tailwind CSS • Framer Motion
              </p>
            </Link>

            <Link
              to="/projects/nox-busted"
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-left transition hover:border-green-400/20 md:text-right"
            >
              <p className="font-mono text-xs text-white/30">
                NEXT PROJECT →
              </p>

              <h3 className="mt-4 text-xl font-bold transition group-hover:text-green-400">
                Nox Busted
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Python • discord.py • Discord
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SmartCalculator;
