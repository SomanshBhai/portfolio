import { motion } from "framer-motion";
import { useState } from "react";

const commands = {
  help: "Available commands: whoami, education, skills, youtube, github, goal, clear",
  whoami: "Somansh Maurya",
  education: "Class 9 Student • Kendriya Vidyalaya",
  skills:
    "React • JavaScript • HTML • CSS • Python • UI Design • AI Prompt Engineering",
  youtube: "@SomansEdits2013",
  github: "github.com/SomanshBhai",
  goal: "Become a Software Engineer",
};

function Terminal() {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    {
      command: "help",
      output: "Type a command to explore my portfolio 🚀",
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

    setHistory((prev) => [
      ...prev,
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
        <p className="uppercase tracking-[0.4em] theme-accent text-center mb-4">
          Interactive
        </p>

        <h2 className="text-5xl md:text-7xl font-black text-center mb-16 theme-text">
          DEVELOPER TERMINAL
        </h2>

        <div
          className="rounded-3xl border theme-accent-border overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: "var(--theme-surface)",
            boxShadow:
              "0 0 40px color-mix(in srgb, var(--theme-accent) 15%, transparent)",
          }}
        >
          {/* Top Bar */}
          <div
            className="flex items-center gap-2 px-6 py-4 border-b theme-border"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--theme-background) 65%, var(--theme-surface))",
            }}
          >
            {/* These colors intentionally remain terminal-style */}
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="ml-4 theme-muted text-sm">
              somansh-terminal
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-8 font-mono min-h-[400px]">
            {history.map((item, index) => (
              <div key={index} className="mb-6">
                <p className="theme-accent">
                  $ {item.command}
                </p>

                <p className="theme-text mt-2 opacity-90">
                  {item.output}
                </p>
              </div>
            ))}

            <form onSubmit={runCommand}>
              <div className="flex items-center theme-accent">
                <span>$</span>

                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="ml-2 bg-transparent outline-none theme-text w-full placeholder:theme-muted"
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
