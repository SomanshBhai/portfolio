import { motion } from "framer-motion";

function Loader() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      <div className="text-center">
        {/* Logo */}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-black"
          style={{
            color: "var(--theme-accent)",
            textShadow:
              "0 0 30px color-mix(in srgb, var(--theme-accent) 35%, transparent)",
          }}
        >
          S
        </motion.div>

        {/* Name */}

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mt-6"
          style={{
            color: "var(--theme-text)",
          }}
        >
          Somansh Portfolio
        </motion.h1>

        {/* Status */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3"
          style={{
            color: "var(--theme-muted)",
          }}
        >
          Initializing Portfolio...
        </motion.p>

        {/* Progress Bar */}

        <div
          className="w-72 h-2 rounded-full overflow-hidden mt-10"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--theme-text) 10%, transparent)",
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.7, ease: "easeInOut" }}
            className="h-full"
            style={{
              backgroundColor: "var(--theme-accent)",
              boxShadow:
                "0 0 18px color-mix(in srgb, var(--theme-accent) 45%, transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
