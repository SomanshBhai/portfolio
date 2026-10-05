import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Started Programming",
    description:
      "Began learning Python and explored the fundamentals of programming.",
  },
  {
    year: "2026",
    title: "Web Development Journey",
    description:
      "Started learning HTML, CSS, JavaScript, React, and modern UI design.",
  },
  {
    year: "Now",
    title: "Building Projects",
    description:
      "Creating responsive websites, improving my frontend skills, and learning every day.",
  },
  {
    year: "Goal",
    title: "Future Software Engineer",
    description:
      "Continue learning full-stack development and build impactful software.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] theme-accent text-center mb-4">
          My Journey
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20 theme-text">
          EDUCATION
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.25 }}
            className="rounded-3xl border theme-border bg-[var(--theme-surface)] backdrop-blur-xl p-10 transition-all duration-300 hover:theme-accent-border hover:shadow-[0_0_30px_color-mix(in_srgb,var(--theme-accent)_15%,transparent)]"
          >
            <h3 className="text-3xl font-black mb-8 theme-text">
              🎓 Education
            </h3>

            <div className="space-y-5 theme-text leading-8">
              <p>
                <span className="theme-accent font-semibold">
                  Class:
                </span>{" "}
                Class 9 Student
              </p>

              <p>
                <span className="theme-accent font-semibold">
                  School:
                </span>{" "}
                Kendriya Vidyalaya
              </p>

              <p>
                <span className="theme-accent font-semibold">
                  Focus:
                </span>{" "}
                Web Development, Python & UI Design
              </p>

              <p>
                <span className="theme-accent font-semibold">
                  Goal:
                </span>{" "}
                Become a Software Engineer
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.25 }}
                className="border-l-2 theme-accent-border pl-6 relative"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full theme-accent-bg"></div>

                <p className="theme-accent font-bold">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2 theme-text">
                  {item.title}
                </h3>

                <p className="theme-muted mt-3 leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
