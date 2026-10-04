import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  "Moderation",
  "Tickets",
  "Giveaways",
  "Server Stats",
  "Reaction Roles",
  "Leveling",
  "Welcome System",
  "Birthday System",
  "Utilities",
  "Music",
];

const technologies = ["Python", "discord.py", "Discord API"];

function NoxBusted() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition mb-16"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-green-400 uppercase tracking-[0.35em] text-sm mb-5">
            Discord Bot Project
          </p>

          <h1 className="text-5xl md:text-8xl font-black tracking-tight">
            NOX BUSTED
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mt-6 max-w-3xl leading-relaxed">
            An all-in-one Discord bot built to bring useful community,
            moderation, utility, and server-management features together in
            one place.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://github.com/SomanshBhai/Nox-Busted"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-400 text-black px-7 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              <FaGithub />
              View on GitHub
            </a>
          </div>
        </motion.section>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            01
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Overview
          </h2>

          <div className="border border-white/10 rounded-3xl bg-white/[0.02] p-8 md:p-12">
            <p className="text-gray-400 leading-8 text-lg">
              Nox Busted is a Discord bot project focused on making community
              server management easier by combining multiple useful systems
              into a single bot. It includes tools for moderation, tickets,
              giveaways, server information, leveling, welcome features,
              utilities, music, and other community functionality.
            </p>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            02
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
                className="border border-white/10 rounded-2xl bg-[#101010] p-6 hover:border-green-400/40 transition"
              >
                <span className="text-green-400 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-lg font-bold mt-3">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            03
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Tech Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="px-6 py-3 rounded-full border border-green-500/20 bg-green-500/10 text-green-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Learning */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
            04
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-8">
            What I Learned
          </h2>

          <div className="border border-white/10 rounded-3xl bg-white/[0.02] p-8 md:p-12">
            <p className="text-gray-400 leading-8 text-lg">
              Building a larger Discord bot involves much more than creating
              individual commands. The project helped me work with Discord
              APIs, bot architecture, command systems, server features, and
              the challenges of bringing many different systems together.
            </p>
          </div>
        </motion.section>

        {/* GitHub CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 mb-20"
        >
          <div className="rounded-3xl border border-green-400/20 bg-green-400/[0.04] p-8 md:p-12 text-center">
            <p className="text-gray-400 mb-6">
              Explore the project source code and development history.
            </p>

            <a
              href="https://github.com/SomanshBhai/Nox-Busted"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              <FaGithub />
              Open GitHub Repository
            </a>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default NoxBusted;
