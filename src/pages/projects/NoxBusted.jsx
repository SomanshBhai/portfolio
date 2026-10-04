import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Terminal as TerminalIcon,
  CheckCircle2,
  Code2,
  Server,
  Sparkles,
} from "lucide-react";

const technologies = [
  {
    name: "Python",
    description: "Core programming language",
  },
  {
    name: "discord.py",
    description: "Discord bot framework",
  },
  {
    name: "Discord API",
    description: "Platform integration",
  },
];

const featureGroups = [
  {
    title: "Community",
    description: "Systems designed to support everyday Discord communities.",
    features: [
      "Tickets",
      "Giveaways",
      "Leveling",
      "Birthday System",
    ],
  },
  {
    title: "Server Management",
    description: "Tools that help manage and organize a Discord server.",
    features: [
      "Moderation",
      "Server Stats",
      "Reaction Roles",
    ],
  },
  {
    title: "Experience",
    description: "Features that make a server more useful and engaging.",
    features: [
      "Welcome System",
      "Utilities",
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function NoxBusted() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Top Navigation */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link
          to="/"
          className="group flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Portfolio
        </Link>

        <Link
          to="/#projects"
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-green-400/40 hover:text-green-400"
        >
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-10 md:pt-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm text-green-400">
            <Sparkles size={15} />
            Discord Bot Project
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            NOX <span className="text-green-400">BUSTED</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 md:text-xl">
            An all-in-one Discord bot built to bring moderation,
            community systems, utilities, and server features together
            in one project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/SomanshBhai/Nox-Busted"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-400 px-5 py-3 font-semibold text-black transition hover:bg-green-300"
            >
              <Github size={18} />
              View on GitHub
            </a>

            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-gray-300 transition hover:border-green-400/40 hover:text-white"
            >
              <ArrowLeft size={18} />
              All Projects
            </Link>
          </div>
        </motion.div>

        {/* Terminal Preview */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 overflow-hidden rounded-2xl border border-green-400/20 bg-[#080808] shadow-2xl shadow-green-400/5"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-red-400/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-green-400/70" />

            <span className="ml-3 text-xs text-gray-500">
              nox-busted — terminal
            </span>
          </div>

          <div className="overflow-x-auto p-6 font-mono text-sm leading-8 md:p-8 md:text-base">
            <p className="text-gray-500">
              somansh@portfolio:~/nox-busted$
              <span className="text-white"> python bot.py</span>
            </p>

            <p className="mt-4 text-gray-400">
              [INFO] Initializing Nox Busted...
            </p>

            <p className="text-gray-400">
              [INFO] Loading Discord systems...
            </p>

            <p className="text-green-400">
              [OK] Moderation system loaded
            </p>

            <p className="text-green-400">
              [OK] Community systems loaded
            </p>

            <p className="text-green-400">
              [OK] Utility systems loaded
            </p>

            <p className="mt-4 text-green-400">
              ✓ Nox Busted is ready.
            </p>

            <span className="mt-2 inline-block h-5 w-2 animate-pulse bg-green-400" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: CheckCircle2,
              value: "10+",
              label: "Verified features",
            },
            {
              icon: Code2,
              value: "Python",
              label: "Built with",
            },
            {
              icon: Server,
              value: "Discord",
              label: "Platform",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <Icon className="mb-4 text-green-400" size={22} />

                <p className="text-2xl font-bold">{stat.value}</p>

                <p className="mt-1 text-sm text-gray-500">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid gap-12 md:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              01 — Overview
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Built for real communities.
            </h2>
          </div>

          <div className="space-y-5 text-gray-400 leading-8">
            <p>
              Nox Busted is an all-in-one Discord bot project designed
              around the idea of combining useful server systems into
              one maintainable application.
            </p>

            <p>
              Instead of creating separate bots for different tasks,
              the project brings moderation, community engagement,
              utilities, and server experience features together.
            </p>

            <p>
              The project also gave me practical experience with
              Python, Discord APIs, event-driven programming, and
              building systems that interact with real users.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
              Built Around Communities
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Powerful systems for Discord communities.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featureGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-[#080808] p-6"
              >
                <p className="mb-4 text-sm font-semibold text-green-400">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-xl font-bold">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {group.description}
                </p>

                <div className="mt-6 space-y-3">
                  {group.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-gray-400"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-green-400"
                      />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            03 — Tech Stack
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Technologies behind the bot.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-green-400/30"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <TerminalIcon size={21} />
              </div>

              <h3 className="text-xl font-bold">
                {technology.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {technology.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What I Learned */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="grid gap-12 md:grid-cols-[1fr_1.2fr]"
          >
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                04 — Learning
              </p>

              <h2 className="text-3xl font-bold md:text-4xl">
                More than just a bot.
              </h2>
            </div>

            <div className="space-y-5 text-gray-400 leading-8">
              <p>
                Building Nox Busted helped me understand how larger
                projects are organized instead of treating every
                feature as a separate experiment.
              </p>

              <p>
                I learned more about structuring bot systems,
                connecting commands with Discord, handling user
                interactions, and thinking about maintainability.
              </p>

              <p>
                The biggest lesson was simple: building something
                useful teaches you far more than simply writing code
                that runs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Mindset */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Development Mindset
          </p>

          <h2 className="mt-5 text-3xl font-black md:text-5xl">
            Build. Break. Learn.
            <br />
            <span className="text-green-400">
              Then build it better.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-500 leading-7">
            Nox Busted is part of my journey of learning by actually
            building things, experimenting with ideas, and improving
            them over time.
          </p>
        </motion.div>
      </section>

      {/* GitHub CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-green-400/20 bg-green-400/[0.04] p-8 text-center md:p-12"
        >
          <Github
            size={30}
            className="mx-auto text-green-400"
          />

          <h2 className="mt-5 text-2xl font-bold md:text-3xl">
            Explore the project.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Check out the source code and see how Nox Busted is
            structured on GitHub.
          </p>

          <a
            href="https://github.com/SomanshBhai/Nox-Busted"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
          >
            <Github size={18} />
            Open GitHub Repository
          </a>
        </motion.div>
      </section>

      {/* Project Navigation */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-10 md:grid-cols-2 md:px-10">
          <Link
            to="/projects/portfolio"
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-green-400/30 hover:bg-green-400/[0.03]"
          >
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ArrowLeft
                size={17}
                className="transition-transform group-hover:-translate-x-1"
              />
              Previous Project
            </div>

            <h3 className="mt-3 text-xl font-bold">
              Personal Portfolio
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              React • Tailwind CSS • Framer Motion
            </p>
          </Link>

          <Link
            to="/projects/smart-calculator"
            className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left transition hover:border-green-400/30 hover:bg-green-400/[0.03] md:text-right"
          >
            <div className="flex items-center justify-start gap-2 text-sm text-gray-500 md:justify-end">
              Next Project
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>

            <h3 className="mt-3 text-xl font-bold">
              Smart Calculator
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Python • Tkinter
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-gray-600">
        Built by Somansh Maurya • Nox Busted
      </footer>
    </main>
  );
}
