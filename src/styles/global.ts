import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  /* Selection */
  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }

  /* Bootstrap Overrides */
  .navbar-toggler:focus {
    box-shadow: none;
  }

  /* Utility Classes */
  .text-accent {
    color: ${({ theme }) => theme.colors.accent} !important;
  }

  .bg-accent {
    background-color: ${({ theme }) => theme.colors.accent} !important;
  }

  .section-padding {
    padding: ${({ theme }) => theme.spacing.xxxl} 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .section-padding {
      padding: ${({ theme }) => theme.spacing.xxl} 0;
    }
  }
`;
