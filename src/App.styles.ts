import styled, { keyframes } from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 1;
`;

// Loading Screen Styles
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease;
`;

export const LoadingSpinner = styled.div`
  .spinner-border {
    width: 3rem;
    height: 3rem;
    border-width: 0.3rem;
  }

  .text-accent {
    color: ${({ theme }) => theme.colors.accent} !important;
  }
`;

// Background decoration (optional)
export const BackgroundDecoration = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 20% 80%,
      ${({ theme }) => theme.colors.accent}10 0%,
      transparent 50%
    );
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 80% 20%,
      ${({ theme }) => theme.colors.accentAlt}10 0%,
      transparent 50%
    );
    animation: float 25s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(30px, -30px) rotate(120deg);
    }
    66% {
      transform: translate(-20px, 20px) rotate(240deg);
    }
  }
`;
