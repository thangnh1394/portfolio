import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme as darkTheme } from "@styles/theme";
import { useLocalStorage } from "@hooks/index";

// Light theme variant
const lightTheme = {
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    primary: "#FFFFFF",
    secondary: "#F8F8F9",
    accent: "#00AB54",
    accentAlt: "#0077BE",
    textPrimary: "#111111",
    textSecondary: "#666666",
    overlay: "rgba(255, 255, 255, 0.9)",
    cardBg: "rgba(248, 248, 249, 0.8)",
    border: "rgba(0, 0, 0, 0.1)",
  },
};

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  // Prevent flash of unstyled content
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
