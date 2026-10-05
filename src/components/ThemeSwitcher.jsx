import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeContext";

function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-64 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-4">
              <p className="font-mono text-xs tracking-[0.25em] text-gray-500">
                APPEARANCE
              </p>

              <h3 className="mt-1 text-lg font-semibold text-white">
                Choose Theme
              </h3>
            </div>

            <div className="space-y-2">
              {Object.entries(themes).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setTheme(key)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-left transition-all ${
                    theme === key
                      ? "border-green-400/40 bg-green-400/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <span
                    className="h-4 w-4 rounded-full"
                    style={{ backgroundColor: value.accent }}
                  />

                  <span className="flex-1 text-sm text-gray-200">
                    {value.name}
                  </span>

                  {theme === key && (
                    <span className="text-xs text-green-400">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/80 text-xl shadow-xl backdrop-blur-xl transition-all hover:border-green-400/40"
        aria-label="Change theme"
      >
        🎨
      </motion.button>
    </div>
  );
}

export default ThemeSwitcher;
