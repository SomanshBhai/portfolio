import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Started Programming",
    description:
      "Started learning Python and discovered how much I enjoyed building things with code.",
  },
  {
    year: "2026",
    title: "Explored Web Development",
    description:
      "Learned HTML, CSS, JavaScript and React while building websites and experimenting with modern UI.",
  },
  {
    year: "2026",
    title: "Started Building More",
    description:
      "Worked on projects involving websites, Discord bots, automation and other things I was curious about.",
  },
  {
    year: "Now",
    title: "JEE + Building",
    description:
      "My main focus is JEE while continuing to code, build projects and improve my skills whenever I can.",
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
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          My Journey
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
          JOURNEY
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Current Stage */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-3xl font-black mb-8">
              Current Stage
            </h3>

            <div className="space-y-5 text-gray-300 leading-8">
              <p>
                <span className="text-green-400 font-semibold">
                  Class:
                </span>{" "}
                Class 9
              </p>

              <p>
                <span className="text-green-400 font-semibold">
                  School:
                </span>{" "}
                T.A.A.C.
              </p>

              <p>
                <span className="text-green-400 font-semibold">
                  Main Focus:
                </span>{" "}
                JEE Preparation
              </p>

              <p>
                <span className="text-green-400 font-semibold">
                  Building:
                </span>{" "}
                Websites, Discord Bots & Personal Projects
              </p>

              <p>
                <span className="text-green-400 font-semibold">
                  Mindset:
                </span>{" "}
                Learn, build, improve, repeat.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                whileHover={{ x: 8 }}
                className="border-l-2 border-green-500 pl-6 relative"
              >
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500"></div>

                <p className="text-green-400 font-bold">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
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
