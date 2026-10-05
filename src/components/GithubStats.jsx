import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function GithubStats() {
  return (
    <section
      id="github"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] theme-accent text-center mb-4">
          Open Source
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20 theme-text">
          GITHUB
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* GitHub Profile */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border theme-border bg-[var(--theme-surface)] backdrop-blur-xl p-10 transition-all duration-300 hover:theme-accent-border"
            style={{
              boxShadow:
                "0 0 30px color-mix(in srgb, var(--theme-accent) 8%, transparent)",
            }}
          >
            <FaGithub className="text-6xl mb-6 theme-accent" />

            <h3 className="text-3xl font-black mb-4 theme-text">
              GitHub Profile
            </h3>

            <p className="theme-muted leading-8 mb-8">
              Explore my repositories, coding journey, and future projects.
            </p>

            <a
              href="https://github.com/SomanshBhai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border theme-accent-border theme-accent px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--theme-accent) 0%, transparent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "var(--theme-accent)";
                e.currentTarget.style.color =
                  "var(--theme-background)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "color-mix(in srgb, var(--theme-accent) 0%, transparent)";
                e.currentTarget.style.color =
                  "var(--theme-accent)";
              }}
            >
              Visit GitHub →
            </a>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-[var(--theme-surface)] border theme-border p-8 text-center transition-all duration-300 hover:theme-accent-border"
            >
              <h2 className="text-5xl font-black theme-accent">
                9+
              </h2>

              <p className="mt-3 theme-muted">
                Projects
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-[var(--theme-surface)] border theme-border p-8 text-center transition-all duration-300 hover:theme-accent-border"
            >
              <h2 className="text-5xl font-black theme-accent">
                10+
              </h2>

              <p className="mt-3 theme-muted">
                Technologies
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-[var(--theme-surface)] border theme-border p-8 text-center transition-all duration-300 hover:theme-accent-border"
            >
              <h2 className="text-5xl font-black theme-accent">
                2026
              </h2>

              <p className="mt-3 theme-muted">
                Started React
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-[var(--theme-surface)] border theme-border p-8 text-center transition-all duration-300 hover:theme-accent-border"
            >
              <h2 className="text-5xl font-black theme-accent">
                ∞
              </h2>

              <p className="mt-3 theme-muted">
                Learning
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default GithubStats;
