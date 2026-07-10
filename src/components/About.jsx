import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid lg:grid-cols-2 gap-20 items-start"
      >
        {/* Left Side */}
        <div>
          <p className="uppercase tracking-[0.35em] text-green-400 mb-6">
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            I BUILD
            <br />
            MODERN
            <br />
            EXPERIENCES.
          </h2>
        </div>

        {/* Right Side */}
        <div className="space-y-8 text-gray-400 text-lg leading-9">

          <p>
            I'm <span className="text-white font-semibold">Somansh Maurya</span>,
            a Class 9 student passionate about web development, creative
            design, and technology.
          </p>

          <p>
            I enjoy building modern websites with React, Tailwind CSS,
            and AI-assisted workflows. Every project helps me learn
            something new and improve my skills.
          </p>

          <p>
            Outside of coding, I enjoy Minecraft, experimenting with
            design ideas, and exploring new technologies that make the web
            more interactive and enjoyable.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8">

            <div>
              <h3 className="text-4xl font-black text-green-400">10+</h3>
              <p>Projects Built</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-green-400">2026</h3>
              <p>Learning Journey</p>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;