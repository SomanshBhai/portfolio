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
        <p
          className="uppercase tracking-[0.4em] mb-4"
          style={{
            color: "var(--theme-accent)",
          }}
        >
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
            className="group border-b py-8 flex flex-col md:flex-row md:items-center md:justify-between"
            style={{
              borderColor:
                "color-mix(in srgb, var(--theme-border) 15%, transparent)",
            }}
          >
            <div className="flex items-center gap-6">
              <span
                className="text-xl font-bold"
                style={{
                  color: "var(--theme-accent)",
                }}
              >
                {skill.number}
              </span>

              <h3
                className="text-2xl md:text-4xl font-bold transition-colors duration-300"
                style={{
                  color: "var(--theme-text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--theme-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--theme-text)";
                }}
              >
                {skill.title}
              </h3>
            </div>

            <p
              className="mt-3 md:mt-0 text-lg"
              style={{
                color: "var(--theme-muted)",
              }}
            >
              {skill.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
