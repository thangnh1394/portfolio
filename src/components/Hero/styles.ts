import styled, { keyframes } from "styled-components";

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary}40 100%)`};
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const TextContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 2;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 1;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

// Availability Badge
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

export const AvailabilityBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.accent}20;
  border: 1px solid ${({ theme }) => theme.colors.accent}40;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const PulseDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  animation: ${pulse} 2s ease-in-out infinite;
`;

// Typography
export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  span {
    color: ${({ theme }) => theme.colors.accent};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 4px;
      background: ${({ theme }) =>
        `linear-gradient(90deg, ${theme.colors.accent} 0%, ${theme.colors.accentAlt} 100%)`};
      border-radius: 2px;
    }
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

// Profile Image
export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  border: 4px solid ${({ theme }) => theme.colors.accent};
`;

const float = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  33% {
    transform: translate(30px, -30px) rotate(120deg);
  }
  66% {
    transform: translate(-20px, 20px) rotate(240deg);
  }
`;

export const ProfileImageDecoration = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 2px dashed ${({ theme }) => theme.colors.accent}40;
  border-radius: 50%;
  animation: ${float} 15s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid ${({ theme }) => theme.colors.accent}20;
    border-radius: 50%;
  }
`;

// Social Links
export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.4rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

// Scroll Indicator
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
`;

export const ScrollIndicator = styled.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  animation: ${bounce} 2s ease-in-out infinite;

  span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    opacity: 0.7;
  }

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

// Background Particles (optional)
const particle = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(720deg);
    opacity: 0;
  }
`;

export const BackgroundParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => `
        50px 50px ${theme.colors.accent},
        100px 80px ${theme.colors.accent},
        140px 120px ${theme.colors.accent},
        200px 20px ${theme.colors.accent},
        250px 160px ${theme.colors.accent}
      `};
    animation: ${particle} 15s linear infinite;
  }

  &::after {
    animation-delay: 7s;
    left: 50%;
  }
`;
