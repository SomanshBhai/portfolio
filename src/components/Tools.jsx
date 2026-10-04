import { motion } from "framer-motion";
import { Calculator, Wrench, ArrowUpRight } from "lucide-react";

function Tools() {
  const tools = [
    {
      title: "Calculator",
      description: "A fast and simple calculator for everyday calculations.",
      icon: Calculator,
      status: "Available",
      link: "/calculator",
    },
    {
      title: "More Tools",
      description: "Useful utilities and experiments will be added here.",
      icon: Wrench,
      status: "Coming Soon",
      link: "#",
    },
  ];

  return (
    <section
      id="tools"
      className="relative px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.3em] text-green-400">
            /TOOLS
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Useful <span className="text-green-400">Tools</span>
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Small tools and experiments I build to make the web more useful.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.a
                key={tool.title}
                href={tool.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-400/40 hover:bg-green-400/[0.04]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-green-400/10 blur-3xl transition-all duration-500 group-hover:bg-green-400/20" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10">
                      <Icon className="h-6 w-6 text-green-400" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-400" />
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-white">
                      {tool.title}
                    </h3>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                        tool.status === "Available"
                          ? "border-green-400/30 bg-green-400/10 text-green-400"
                          : "border-white/10 bg-white/5 text-gray-400"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </div>

                  <p className="mt-3 leading-relaxed text-gray-400">
                    {tool.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tools;
