import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = {
  // =========================
  // DARK THEMES
  // =========================

  green: {
    name: "Matrix Green",
    accent: "#4ade80",
    accentStrong: "#22c55e",
    background: "#050505",
    surface: "#0a0a0a",
    text: "#ffffff",
    muted: "#9ca3af",
    border: "#4ade80",
  },

  blue: {
    name: "Cyber Blue",
    accent: "#38bdf8",
    accentStrong: "#0ea5e9",
    background: "#030712",
    surface: "#07111f",
    text: "#ffffff",
    muted: "#94a3b8",
    border: "#38bdf8",
  },

  purple: {
    name: "Neon Purple",
    accent: "#a78bfa",
    accentStrong: "#8b5cf6",
    background: "#08050f",
    surface: "#100b1c",
    text: "#ffffff",
    muted: "#a1a1aa",
    border: "#a78bfa",
  },

  orange: {
    name: "Cyber Orange",
    accent: "#fb923c",
    accentStrong: "#f97316",
    background: "#0a0704",
    surface: "#15100b",
    text: "#ffffff",
    muted: "#a8a29e",
    border: "#fb923c",
  },

  red: {
    name: "Cyber Red",
    accent: "#f87171",
    accentStrong: "#ef4444",
    background: "#0b0404",
    surface: "#160808",
    text: "#ffffff",
    muted: "#a1a1aa",
    border: "#f87171",
  },

  pink: {
    name: "Neon Pink",
    accent: "#f472b6",
    accentStrong: "#ec4899",
    background: "#0d050b",
    surface: "#180a14",
    text: "#ffffff",
    muted: "#a1a1aa",
    border: "#f472b6",
  },

  cyan: {
    name: "Electric Cyan",
    accent: "#22d3ee",
    accentStrong: "#06b6d4",
    background: "#031012",
    surface: "#071a1d",
    text: "#ffffff",
    muted: "#94a3b8",
    border: "#22d3ee",
  },

  yellow: {
    name: "Electric Yellow",
    accent: "#facc15",
    accentStrong: "#eab308",
    background: "#0b0a03",
    surface: "#171505",
    text: "#ffffff",
    muted: "#a3a3a3",
    border: "#facc15",
  },

  emerald: {
    name: "Emerald",
    accent: "#34d399",
    accentStrong: "#10b981",
    background: "#03100b",
    surface: "#071a12",
    text: "#ffffff",
    muted: "#94a3a8",
    border: "#34d399",
  },

  lime: {
    name: "Lime",
    accent: "#a3e635",
    accentStrong: "#84cc16",
    background: "#080c03",
    surface: "#111806",
    text: "#ffffff",
    muted: "#a3a3a3",
    border: "#a3e635",
  },

  violet: {
    name: "Deep Violet",
    accent: "#c084fc",
    accentStrong: "#a855f7",
    background: "#09040f",
    surface: "#15091d",
    text: "#ffffff",
    muted: "#a1a1aa",
    border: "#c084fc",
  },

  indigo: {
    name: "Midnight Indigo",
    accent: "#818cf8",
    accentStrong: "#6366f1",
    background: "#04050f",
    surface: "#0a0d1c",
    text: "#ffffff",
    muted: "#94a3b8",
    border: "#818cf8",
  },

  ocean: {
    name: "Deep Ocean",
    accent: "#60a5fa",
    accentStrong: "#3b82f6",
    background: "#020b14",
    surface: "#061522",
    text: "#ffffff",
    muted: "#94a3b8",
    border: "#60a5fa",
  },

  arctic: {
    name: "Arctic",
    accent: "#67e8f9",
    accentStrong: "#22d3ee",
    background: "#061016",
    surface: "#0b1c24",
    text: "#f8fafc",
    muted: "#a5b4fc",
    border: "#67e8f9",
  },

  synthwave: {
    name: "Synthwave",
    accent: "#e879f9",
    accentStrong: "#d946ef",
    background: "#0b0310",
    surface: "#17061d",
    text: "#ffffff",
    muted: "#a78bfa",
    border: "#e879f9",
  },

  vaporwave: {
    name: "Vaporwave",
    accent: "#2dd4bf",
    accentStrong: "#14b8a6",
    background: "#08051a",
    surface: "#110c2b",
    text: "#fdf4ff",
    muted: "#c4b5fd",
    border: "#2dd4bf",
  },

  galaxy: {
    name: "Galaxy",
    accent: "#818cf8",
    accentStrong: "#4f46e5",
    background: "#020617",
    surface: "#0b1128",
    text: "#ffffff",
    muted: "#94a3b8",
    border: "#818cf8",
  },

  fire: {
    name: "Inferno",
    accent: "#fb7185",
    accentStrong: "#f43f5e",
    background: "#0d0402",
    surface: "#1a0805",
    text: "#ffffff",
    muted: "#a8a29e",
    border: "#fb7185",
  },

  black: {
    name: "Pure Black",
    accent: "#ffffff",
    accentStrong: "#e5e5e5",
    background: "#000000",
    surface: "#080808",
    text: "#ffffff",
    muted: "#a3a3a3",
    border: "#ffffff",
  },

  // =========================
  // LIGHT THEMES
  // =========================

  white: {
    name: "Pure White",
    accent: "#111827",
    accentStrong: "#000000",
    background: "#ffffff",
    surface: "#f8fafc",
    text: "#0f172a",
    muted: "#64748b",
    border: "#111827",
  },

  minimal: {
    name: "Minimal Light",
    accent: "#16a34a",
    accentStrong: "#15803d",
    background: "#f8fafc",
    surface: "#ffffff",
    text: "#0f172a",
    muted: "#64748b",
    border: "#16a34a",
  },

  arcticLight: {
    name: "Arctic Light",
    accent: "#0284c7",
    accentStrong: "#0369a1",
    background: "#f0f9ff",
    surface: "#ffffff",
    text: "#0c4a6e",
    muted: "#64748b",
    border: "#0284c7",
  },

  softGray: {
    name: "Soft Gray",
    accent: "#475569",
    accentStrong: "#334155",
    background: "#f1f5f9",
    surface: "#ffffff",
    text: "#0f172a",
    muted: "#64748b",
    border: "#475569",
  },

  paper: {
    name: "Paper",
    accent: "#92400e",
    accentStrong: "#78350f",
    background: "#faf7f0",
    surface: "#fffdf8",
    text: "#292524",
    muted: "#78716c",
    border: "#92400e",
  },

  mintLight: {
    name: "Mint Light",
    accent: "#059669",
    accentStrong: "#047857",
    background: "#ecfdf5",
    surface: "#ffffff",
    text: "#064e3b",
    muted: "#64748b",
    border: "#059669",
  },

  skyLight: {
    name: "Sky Light",
    accent: "#2563eb",
    accentStrong: "#1d4ed8",
    background: "#eff6ff",
    surface: "#ffffff",
    text: "#172554",
    muted: "#64748b",
    border: "#2563eb",
  },

  lavenderLight: {
    name: "Lavender Light",
    accent: "#7c3aed",
    accentStrong: "#6d28d9",
    background: "#f5f3ff",
    surface: "#ffffff",
    text: "#2e1065",
    muted: "#6b7280",
    border: "#7c3aed",
  },

  roseLight: {
    name: "Rose Light",
    accent: "#e11d48",
    accentStrong: "#be123c",
    background: "#fff1f2",
    surface: "#ffffff",
    text: "#4c0519",
    muted: "#6b7280",
    border: "#e11d48",
  },

  monochrome: {
    name: "Monochrome",
    accent: "#18181b",
    accentStrong: "#000000",
    background: "#f4f4f5",
    surface: "#ffffff",
    text: "#18181b",
    muted: "#71717a",
    border: "#18181b",
  },
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "green";
  });

  useEffect(() => {
    const selectedTheme = themes[theme] || themes.green;

    localStorage.setItem("portfolio-theme", theme);

    const root = document.documentElement;

    root.dataset.theme = theme;

    root.style.setProperty("--theme-accent", selectedTheme.accent);
    root.style.setProperty(
      "--theme-accent-strong",
      selectedTheme.accentStrong
    );
    root.style.setProperty("--theme-background", selectedTheme.background);
    root.style.setProperty("--theme-surface", selectedTheme.surface);
    root.style.setProperty("--theme-text", selectedTheme.text);
    root.style.setProperty("--theme-muted", selectedTheme.muted);
    root.style.setProperty("--theme-border", selectedTheme.border);
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
