import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center">

      <div className="text-center">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-black text-green-400"
        >
          S
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mt-6"
        >
          Somansh Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 mt-3"
        >
          Initializing Portfolio...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-72 h-2 bg-white/10 rounded-full overflow-hidden mt-10">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
            className="h-full bg-green-400"
          />

        </div>

      </div>

    </div>
  );
}

export default Loader;