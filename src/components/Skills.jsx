import { motion } from "framer-motion";

const skills = [
  {
    number: "01",
    title: "Frontend Development",
    tech: "React • Vite • Tailwind CSS",
  },
  {
    number: "02",
    title: "UI / UX Design",
    tech: "Figma • Responsive Design • Animations",
  },
  {
    number: "03",
    title: "Programming",
    tech: "Python • JavaScript • Learning Java",
  },
  {
    number: "04",
    title: "Creative Tools",
    tech: "Photoshop • Premiere Pro • Canva",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="uppercase tracking-[0.4em] text-green-400 mb-4">
          Skills
        </p>

        <h2 className="text-5xl md:text-7xl font-black mb-20">
          WHAT I DO
        </h2>
      </motion.div>

      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group border-b border-white/10 py-8 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-6">
              <span className="text-green-400 text-xl font-bold">
                {skill.number}
              </span>

              <h3 className="text-2xl md:text-4xl font-bold group-hover:text-green-400 transition-colors duration-300">
                {skill.title}
              </h3>
            </div>

            <p className="text-gray-400 mt-3 md:mt-0 text-lg">
              {skill.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;