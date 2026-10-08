import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Desktop GUI",
    description:
      "A graphical calculator interface built for a simple and practical desktop experience.",
  },
  {
    title: "Core Calculations",
    description:
      "Handles the fundamental arithmetic operations expected from a calculator.",
  },
  {
    title: "Python Logic",
    description:
      "The calculation logic and application behavior are powered by Python.",
  },
  {
    title: "Tkinter Interface",
    description:
      "Uses Tkinter to create the desktop graphical user interface.",
  },
];

const technologies = [
  {
    name: "Python",
    description: "Core programming language",
  },
  {
    name: "Tkinter",
    description: "Desktop GUI framework",
  },
];

function Section({ number, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <div className="mb-8 flex items-center gap-4">
        <span
          className="font-mono text-sm"
          style={{ color: "var(--theme-accent)" }}
        >
          {number}
        </span>

        <div
          className="h-px flex-1"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--theme-border) 25%, transparent)",
          }}
        />

        <h2
          className="text-2xl font-bold md:text-3xl"
          style={{ color: "var(--theme-text)" }}
        >
          {title}
        </h2>
      </div>

      {children}
    </motion.section>
  );
}

function SmartCalculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (number) => {
    if (waitingForOperand) {
      setDisplay(String(number));
      setWaitingForOperand(false);
      return;
    }

    if (display === "0") {
      setDisplay(String(number));
    } else {
      setDisplay(display + number);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const calculate = (first, second, selectedOperator) => {
    const a = Number(first);
    const b = Number(second);

    if (selectedOperator === "+") return a + b;
    if (selectedOperator === "-") return a - b;
    if (selectedOperator === "×") return a * b;

    if (selectedOperator === "÷") {
      if (b === 0) return "Error";
      return a / b;
    }

    return b;
  };

  const chooseOperator = (nextOperator) => {
    const inputValue = Number(display);

    if (operator && waitingForOperand) {
      setOperator(nextOperator);
      return;
    }

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);

      if (result === "Error") {
        setDisplay("Error");
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(true);
        return;
      }

      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    if (operator === null || previousValue === null) {
      return;
    }

    const inputValue = Number(display);
    const result = calculate(previousValue, inputValue, operator);

    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const clearCalculator = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const backspace = () => {
    if (waitingForOperand || display === "Error") {
      return;
    }

    if (display.length <= 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const buttons = [
    {
      label: "C",
      action: clearCalculator,
      style: {
        borderColor:
          "color-mix(in srgb, #f87171 25%, transparent)",
        backgroundColor:
          "color-mix(in srgb, #f87171 7%, transparent)",
        color: "#fca5a5",
      },
    },
    {
      label: "⌫",
      action: backspace,
      style: {
        borderColor:
          "color-mix(in srgb, var(--theme-border) 25%, transparent)",
        backgroundColor:
          "color-mix(in srgb, var(--theme-text) 4%, transparent)",
        color:
          "color-mix(in srgb, var(--theme-text) 70%, transparent)",
      },
    },
    {
      label: "÷",
      action: () => chooseOperator("÷"),
      accent: true,
    },
    {
      label: "×",
      action: () => chooseOperator("×"),
      accent: true,
    },

    {
      label: "7",
      action: () => inputNumber(7),
    },
    {
      label: "8",
      action: () => inputNumber(8),
    },
    {
      label: "9",
      action: () => inputNumber(9),
    },
    {
      label: "-",
      action: () => chooseOperator("-"),
      accent: true,
    },

    {
      label: "4",
      action: () => inputNumber(4),
    },
    {
      label: "5",
      action: () => inputNumber(5),
    },
    {
      label: "6",
      action: () => inputNumber(6),
    },
    {
      label: "+",
      action: () => chooseOperator("+"),
      accent: true,
    },

    {
      label: "1",
      action: () => inputNumber(1),
    },
    {
      label: "2",
      action: () => inputNumber(2),
    },
    {
      label: "3",
      action: () => inputNumber(3),
    },
    {
      label: "=",
      action: performCalculation,
      equal: true,
    },

    {
      label: "0",
      action: () => inputNumber(0),
      className: "col-span-2",
    },
    {
      label: ".",
      action: inputDecimal,
    },
  ];

  return (
    <main
      className="min-h-screen"
      style={{
        backgroundColor: "var(--theme-background)",
        color: "var(--theme-text)",
      }}
    >
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-[-180px] h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
          }}
        />

        <div
          className="absolute bottom-[-200px] right-[-100px] h-[400px] w-[400px] rounded-full blur-[120px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--theme-accent) 5%, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-16">
        {/* Top Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono text-sm transition"
            style={{ color: "var(--theme-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--theme-accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--theme-muted)")
            }
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Portfolio
          </Link>

          <span
            className="rounded-full border px-4 py-2 font-mono text-xs"
            style={{
              borderColor:
                "color-mix(in srgb, var(--theme-accent) 20%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--theme-accent) 5%, transparent)",
              color: "var(--theme-accent)",
            }}
          >
            PYTHON PROJECT
          </span>
        </motion.div>

        {/* Hero */}
        <section className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm uppercase tracking-[0.25em]"
            style={{ color: "var(--theme-accent)" }}
          >
            Personal Project
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl"
          >
            Smart
            <span style={{ color: "var(--theme-accent)" }}>
              {" "}
              Calculator.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "var(--theme-muted)" }}
          >
            A Python desktop calculator built while exploring GUI
            development, application logic, and the fundamentals of
            creating interactive software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="https://github.com/SomanshBhai/smart-calculator-python"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border px-5 py-3 font-mono text-sm transition"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-accent) 30%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                color: "var(--theme-accent)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "color-mix(in srgb, var(--theme-accent) 20%, transparent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "color-mix(in srgb, var(--theme-accent) 10%, transparent)")
              }
            >
              View on GitHub ↗
            </a>

            <Link
              to="/projects/portfolio"
              className="rounded-xl border px-5 py-3 font-mono text-sm transition"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 35%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-text) 3%, transparent)",
                color:
                  "color-mix(in srgb, var(--theme-text) 70%, transparent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--theme-border)";
                e.currentTarget.style.color =
                  "var(--theme-text)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--theme-border) 35%, transparent)";
                e.currentTarget.style.color =
                  "color-mix(in srgb, var(--theme-text) 70%, transparent)";
              }}
            >
              Previous Project
            </Link>
          </motion.div>
        </section>

        {/* Browser Calculator */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="mb-8 flex items-center gap-4">
            <span
              className="font-mono text-sm"
              style={{ color: "var(--theme-accent)" }}
            >
              LIVE
            </span>

            <div
              className="h-px flex-1"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--theme-border) 25%, transparent)",
              }}
            />

            <h2 className="text-2xl font-bold md:text-3xl">
              Try It{" "}
              <span style={{ color: "var(--theme-accent)" }}>
                Here.
              </span>
            </h2>
          </div>

          <div
            className="mx-auto max-w-md overflow-hidden rounded-3xl border p-5 shadow-2xl sm:p-7"
            style={{
              borderColor:
                "color-mix(in srgb, var(--theme-accent) 20%, transparent)",
              backgroundColor: "var(--theme-surface)",
              boxShadow:
                "0 0 40px color-mix(in srgb, var(--theme-accent) 5%, transparent)",
            }}
          >
            <div
              className="mb-5 rounded-2xl border p-5"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-background) 75%, transparent)",
              }}
            >
              <p
                className="mb-2 font-mono text-xs"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
                }}
              >
                browser-calculator
              </p>

              <div
                className="overflow-hidden text-right font-mono text-4xl font-bold"
                title={display}
                style={{ color: "var(--theme-text)" }}
              >
                {display}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {buttons.map((button) => (
                <motion.button
                  key={button.label}
                  type="button"
                  onClick={button.action}
                  whileTap={{ scale: 0.94 }}
                  className={`min-h-14 rounded-2xl border text-lg font-bold transition ${
                    button.className || ""
                  }`}
                  style={{
                    ...(button.style || {}),
                    ...(button.accent
                      ? {
                          borderColor:
                            "color-mix(in srgb, var(--theme-accent) 20%, transparent)",
                          backgroundColor:
                            "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                          color: "var(--theme-accent)",
                        }
                      : {}),
                    ...(button.equal
                      ? {
                          borderColor:
                            "color-mix(in srgb, var(--theme-accent) 30%, transparent)",
                          backgroundColor: "var(--theme-accent)",
                          color: "var(--theme-background)",
                        }
                      : {}),
                    ...(button.className
                      ? {}
                      : !button.style &&
                        !button.accent &&
                        !button.equal
                      ? {
                          borderColor:
                            "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                          backgroundColor:
                            "color-mix(in srgb, var(--theme-text) 4%, transparent)",
                          color:
                            "color-mix(in srgb, var(--theme-text) 80%, transparent)",
                        }
                      : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (button.equal) {
                      e.currentTarget.style.backgroundColor =
                        "var(--theme-accent-strong)";
                    } else if (button.accent) {
                      e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--theme-accent) 20%, transparent)";
                    } else if (!button.style) {
                      e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--theme-text) 8%, transparent)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (button.equal) {
                      e.currentTarget.style.backgroundColor =
                        "var(--theme-accent)";
                    } else if (button.accent) {
                      e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--theme-accent) 10%, transparent)";
                    } else if (!button.style) {
                      e.currentTarget.style.backgroundColor =
                        "color-mix(in srgb, var(--theme-text) 4%, transparent)";
                    }
                  }}
                >
                  {button.label}
                </motion.button>
              ))}
            </div>

            <p
              className="mt-5 text-center font-mono text-xs"
              style={{
                color:
                  "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
              }}
            >
              Runs directly in your browser • No packages required
            </p>
          </div>
        </motion.section>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-24 overflow-hidden rounded-2xl border shadow-2xl"
          style={{
            borderColor:
              "color-mix(in srgb, var(--theme-border) 25%, transparent)",
            backgroundColor: "var(--theme-surface)",
          }}
        >
          <div
            className="flex items-center gap-2 border-b px-5 py-4"
            style={{
              borderColor:
                "color-mix(in srgb, var(--theme-border) 25%, transparent)",
            }}
          >
            <span
              className="h-3 w-3 rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--theme-text) 20%, transparent)",
              }}
            />
            <span
              className="h-3 w-3 rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--theme-text) 20%, transparent)",
              }}
            />
            <span
              className="h-3 w-3 rounded-full"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--theme-text) 20%, transparent)",
              }}
            />

            <span
              className="ml-3 font-mono text-xs"
              style={{
                color:
                  "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
              }}
            >
              calculator.py
            </span>
          </div>

          <div className="overflow-x-auto p-6 font-mono text-sm leading-8">
            <p
              style={{
                color:
                  "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
              }}
            >
              somansh@portfolio:~/smart-calculator$
            </p>

            <p
              style={{
                color:
                  "color-mix(in srgb, var(--theme-text) 70%, transparent)",
              }}
            >
              python calculator.py
            </p>

            <p
              className="mt-3"
              style={{ color: "var(--theme-accent)" }}
            >
              [INFO] Starting Smart Calculator...
            </p>

            <p style={{ color: "var(--theme-accent)" }}>
              [INFO] Initializing Tkinter interface...
            </p>

            <p style={{ color: "var(--theme-accent)" }}>
              [OK] Calculator ready.
            </p>

            <p
              className="mt-3"
              style={{
                color:
                  "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
              }}
            >
              &gt; 12 + 8
            </p>

            <p style={{ color: "var(--theme-text)" }}>
              20
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <section className="mb-24 grid gap-4 sm:grid-cols-3">
          {[
            ["01", "Python", "Built with"],
            ["02", "Tkinter", "GUI framework"],
            ["03", "Desktop", "Application"],
          ].map(([number, value, label], index) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border p-6"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
              }}
            >
              <p
                className="font-mono text-xs"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
                }}
              >
                {number}
              </p>

              <p
                className="mt-5 text-2xl font-bold"
                style={{ color: "var(--theme-accent)" }}
              >
                {value}
              </p>

              <p
                className="mt-1 text-sm"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 55%, transparent)",
                }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </section>

        {/* Overview */}
        <Section number="01" title="Overview">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div
              className="rounded-2xl border p-7 md:p-9"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
              }}
            >
              <p
                className="text-base leading-8 md:text-lg"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 65%, transparent)",
                }}
              >
                Smart Calculator is a Python desktop project focused on
                learning how programming logic can be connected to a
                graphical user interface.
              </p>

              <p
                className="mt-5 text-base leading-8 md:text-lg"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 65%, transparent)",
                }}
              >
                Instead of keeping the project entirely in the terminal,
                I used Tkinter to experiment with windows, buttons,
                inputs, events, and user interaction.
              </p>
            </div>

            <div
              className="rounded-2xl border p-7 md:p-9"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-accent) 12%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-accent) 3%, transparent)",
              }}
            >
              <p
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "var(--theme-accent)" }}
              >
                Project Focus
              </p>

              <ul
                className="mt-6 space-y-4 text-sm"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 65%, transparent)",
                }}
              >
                <li>→ Python fundamentals</li>
                <li>→ GUI development</li>
                <li>→ Event-driven interaction</li>
                <li>→ Application structure</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Goals */}
        <Section number="02" title="Project Goals">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Build a functional calculator application.",
              "Learn the fundamentals of Tkinter.",
              "Connect interface actions with Python logic.",
              "Understand how desktop applications are structured.",
            ].map((goal, index) => (
              <motion.div
                key={goal}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -15 : 15,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border p-6"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
                }}
              >
                <span
                  className="font-mono text-sm"
                  style={{ color: "var(--theme-accent)" }}
                >
                  0{index + 1}
                </span>

                <p
                  className="mt-4"
                  style={{
                    color:
                      "color-mix(in srgb, var(--theme-muted) 70%, transparent)",
                  }}
                >
                  {goal}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Features */}
        <Section number="03" title="Features">
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border p-7 transition"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--theme-accent) 20%, transparent)";
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--theme-accent) 3%, transparent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--theme-border) 25%, transparent)";
                  e.currentTarget.style.backgroundColor =
                    "color-mix(in srgb, var(--theme-surface) 70%, transparent)";
                }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-sm"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--theme-accent) 20%, transparent)",
                    backgroundColor:
                      "color-mix(in srgb, var(--theme-accent) 5%, transparent)",
                    color: "var(--theme-accent)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3
                  className="text-lg font-bold"
                  style={{ color: "var(--theme-text)" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="mt-3 leading-7"
                  style={{
                    color:
                      "color-mix(in srgb, var(--theme-muted) 55%, transparent)",
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section number="04" title="Tech Stack">
          <div className="grid gap-4 sm:grid-cols-2">
            {technologies.map((technology, index) => (
              <div
                key={technology.name}
                className="rounded-2xl border p-7"
                style={{
                  borderColor:
                    "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                  backgroundColor:
                    "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
                }}
              >
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--theme-accent)" }}
                >
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {technology.name}
                </h3>

                <p
                  className="mt-2 text-sm"
                  style={{
                    color:
                      "color-mix(in srgb, var(--theme-muted) 50%, transparent)",
                  }}
                >
                  {technology.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Learning */}
        <Section number="05" title="What I Learned">
          <div
            className="rounded-2xl border p-7 md:p-10"
            style={{
              borderColor:
                "color-mix(in srgb, var(--theme-border) 25%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
            }}
          >
            <p
              className="max-w-3xl text-lg leading-8"
              style={{
                color:
                  "color-mix(in srgb, var(--theme-muted) 65%, transparent)",
              }}
            >
              This project helped me understand that building software
              isn't only about writing the core logic. The interface,
              user interaction, event handling, and structure all work
              together to turn code into an actual application.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                [
                  "Logic",
                  "Turning mathematical operations into program logic.",
                ],
                [
                  "UI",
                  "Building an interface that users can interact with.",
                ],
                [
                  "Structure",
                  "Connecting multiple parts into one working application.",
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border p-5"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                  }}
                >
                  <p
                    className="font-bold"
                    style={{ color: "var(--theme-accent)" }}
                  >
                    {title}
                  </p>

                  <p
                    className="mt-2 text-sm leading-6"
                    style={{
                      color:
                        "color-mix(in srgb, var(--theme-muted) 50%, transparent)",
                    }}
                  >
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Development Mindset */}
        <Section number="06" title="Development Mindset">
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{
              borderColor:
                "color-mix(in srgb, var(--theme-accent) 12%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--theme-accent) 3%, transparent)",
            }}
          >
            <p
              className="font-mono text-sm"
              style={{ color: "var(--theme-accent)" }}
            >
              // BUILD → LEARN → IMPROVE
            </p>

            <p
              className="mt-6 max-w-3xl text-xl font-semibold leading-9 md:text-2xl"
              style={{
                color:
                  "color-mix(in srgb, var(--theme-text) 75%, transparent)",
              }}
            >
              Small projects like this are part of the journey — taking
              an idea, turning it into working code, and learning from
              every iteration.
            </p>
          </div>
        </Section>

        {/* GitHub CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div
            className="overflow-hidden rounded-3xl border p-8 md:p-12"
            style={{
              borderColor:
                "color-mix(in srgb, var(--theme-border) 25%, transparent)",
              backgroundColor:
                "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
            }}
          >
            <p
              className="font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--theme-accent)" }}
            >
              Source Code
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Explore the project.
            </h2>

            <p
              className="mt-4 max-w-2xl leading-7"
              style={{
                color:
                  "color-mix(in srgb, var(--theme-muted) 50%, transparent)",
              }}
            >
              Check out the source code and see how the calculator was
              built with Python and Tkinter.
            </p>

            <a
              href="https://github.com/SomanshBhai/smart-calculator-python"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-xl border px-6 py-3 font-mono text-sm transition"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-accent) 30%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-accent) 10%, transparent)",
                color: "var(--theme-accent)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "color-mix(in srgb, var(--theme-accent) 20%, transparent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "color-mix(in srgb, var(--theme-accent) 10%, transparent)")
              }
            >
              Open GitHub Repository ↗
            </a>
          </div>
        </motion.section>

        {/* Project Navigation */}
        <section
          className="border-t pt-10"
          style={{
            borderColor:
              "color-mix(in srgb, var(--theme-border) 25%, transparent)",
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              to="/projects/portfolio"
              className="group rounded-2xl border p-6 transition"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--theme-accent) 20%, transparent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--theme-border) 25%, transparent)")
              }
            >
              <p
                className="font-mono text-xs"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
                }}
              >
                ← PREVIOUS PROJECT
              </p>

              <h3
                className="mt-4 text-xl font-bold transition"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    "var(--theme-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    "var(--theme-text)")
                }
              >
                Personal Portfolio
              </h3>

              <p
                className="mt-2 text-sm"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
                }}
              >
                React • Tailwind CSS • Framer Motion
              </p>
            </Link>

            <Link
              to="/projects/nox-busted"
              className="group rounded-2xl border p-6 text-left transition md:text-right"
              style={{
                borderColor:
                  "color-mix(in srgb, var(--theme-border) 25%, transparent)",
                backgroundColor:
                  "color-mix(in srgb, var(--theme-surface) 70%, transparent)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--theme-accent) 20%, transparent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--theme-border) 25%, transparent)")
              }
            >
              <p
                className="font-mono text-xs"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
                }}
              >
                NEXT PROJECT →
              </p>

              <h3
                className="mt-4 text-xl font-bold transition"
                style={{ color: "var(--theme-text)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color =
                    "var(--theme-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    "var(--theme-text)")
                }
              >
                Nox Busted
              </h3>

              <p
                className="mt-2 text-sm"
                style={{
                  color:
                    "color-mix(in srgb, var(--theme-muted) 45%, transparent)",
                }}
              >
                Python • discord.py • Discord
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SmartCalculator;