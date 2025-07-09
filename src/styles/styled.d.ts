import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      accentAlt: string;
      textPrimary: string;
      textSecondary: string;
      overlay: string;
      cardBg: string;
      border: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    fontSizes: {
      hero: string;
      h1: string;
      h2: string;
      h3: string;
      body: string;
      small: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
      glow: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      wide: string;
    };
    zIndex: {
      navigation: number;
      modal: number;
      backToTop: number;
    };
  }
}
