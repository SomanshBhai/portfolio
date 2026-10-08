import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <main
      className="min-h-screen px-6 py-24 md:px-12 lg:px-20"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="mb-12 inline-flex items-center gap-2 text-sm transition"
            style={{ color: "var(--theme-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--theme-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--theme-muted)")
            }
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
          <p
            className="mb-4 font-mono text-sm tracking-[0.3em]"
            style={{ color: "var(--theme-accent)" }}
          >
            /PROJECT
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Personal{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              Portfolio
            </span>
          </h1>

          <p
            className="mt-6 max-w-3xl text-lg leading-8"
            style={{ color: "var(--theme-muted)" }}
          >
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
          {[
            ["STACK", "React • Tailwind • Framer Motion"],
            ["STATUS", "Active Development"],
            ["DEPLOYMENT", "Vercel"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border p-6"
              style={{
                borderColor: "var(--theme-border)",
                backgroundColor: "var(--theme-surface)",
              }}
            >
              <p
                className="font-mono text-sm"
                style={{ color: "var(--theme-muted)" }}
              >
                {label}
              </p>

              <p
                className="mt-3 text-lg font-semibold"
                style={{
                  color:
                    label === "STATUS"
                      ? "var(--theme-accent)"
                      : "var(--theme-text)",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold">
            What makes it{" "}
            <span style={{ color: "var(--theme-accent)" }}>
              different?
            </span>
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
                className="rounded-xl border p-5 transition"
                style={{
                  borderColor: "var(--theme-border)",
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
                  color: "var(--theme-muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--theme-accent) 40%, transparent)";
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--theme-accent) 5%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "var(--theme-border)";
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--theme-surface) 70%, transparent)";
                }}
              >
                <span
                  className="mr-3"
                  style={{ color: "var(--theme-accent)" }}
                >
                  ▸
                </span>
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
          className="mt-16 rounded-3xl border p-8 md:p-10"
          style={{
            borderColor:
              "color-mix(in srgb, var(--theme-accent) 15%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--theme-accent) 4%, transparent)",
          }}
        >
          <p
            className="font-mono text-sm tracking-[0.25em]"
            style={{ color: "var(--theme-accent)" }}
          >
            DEVELOPMENT
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Built while learning.
          </h2>

          <p
            className="mt-5 max-w-3xl leading-8"
            style={{ color: "var(--theme-muted)" }}
          >
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
            className="flex items-center gap-2 rounded-full px-7 py-3 font-bold transition hover:scale-105"
            style={{
              backgroundColor: "var(--theme-accent)",
              color: "var(--theme-background)",
            }}
          >
            <FaGithub />
            View on GitHub
          </a>

          <a
            href="https://portfolio-somansh-bhai.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border px-7 py-3 transition hover:scale-105"
            style={{
              borderColor:
                "color-mix(in srgb, var(--theme-accent) 45%, transparent)",
              color: "var(--theme-text)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "var(--theme-accent)";
              e.currentTarget.style.color =
                "var(--theme-background)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--theme-text)";
            }}
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