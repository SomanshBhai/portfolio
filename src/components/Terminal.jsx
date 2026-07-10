import { motion } from "framer-motion";
import { useState } from "react";

const commands = {
  help: "Available commands: whoami, education, skills, youtube, github, goal, clear",
  whoami: "Somansh Maurya",
  education: "Class 9 Student • Kendriya Vidyalaya",
  skills:
    "React • JavaScript • HTML • CSS • Python • UI Design • AI Prompt Engineering",
  youtube: "@SomanshEdits2013",
  github: "github.com/SomanshBhai",
  goal: "Become a Software Engineer",
};

function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    {
      command: "help",
      output:
        "Type a command to explore my portfolio 🚀",
    },
  ]);

  function runCommand(e) {
    e.preventDefault();

    const command = input.toLowerCase().trim();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory([
      ...history,
      {
        command,
        output:
          commands[command] ||
          "Command not found. Type 'help' to see available commands.",
      },
    ]);

    setInput("");
  }

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
              somansh-terminal
            </span>

          </div>


          {/* Terminal Body */}
          <div className="p-8 font-mono min-h-[400px]">

            {history.map((item, index) => (
              <div key={index} className="mb-6">

                <p className="text-green-400">
                  $ {item.command}
                </p>

                <p className="text-gray-300 mt-2">
                  {item.output}
                </p>

              </div>
            ))}


            {/* Input */}
            <form onSubmit={runCommand}>

              <div className="flex items-center text-green-400">

                <span>
                  $
                </span>

                <input
                  autoFocus
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  className="ml-2 bg-transparent outline-none text-white w-full"
                  placeholder="type help..."
                />

              </div>

            </form>


          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Terminal;