import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#111111",
    secondary: "#333333",
    accent: "#00FF88",
    accentAlt: "#00ABE4",
    textPrimary: "#FFFFFF",
    textSecondary: "#CCCCCC",
    overlay: "rgba(17, 17, 17, 0.8)",
    cardBg: "rgba(51, 51, 51, 0.5)",
    border: "rgba(255, 255, 255, 0.1)",
  },
  fonts: {
    heading: "'Inter', 'Helvetica Neue', sans-serif",
    body: "'Inter', 'Helvetica Neue', sans-serif",
  },
  fontSizes: {
    hero: "clamp(2.5rem, 5vw, 4rem)",
    h1: "clamp(2rem, 4vw, 3rem)",
    h2: "clamp(1.5rem, 3vw, 2rem)",
    h3: "clamp(1.25rem, 2.5vw, 1.5rem)",
    body: "clamp(1rem, 2vw, 1.125rem)",
    small: "clamp(0.875rem, 1.5vw, 1rem)",
  },
  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "48px",
    xxl: "64px",
    xxxl: "96px",
  },
  transitions: {
    fast: "0.2s ease",
    normal: "0.3s ease",
    slow: "0.5s ease",
  },
  shadows: {
    small: "0 2px 4px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 8px rgba(0, 0, 0, 0.2)",
    large: "0 8px 16px rgba(0, 0, 0, 0.3)",
    glow: "0 0 20px rgba(0, 255, 136, 0.3)",
  },
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1200px",
  },
  zIndex: {
    navigation: 1000,
    modal: 2000,
    backToTop: 900,
  },
};
