import { createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material";

// Centralized color scheme - change colors here to update entire project
export const colors = {
  primary: {
    main: "#4A5568",
    light: "#5A6B7F",
    dark: "#2D3748",
  },
  secondary: {
    main: "#E2E8F0",
    light: "#F7FAFC",
    dark: "#CBD5E0",
  },
  background: {
    default: "#3A4556",
    paper: "#4A5568",
    gradient: "linear-gradient(180deg, #3A4556 0%, #2D3748 100%)",
    heroGradient:
      "linear-gradient(90deg, rgba(226, 232, 240, 0.1) 0%, rgba(226, 232, 240, 0.8) 50%, rgba(226, 232, 240, 0.1) 100%)",
  },
  text: {
    primary: "#F7FAFC",
    secondary: "#CBD5E0",
    muted: "#A0AEC0",
  },
  accent: {
    main: "#63B3ED",
    hover: "#4299E1",
  },
};

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
    },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 24,
          padding: "10px 24px",
          fontWeight: 500,
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
