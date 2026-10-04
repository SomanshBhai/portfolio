import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <motion.div
        animate={{
          opacity: [0.12, 0.16, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 h-[360px] w-[360px] rounded-full bg-green-500 blur-[100px]"
      />

      <motion.div
        animate={{
          opacity: [0.09, 0.13, 0.09],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-24 -right-24 h-[320px] w-[320px] rounded-full bg-green-500 blur-[100px]"
      />
    </div>
  );
}

export default Background;
