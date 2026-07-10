import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">

      {/* Green Glow 1 */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-green-500 opacity-25 blur-3xl"
      />

      {/* Green Glow 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-emerald-400 opacity-20 blur-3xl"
      />

      {/* Small Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -120, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-[250px] h-[250px] rounded-full bg-lime-400 opacity-15 blur-3xl"
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-black/40" />

    </div>
  );
}

export default Background;