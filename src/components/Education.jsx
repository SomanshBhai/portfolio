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
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          My Journey
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
          EDUCATION
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Education Card */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
            <h3 className="text-3xl font-black mb-8">
              🎓 Education
            </h3>

            <div className="space-y-5 text-gray-300 leading-8">

              <p>
                <span className="text-green-400 font-semibold">
                  Class:
                </span>{" "}
                Class 9 Student
              </p>

              <p>
                <span className="text-green-400 font-semibold">
                  School:
                </span>{" "}
                Kendriya Vidyalaya
              </p>

              <p>
                <span className="text-green-400 font-semibold">
                  Focus:
                </span>{" "}
                Web Development, Python & UI Design
              </p>

              <p>
                <span className="text-green-400 font-semibold">
                  Goal:
                </span>{" "}
                Become a Software Engineer
              </p>

            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
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