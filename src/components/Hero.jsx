import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaCode } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center max-w-7xl mx-auto px-6 pt-32"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-[0.4em] text-green-400 mb-6">
            Software Developer • Creator
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Hi, I'm
            <br />
            <span className="text-green-400">
              Somansh
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl leading-9 max-w-xl">
            A Class 9 student passionate about technology, web development,
            UI design, and creating digital experiences through code and
            creativity.
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



        {/* Right Card */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-green-400 blur-[100px] opacity-20 rounded-full"></div>


            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="relative w-[320px] h-[320px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl"
            >

              <FaCode className="text-green-400 text-7xl mb-6" />

              <h2 className="text-3xl font-black">
                Developer
              </h2>

              <p className="text-gray-400 mt-3 text-center px-8">
                React
                <br />
                JavaScript
                <br />
                Python
                <br />
                UI Design
              </p>


            </motion.div>

          </div>

        </motion.div>


      </div>
    </section>
  );
}

export default Hero;