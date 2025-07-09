import { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Animation mixins
export const animationMixin = {
  fadeIn: css`
    animation: ${fadeIn} 0.6s ease forwards;
  `,
  fadeInUp: css`
    animation: ${fadeInUp} 0.6s ease forwards;
  `,
  fadeInDown: css`
    animation: ${fadeInDown} 0.6s ease forwards;
  `,
  scaleIn: css`
    animation: ${scaleIn} 0.3s ease forwards;
  `,
  pulse: css`
    animation: ${pulse} 2s ease-in-out infinite;
  `,
  float: css`
    animation: ${float} 3s ease-in-out infinite;
  `,
};

// Transition mixins
export const transitionMixin = {
  smooth: css`
    transition: all 0.3s ease;
  `,
  fast: css`
    transition: all 0.2s ease;
  `,
  slow: css`
    transition: all 0.5s ease;
  `,
};
