import { motion } from "framer-motion";
import { Typewriter, Cursor } from "react-simple-typewriter";
import {
  FaArrowRight,
  FaGithub,
  FaChevronDown,
  FaReact,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center max-w-7xl mx-auto px-6 pt-32 relative"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-500/10 px-5 py-2 mb-8"
          >
            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-green-400 font-semibold">
              Currently Learning React & Python
            </span>

          </motion.div>

          <p className="uppercase tracking-[0.45em] text-green-400 mb-5">
            SOFTWARE DEVELOPER • UI DESIGNER
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Hello,
            <br />
            I'm <span className="text-green-400">Somansh</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl leading-9 max-w-xl">
            A passionate Class 9 student who enjoys building modern websites,
            designing clean user interfaces, learning new technologies,
            and turning creative ideas into real projects.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#projects"
              className="flex items-center gap-3 bg-green-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="https://github.com/SomanshBhai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/20 px-8 py-4 rounded-full hover:border-green-400 hover:text-green-400 transition"
            >
              <FaGithub />
              GitHub
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="w-full max-w-[560px] rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_0_40px_rgba(34,197,94,.15)]"
          >

            {/* Window */}

            <div className="flex items-center gap-2 px-5 py-4 bg-[#1c1c1c] border-b border-white/10">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="ml-4 text-sm text-gray-400">
                portfolio.jsx
              </span>

            </div>

            <div className="flex">

              {/* Explorer */}

              <div className="w-44 border-r border-white/10 bg-[#171717] p-4">

                <h3 className="text-xs text-gray-500 uppercase mb-4">
                  Explorer
                </h3>

                <div className="space-y-3 text-sm">

                  <div className="text-green-400 font-medium">
                    📄 Hero.jsx
                  </div>

                  <div className="text-gray-500">
                    📄 About.jsx
                  </div>

                  <div className="text-gray-500">
                    📄 Projects.jsx
                  </div>

                  <div className="text-gray-500">
                    📄 Contact.jsx
                  </div>

                </div>

              </div>

              {/* Code */}

              <div className="flex-1 p-6 font-mono text-[14px] leading-8">

                <div>

                  <span className="text-purple-400">
                    const
                  </span>{" "}

                  <span className="text-cyan-400">
                    developer
                  </span>{" "}

                  <span className="text-white">
                    =
                  </span>{" "}

                  {"{"}

                </div>

                <div className="ml-6">

                  <span className="text-blue-400">
                    name
                  </span>

                  <span className="text-white">
                    :
                  </span>{" "}

                  <span className="text-green-400">
                    "
                  </span>

                  <Typewriter
                    words={[
                      "Somansh",
                      "Software Developer",
                      "React Developer",
                    ]}
                    loop={0}
                    cursor={false}
                    typeSpeed={70}
                    deleteSpeed={40}
                    delaySpeed={1800}
                  />

                  <Cursor cursorColor="#22c55e" />

                  <span className="text-green-400">
                    "
                  </span>

                </div>

                <div className="ml-6">

                  <span className="text-blue-400">
                    skills
                  </span>

                  <span className="text-white">
                    :
                  </span>

                </div>

                <div className="ml-12 flex gap-4 mt-3">

                  <FaReact className="text-cyan-400 text-2xl" />

                  <SiJavascript className="text-yellow-400 text-2xl" />

                  <SiTailwindcss className="text-cyan-300 text-2xl" />

                </div>

                <div className="ml-6 mt-5">

                  <span className="text-blue-400">
                    passion
                  </span>

                  <span className="text-white">
                    :
                  </span>{" "}

                  <span className="text-green-400">
                    "Building beautiful websites"
                  </span>

                </div>

                <div className="ml-6 mt-5">

                  <span className="text-blue-400">
                    youtube
                  </span>

                  <span className="text-white">
                    :
                  </span>{" "}

                  <span className="text-yellow-300">
                    "@SomanshEdits2013"
                  </span>

                </div>

                <div className="mt-6 text-white">
                  {"};"}
                </div>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-gray-400 hover:text-green-400"
      >

        <FaChevronDown className="mx-auto text-2xl mb-2" />

        <p className="uppercase tracking-[0.3em] text-sm">
          Scroll
        </p>

      </motion.a>

    </section>
  );
}

export default Hero;