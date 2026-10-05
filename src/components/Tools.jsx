import { motion } from "framer-motion";

function Tools() {
  const tools = [
    {
      title: "Calculator",
      description: "A fast and simple calculator for everyday calculations.",
      icon: "⌘",
      status: "Available",
      link: "/calculator",
    },
    {
      title: "More Tools",
      description: "Useful utilities and experiments will be added here.",
      icon: "⚙",
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.3em] theme-accent">
            /TOOLS
          </p>

          <h2 className="text-4xl font-bold tracking-tight theme-text md:text-5xl">
            Useful <span className="theme-accent">Tools</span>
          </h2>

          <p className="mt-4 max-w-2xl theme-muted">
            Small tools and experiments I build to make the web more useful.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool, index) => (
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
              className="group relative overflow-hidden rounded-2xl border theme-border bg-[var(--theme-surface)] p-6 backdrop-blur-sm transition-all duration-300 hover:theme-accent-border hover:shadow-[0_0_30px_color-mix(in_srgb,var(--theme-accent)_12%,transparent)]"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-3xl transition-all duration-500"
                style={{
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                }}
              />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border font-mono text-xl theme-accent theme-accent-border"
                    style={{
                      backgroundColor:
                        "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                    }}
                  >
                    {tool.icon}
                  </div>

                  <span className="text-xl theme-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:theme-accent">
                    ↗
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold theme-text">
                    {tool.title}
                  </h3>

                  <span
                    className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                      tool.status === "Available"
                        ? "theme-accent-border theme-accent"
                        : "theme-border theme-muted"
                    }`}
                    style={
                      tool.status === "Available"
                        ? {
                            backgroundColor:
                              "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                          }
                        : {
                            backgroundColor:
                              "color-mix(in srgb, var(--theme-text) 5%, transparent)",
                          }
                    }
                  >
                    {tool.status}
                  </span>
                </div>

                <p className="mt-3 leading-relaxed theme-muted">
                  {tool.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tools;
