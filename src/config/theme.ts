/**
 * Centralized theme configuration
 * Change colors here to update the entire project
 */

export const theme = {
  colors: {
    // Main background
    background: "#3D4451",

    // Text colors
    textPrimary: "#FFFFFF",
    textSecondary: "#94A3B8",
    textMuted: "#CCCCCC",

    // Card backgrounds
    cardBackground: "#454C5C",
    cardHover: "#4F5766",

    // Accent colors
    accentPrimary: "#3D4451",
    accentSecondary: "#525A6B",

    // Border colors
    border: "#525A6B",
  },

  spacing: {
    sectionPadding: "6rem",
    containerMaxWidth: "1280px",
  },

  borderRadius: {
    card: "0.75rem",
    button: "1.5rem",
  },

  typography: {
    fontFamily: {
      sans: "Inter, system-ui, sans-serif",
      mono: "JetBrains Mono, monospace",
    },
    fontSize: {
      hero: "3.5rem",
      h1: "2.5rem",
      h2: "2rem",
      h3: "1.5rem",
      body: "1rem",
      small: "0.875rem",
    },
  },
} as const;

export type Theme = typeof theme;
