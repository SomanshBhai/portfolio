import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute w-[650px] h-[650px] rounded-full bg-green-500 blur-[180px]"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black tracking-[0.25em]"
        >
          <span className="text-white">SOMANSH</span>
          <span className="text-green-400">.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-8 uppercase tracking-[0.5em] text-gray-400 text-sm"
        >
          Initializing Portfolio...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-80 h-2 rounded-full bg-white/10 overflow-hidden mt-10">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 2.3,
              ease: "easeInOut",
            }}
            className="h-full bg-green-400"
          />

        </div>

        {/* Loading Percentage */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-green-400 font-semibold tracking-[0.3em]"
        >
          LOADING...
        </motion.p>

      </div>
    </motion.div>
  );
}

export default Loader;