import { motion } from "framer-motion";

const commands = [
  { command: "whoami", output: "Somansh Maurya" },
  { command: "education", output: "Class 9 Student • Kendriya Vidyalaya" },
  { command: "skills", output: "React • JavaScript • HTML • CSS • Python • UI Design" },
  { command: "youtube", output: "@SomanshEdits2013" },
  { command: "goal", output: "Become a Software Engineer" },
];

function Terminal() {
  return (
    <section
      id="terminal"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="uppercase tracking-[0.4em] text-green-400 text-center mb-4">
          Interactive
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-16">
          DEVELOPER TERMINAL
        </h2>

        <div className="rounded-3xl border border-green-500/20 bg-[#0b0b0b] overflow-hidden shadow-[0_0_40px_rgba(34,197,94,.15)]">

          {/* Top Bar */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-[#121212]">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="ml-4 text-gray-400 text-sm">
              terminal
            </span>
          </div>

          <div className="p-8 font-mono space-y-8">

            {commands.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <p className="text-green-400">
                  $ {item.command}
                </p>

                <p className="text-gray-300 mt-2">
                  {item.output}
                </p>
              </motion.div>
            ))}

            <motion.div
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="text-green-400"
            >
              $ <span className="inline-block w-2 h-5 bg-green-400 ml-1"></span>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default Terminal;