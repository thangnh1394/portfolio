import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

export const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const LogoLoader = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 30px;
  animation: ${pulse} 2s ease-in-out infinite;

  span {
    font-size: 4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 2px;
  overflow: hidden;
`;

export const LoadingProgress = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.accent};
  transition: width 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 30px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3));
    animation: shimmer 1s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(30px);
    }
  }
`;

export const LoadingText = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const LoadingPercentage = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;
