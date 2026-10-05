import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  green: {
    name: "Matrix Green",
    accent: "#4ade80",
  },
  blue: {
    name: "Cyber Blue",
    accent: "#38bdf8",
  },
  purple: {
    name: "Neon Purple",
    accent: "#a78bfa",
  },
  orange: {
    name: "Cyber Orange",
    accent: "#fb923c",
  },
  light: {
    name: "Minimal Light",
    accent: "#16a34a",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "green";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.setProperty(
      "--theme-accent",
      themes[theme].accent
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
