import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const technologies = [
  {
    name: "React",
    description: "Component-based frontend development",
  },
  {
    name: "Tailwind CSS",
    description: "Responsive utility-first styling",
  },
  {
    name: "Framer Motion",
    description: "Interactive animations and transitions",
  },
];

const features = [
  "Responsive portfolio interface",
  "Animated sections and interactions",
  "Project showcase system",
  "Developer-focused visual design",
  "Interactive terminal section",
  "GitHub and YouTube integration",
  "Project detail pages",
  "Reusable React components",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PortfolioProject() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Back */}
      <section className="px-6 pt-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-green-400"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 pb-20 pt-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
              Personal Developer Project
            </p>

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="text-5xl font-black tracking-tight md:text-7xl">
                  Personal
                  <span className="block text-green-400">
                    Portfolio
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                  A personal developer hub built to showcase my projects,
                  skills, experiments, interests, and journey as I continue
                  learning and building.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/SomanshBhai/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:border-green-400/40 hover:bg-green-400/10"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://portfolio-somansh-bhai.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-green-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-300"
                >
                  Live Site ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terminal */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-green-400/20 bg-[#050805] shadow-2xl shadow-green-500/5"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />

              <span className="ml-3 text-xs text-gray-500">
                somansh@portfolio:~/portfolio
              </span>
            </div>

            <div className="p-6 font-mono text-sm leading-8 md:p-8 md:text-base">
              <p className="text-gray-500">
                somansh@portfolio:~/portfolio$
                <span className="text-white"> npm run dev</span>
              </p>

              <p className="mt-2 text-gray-500">
                [INFO] Starting personal developer hub...
              </p>

              <p className="text-gray-500">
                [INFO] Loading React components...
              </p>

              <p className="text-green-400">
                [OK] Portfolio interface loaded
              </p>

              <p className="text-green-400">
                [OK] Project system loaded
              </p>

              <p className="text-green-400">
                [OK] Interactive sections loaded
              </p>

              <p className="mt-3 text-white">
                ✓ Portfolio is ready.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {[
            ["React", "Frontend"],
            ["8+", "Core features"],
            ["2026", "Current build"],
          ].map(([value, label], index) => (
            <motion.div
              key={label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-3xl font-black text-green-400">
                {value}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Overview
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              More than a portfolio.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-400">
              <p>
                This project started as a way to have one place where I could
                present the things I build and learn.
              </p>

              <p>
                Instead of creating a simple static page, I wanted the site
                to feel like an interactive developer space — combining
                projects, skills, experiments, achievements, and useful
                information.
              </p>

              <p>
                The project also gives me a place to experiment with React,
                animations, responsive design, component architecture, and
                new ideas as I continue improving my development skills.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Project Goals
            </p>

            <div className="space-y-5">
              {[
                "Showcase real projects",
                "Build a strong developer identity",
                "Experiment with modern UI",
                "Keep improving over time",
              ].map((goal) => (
                <div
                  key={goal}
                  className="flex items-center gap-3"
                >
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">{goal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Features
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Built to evolve.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              The portfolio is structured as a growing system rather than a
              finished one-page website.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-green-400/30 hover:bg-green-400/[0.04]"
              >
                <div className="mb-5 text-sm font-bold text-green-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="font-semibold text-gray-200">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Tech Stack
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Tools behind the build.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <div className="mb-6 text-2xl text-green-400">
                  ◈
                </div>

                <h3 className="text-xl font-bold">
                  {technology.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {technology.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl border border-green-400/20 bg-green-400/[0.03] p-8 md:p-12"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              What I Learned
            </p>

            <h2 className="max-w-3xl text-4xl font-black md:text-5xl">
              Building the website became part of the journey.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-gray-400">
              This project has helped me understand how individual React
              components can become a larger application. I have also learned
              more about routing, responsive layouts, animations, GitHub
              workflows, deployment, debugging, and continuously improving a
              real project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mindset */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Development Mindset
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Build. Learn. Improve.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-base leading-8 text-gray-400"
          >
            <p>
              The portfolio is intentionally a work in progress. New ideas,
              projects, experiments, and improvements can be added as I grow.
            </p>

            <p className="mt-5">
              The goal is not to pretend everything is perfect. It is to
              document the process of becoming a better builder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Explore the code
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            See how it is built.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            The complete source code is available publicly on GitHub.
          </p>

          <a
            href="https://github.com/SomanshBhai/portfolio"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-xl bg-green-400 px-6 py-3 font-bold text-black transition hover:bg-green-300"
          >
            View GitHub ↗
          </a>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/projects/nox-busted"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-green-400/30"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              ← Previous Project
            </p>

            <p className="mt-2 font-bold text-gray-200 transition group-hover:text-green-400">
              Nox Busted
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Python • discord.py • Discord
            </p>
          </Link>

          <Link
            to="/projects/smart-calculator"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-green-400/30 sm:text-right"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Next Project →
            </p>

            <p className="mt-2 font-bold text-gray-200 transition group-hover:text-green-400">
              Smart Calculator
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Python • Tkinter
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
