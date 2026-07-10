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
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          Open Source
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
          GITHUB
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* GitHub Profile */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
            <FaGithub className="text-6xl mb-6 text-green-400" />

            <h3 className="text-3xl font-black mb-4">
              GitHub Profile
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Explore my repositories, coding journey, and future projects.
            </p>

            <a
              href="https://github.com/SomanshBhai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-green-500 px-8 py-3 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300"
            >
              Visit GitHub →
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <h2 className="text-5xl font-black text-green-400">9+</h2>
              <p className="mt-3 text-gray-400">Projects</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <h2 className="text-5xl font-black text-green-400">10+</h2>
              <p className="mt-3 text-gray-400">Technologies</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <h2 className="text-5xl font-black text-green-400">2026</h2>
              <p className="mt-3 text-gray-400">Started React</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
              <h2 className="text-5xl font-black text-green-400">∞</h2>
              <p className="mt-3 text-gray-400">Learning</p>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default GithubStats;