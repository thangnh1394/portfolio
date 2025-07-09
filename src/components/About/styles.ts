import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ContactCard = styled(motion.a)<{ accentColor: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.cardBg};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ accentColor }) => accentColor};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ accentColor }) => accentColor}40;

    &::before {
      transform: scaleY(1);
    }
  }
`;

export const ContactIcon = styled.div<{ color: string }>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ color }) => color}20;
  color: ${({ color }) => color};
  border-radius: 12px;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  ${ContactCard}:hover & {
    transform: rotate(-10deg) scale(1.1);
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
`;

export const ContactLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4px;
`;

export const ContactValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
`;

export const ContactActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const SocialLinks = styled.div`
  text-align: center;

  p {
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  > div {
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    justify-content: center;
  }
`;

export const SocialLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.cardBg};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.4rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const AboutDecoration = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 400px;
  pointer-events: none;
  opacity: 0.1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    border: 3px solid ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    transform: translate(50%, -50%);
  }

  &::after {
    content: "";
    position: absolute;
    top: 100px;
    right: 100px;
    width: 200px;
    height: 200px;
    border: 2px solid ${({ theme }) => theme.colors.accentAlt};
    border-radius: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;
