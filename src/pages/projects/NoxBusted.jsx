import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaCode,
  FaDiscord,
  FaLayerGroup,
  FaLightbulb,
  FaServer,
} from "react-icons/fa";
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
    items: ["Tickets", "Giveaways", "Leveling", "Birthday System"],
  },
  {
    title: "Server Management",
    description: "Tools that help manage and organize a Discord server.",
    items: ["Moderation", "Server Stats", "Reaction Roles"],
  },
  {
    title: "Experience",
    description: "Features that make a server more useful and engaging.",
    items: ["Welcome System", "Utilities", "Music"],
  },
];

const stats = [
  {
    value: "10+",
    label: "Verified features",
  },
  {
    value: "Python",
    label: "Built with",
  },
  {
    value: "Discord",
    label: "Platform",
  },
];

function NoxBusted() {
  return (
    <main className="min-h-screen bg-[#050505] text-white px-6 py-20 overflow-hidden">
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
          <div className="flex items-center gap-3 text-green-400 mb-5">
            <FaDiscord />
            <p className="uppercase tracking-[0.35em] text-sm">
              Discord Bot Project
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className="text-white/30 font-mono text-sm mb-4">
                PROJECT / 001
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
                NOX
                <span className="text-green-400"> BUSTED</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mt-6 max-w-3xl leading-relaxed">
                An all-in-one Discord bot built to bring useful community,
                moderation, utility, and server-management features together
                in one place.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="w-32 h-32 rounded-3xl border border-green-400/20 bg-green-400/[0.04] flex items-center justify-center">
                <FaDiscord className="text-5xl text-green-400" />
              </div>
            </div>
          </div>

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

            <Link
              to="/"
              className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-7 py-3 rounded-full font-bold text-gray-300 hover:border-green-400/40 hover:text-green-400 transition"
            >
              Back to Projects
              <FaArrowRight />
            </Link>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 rounded-2xl bg-white/[0.02] p-6"
            >
              <p className="text-3xl font-black text-green-400">
                {stat.value}
              </p>

              <p className="text-gray-500 mt-2 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
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

          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-6">
            <div className="border border-white/10 rounded-3xl bg-white/[0.02] p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <FaLayerGroup className="text-green-400" />
                <span className="text-sm uppercase tracking-widest text-gray-500">
                  The idea
                </span>
              </div>

              <p className="text-gray-400 leading-8 text-lg">
                Nox Busted is a Discord bot project focused on making
                community server management easier by combining multiple
                useful systems into a single bot. It includes tools for
                moderation, tickets, giveaways, server information, leveling,
                welcome features, utilities, music, and other community
                functionality.
              </p>
            </div>

            <div className="border border-green-400/10 rounded-3xl bg-green-400/[0.03] p-8 flex flex-col justify-between">
              <FaServer className="text-green-400 text-3xl" />

              <div className="mt-12">
                <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
                  Built for
                </p>

                <h3 className="text-2xl font-bold">
                  Discord Communities
                </h3>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Feature Categories */}
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
            Built Around Communities
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
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
                className="border border-white/10 rounded-3xl bg-[#101010] p-7 hover:border-green-400/30 transition"
              >
                <span className="text-green-400 font-mono text-sm">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-bold mt-4">
                  {group.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-7">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 text-gray-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
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
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
            <div>
              <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">
                03
              </p>

              <h2 className="text-4xl md:text-5xl font-black">
                Features
              </h2>
            </div>

            <p className="text-gray-500 max-w-md">
              A collection of verified systems currently represented in the
              project.
            </p>
          </div>

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
                className="group border border-white/10 rounded-2xl bg-[#101010] p-6 hover:border-green-400/40 hover:bg-green-400/[0.03] transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-mono font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <FaCode className="text-gray-700 group-hover:text-green-400 transition" />
                </div>

                <h3 className="text-lg font-bold mt-6">
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
            04
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-10">
            Tech Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {technologies.map((technology, index) => (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="border border-white/10 rounded-3xl bg-white/[0.02] p-7 hover:border-green-400/30 transition"
              >
                <div className="w-11 h-11 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center">
                  <FaCode className="text-green-400" />
                </div>

                <h3 className="text-xl font-bold mt-6">
                  {technology.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {technology.description}
                </p>
              </motion.div>
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
            05
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-8">
            What I Learned
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-white/10 rounded-3xl bg-white/[0.02] p-8 md:p-10">
              <FaLightbulb className="text-green-400 text-2xl mb-6" />

              <p className="text-gray-400 leading-8 text-lg">
                Building a larger Discord bot involves much more than
                creating individual commands. The project helped me work with
                Discord APIs, bot architecture, command systems, server
                features, and the challenges of bringing many different
                systems together.
              </p>
            </div>

            <div className="border border-white/10 rounded-3xl bg-[#101010] p-8 md:p-10">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
                Development mindset
              </p>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Build systems,
                <br />
                not just commands.
              </h3>

              <div className="h-px bg-white/10 my-7" />

              <p className="text-gray-500 leading-7">
                Nox Busted became an opportunity to think about how separate
                features can work together as one larger project.
              </p>
            </div>
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
          <div className="relative overflow-hidden rounded-3xl border border-green-400/20 bg-green-400/[0.04] p-8 md:p-14 text-center">
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-green-400/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-green-400/10 blur-3xl" />

            <div className="relative">
              <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-5">
                Explore the code
              </p>

              <h2 className="text-3xl md:text-5xl font-black">
                Want to see Nox Busted?
              </h2>

              <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
                Explore the public repository to see the project source code
                and its development.
              </p>

              <a
                href="https://github.com/SomanshBhai/Nox-Busted"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 bg-green-400 text-black px-8 py-4 rounded-full font-bold mt-8 hover:scale-105 transition"
              >
                <FaGithub />
                Open GitHub Repository
                <FaArrowRight />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

export default NoxBusted;
