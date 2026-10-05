import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-green-400"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-mono text-sm tracking-[0.3em] text-green-400">
            /PROJECT
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Personal <span className="text-green-400">Portfolio</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            A modern developer portfolio built to showcase my projects,
            skills, learning journey, experiments, and creative work.
          </p>
        </motion.div>

        {/* Project Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-sm text-gray-500">STACK</p>
            <p className="mt-3 text-lg font-semibold">
              React • Tailwind • Framer Motion
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-sm text-gray-500">STATUS</p>
            <p className="mt-3 text-lg font-semibold text-green-400">
              Active Development
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="font-mono text-sm text-gray-500">DEPLOYMENT</p>
            <p className="mt-3 text-lg font-semibold">Vercel</p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold">
            What makes it <span className="text-green-400">different?</span>
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Smooth Framer Motion animations",
              "Responsive design for different screen sizes",
              "Developer-style terminal experience",
              "Interactive project showcase",
              "GitHub and YouTube integration",
              "Dark + green developer aesthetic",
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-gray-300 transition hover:border-green-400/30 hover:bg-green-400/[0.03]"
              >
                <span className="mr-3 text-green-400">▸</span>
                {feature}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Development */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 rounded-3xl border border-green-400/10 bg-green-400/[0.03] p-8 md:p-10"
        >
          <p className="font-mono text-sm tracking-[0.25em] text-green-400">
            DEVELOPMENT
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Built while learning.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            This portfolio is continuously evolving as I learn new
            technologies, build new projects, and experiment with different
            ideas. The goal is not just to display my work, but to show the
            journey behind it.
          </p>
        </motion.section>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="https://github.com/SomanshBhai/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-400 px-7 py-3 font-bold text-black transition hover:scale-105"
          >
            <FaGithub />
            View on GitHub
          </a>

          <a
            href="https://portfolio-somansh-bhai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-green-400/40 px-7 py-3 transition hover:bg-green-400 hover:text-black"
          >
            <FaExternalLinkAlt />
            Live Website
          </a>
        </motion.div>
      </div>
    </main>
  );
}

export default Portfolio;
