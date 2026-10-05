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
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-black"
          style={{
            color: "var(--theme-accent)",
            textShadow:
              "0 0 30px color-mix(in srgb, var(--theme-accent) 45%, transparent)",
          }}
        >
          S
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-6 text-3xl font-black"
          style={{
            color: "var(--theme-text)",
          }}
        >
          Somansh Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-3"
          style={{
            color: "var(--theme-muted)",
          }}
        >
          Initializing Portfolio...
        </motion.p>

        <div
          className="mt-10 h-2 w-72 overflow-hidden rounded-full"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--theme-text) 10%, transparent)",
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.7,
              ease: "easeInOut",
            }}
            className="h-full rounded-full"
            style={{
              backgroundColor: "var(--theme-accent)",
              boxShadow:
                "0 0 20px color-mix(in srgb, var(--theme-accent) 60%, transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
