import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-5xl md:text-7xl font-black tracking-widest"
      >
        <span className="text-white">SOMANSH</span>
        <span className="text-green-400">.</span>
      </motion.h1>

      <p className="mt-8 text-gray-400 tracking-[0.4em] uppercase">
        Loading Portfolio...
      </p>

      <div className="w-72 h-2 bg-white/10 rounded-full mt-10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="h-full bg-green-400"
        />
      </div>
    </motion.div>
  );
}

export default Loader;