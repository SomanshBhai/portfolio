import { motion } from "framer-motion";

function Loader() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* Lightweight background accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, var(--theme-accent) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-sm flex-col items-center px-6 text-center">
        {/* Klyro Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border shadow-2xl"
          style={{
            borderColor:
              "color-mix(in srgb, var(--theme-accent) 45%, transparent)",
            backgroundColor:
              "color-mix(in srgb, var(--theme-accent) 10%, var(--theme-surface))",
            boxShadow:
              "0 0 45px color-mix(in srgb, var(--theme-accent) 18%, transparent)",
          }}
        >
          <span
            className="text-4xl font-black tracking-[-0.08em]"
            style={{
              color: "var(--theme-accent)",
            }}
          >
            K
          </span>

          {/* Small accent dot */}
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.35,
              duration: 0.35,
              type: "spring",
              stiffness: 300,
            }}
            className="absolute -right-1 -top-1 h-3 w-3 rounded-full"
            style={{
              backgroundColor: "var(--theme-accent)",
              boxShadow:
                "0 0 14px color-mix(in srgb, var(--theme-accent) 65%, transparent)",
            }}
          />
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.18,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mt-7"
        >
          <h1
            className="text-4xl font-black tracking-[-0.05em] sm:text-5xl"
            style={{
              color: "var(--theme-text)",
            }}
          >
            Klyro
          </h1>

          <p
            className="mt-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{
              color: "var(--theme-muted)",
            }}
          >
            Personal Developer Hub
          </p>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.45,
            duration: 0.5,
          }}
          className="mt-8 flex items-center gap-2"
        >
          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-2 rounded-full"
            style={{
              backgroundColor: "var(--theme-accent)",
            }}
          />

          <span
            className="text-sm"
            style={{
              color: "var(--theme-muted)",
            }}
          >
            Preparing your workspace...
          </span>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.4,
          }}
          className="mt-8 w-full"
        >
          <div
            className="h-1.5 w-full overflow-hidden rounded-full"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--theme-text) 9%, transparent)",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.7,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="h-full rounded-full"
              style={{
                backgroundColor: "var(--theme-accent)",
              }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{
                color: "var(--theme-muted)",
              }}
            >
              KLYRO
            </span>

            <span
              className="font-mono text-[10px]"
              style={{
                color: "var(--theme-muted)",
              }}
            >
              BUILD / 01
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Loader;