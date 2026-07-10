import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20">

      {/* Giant Background Text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 flex items-center justify-center
        text-[8rem] md:text-[14rem] lg:text-[22rem]
        font-black tracking-tight text-white pointer-events-none select-none"
      >
        SOMANSH
      </motion.h1>

      {/* Decorative Line */}
      <div className="absolute left-10 top-0 h-full w-px bg-white/10 hidden lg:block" />

      {/* Main Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}
        <div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="uppercase tracking-[0.5em] text-green-400 text-sm mb-6"
          >
            Student • Web Designer • Python Learner
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="font-black leading-none"
          >
            <span className="block text-6xl md:text-8xl xl:text-[9rem]">
              SOMANSH
            </span>

            <span className="block text-6xl md:text-8xl xl:text-[9rem] text-green-400">
              MAURYA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-10 max-w-xl text-lg text-gray-400 leading-8"
          >
            Passionate about building modern websites, exploring AI-powered
            design, and continuously learning new technologies to create
            beautiful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .7 }}
            className="flex flex-wrap gap-5 mt-12"
          >
            <button className="bg-green-500 text-black font-bold px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,.45)] transition-all duration-300">
              View Projects
            </button>

            <button className="border border-green-500 text-green-400 px-8 py-4 rounded-full hover:bg-green-500 hover:text-black transition-all duration-300">
              Contact Me
            </button>
          </motion.div>

        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex justify-center items-center"
        >

          {/* Outer Circle */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[420px] h-[420px] rounded-full border border-green-500/20"
          />

          {/* Middle Circle */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[300px] h-[300px] rounded-full border border-green-400/30"
          />

          {/* Glow */}
          <div className="w-56 h-56 rounded-full bg-gradient-to-br from-green-400/40 to-emerald-700/20 blur-xl" />

        </motion.div>

      </div>

      {/* Section Number */}
      <div className="absolute right-8 bottom-8 text-7xl font-black text-white/5">
        01
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-400"
      >
        <FaArrowDown size={22} />
      </motion.div>

    </section>
  );
}

export default Hero;