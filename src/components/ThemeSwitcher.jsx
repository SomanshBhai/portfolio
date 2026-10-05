import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeContext";

function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  const selectedTheme = themes[theme] || themes.green;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-72 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-4">
              <p className="font-mono text-xs tracking-[0.25em] text-gray-500">
                APPEARANCE
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white">
                Choose Theme
              </h3>

              <p
                className="mt-1 text-xs"
                style={{ color: "var(--theme-muted)" }}
              >
                {selectedTheme.name}
              </p>
            </div>

            <div className="max-h-[420px] space-y-2 overflow-y-auto pr-1">
              {Object.entries(themes).map(([key, value]) => {
                const isActive = theme === key;

                return (
                  <button
                    key={key}
                    onClick={() => setTheme(key)}
                    className="flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all"
                    style={{
                      borderColor: isActive
                        ? value.accent
                        : "rgba(255,255,255,0.1)",
                      backgroundColor: isActive
                        ? `color-mix(in srgb, ${value.accent} 10%, transparent)`
                        : "rgba(255,255,255,0.03)",
                    }}
                  >
                    <span
                      className="h-4 w-4 shrink-0 rounded-full border border-white/10"
                      style={{
                        backgroundColor: value.accent,
                        boxShadow: isActive
                          ? `0 0 12px ${value.accent}`
                          : "none",
                      }}
                    />

                    <span
                      className="flex-1 text-sm"
                      style={{
                        color: isActive
                          ? value.accent
                          : "rgba(255,255,255,0.85)",
                      }}
                    >
                      {value.name}
                    </span>

                    {isActive && (
                      <span
                        className="text-xs font-bold"
                        style={{ color: value.accent }}
                      >
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-full border bg-black/80 text-xl shadow-xl backdrop-blur-xl transition-all"
        style={{
          borderColor: "color-mix(in srgb, var(--theme-accent) 45%, transparent)",
          boxShadow:
            "0 0 25px color-mix(in srgb, var(--theme-accent) 15%, transparent)",
        }}
        aria-label="Change theme"
      >
        🎨
      </motion.button>
    </div>
  );
}

export default ThemeSwitcher;
