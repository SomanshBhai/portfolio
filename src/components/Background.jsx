import { motion } from "framer-motion";

function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full blur-[180px]"
        style={{
          backgroundColor: "var(--theme-accent)",
        }}
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full blur-[180px]"
        style={{
          backgroundColor: "var(--theme-accent)",
        }}
      />
    </div>
  );
}

export default Background;
