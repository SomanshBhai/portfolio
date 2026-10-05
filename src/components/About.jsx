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
          <p
            className="uppercase tracking-[0.35em] mb-6"
            style={{
              color: "var(--theme-accent)",
            }}
          >
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            LEARNING.
            <br />
            BUILDING.
            <br />
            IMPROVING.
          </h2>
        </div>

        {/* Right Side */}

        <div
          className="space-y-8 text-lg leading-9"
          style={{
            color: "var(--theme-muted)",
          }}
        >
          <p>
            I'm{" "}
            <span
              className="font-semibold"
              style={{
                color: "var(--theme-text)",
              }}
            >
              Somansh Maurya
            </span>
            , a Class 9 student at{" "}
            <span
              className="font-semibold"
              style={{
                color: "var(--theme-accent)",
              }}
            >
              T.A.A.C.
            </span>{" "}
            and currently focused on JEE while continuing to build things
            I'm curious about.
          </p>

          <p>
            I enjoy working with React, JavaScript and Python, building
            websites and Discord bots, and experimenting with different
            projects. I like learning by actually making things and
            figuring out how they work.
          </p>

          <p>
            Outside of coding, I'm into Minecraft, YouTube and creative
            projects. Right now, my main focus is balancing JEE preparation
            with coding, building better projects, and improving a little
            every day.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h3
                className="text-4xl font-black"
                style={{
                  color: "var(--theme-accent)",
                }}
              >
                JEE
              </h3>

              <p>Current Focus</p>
            </div>

            <div>
              <h3
                className="text-4xl font-black"
                style={{
                  color: "var(--theme-accent)",
                }}
              >
                ∞
              </h3>

              <p>Still Learning</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
