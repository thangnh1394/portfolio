import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

export const CardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const CardImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardImageWrapper}:hover & {
    opacity: 1;
  }
`;

export const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 600;
  cursor: pointer;
  transform: translateY(20px);
  transition: all 0.3s ease;

  ${CardImageWrapper}:hover & {
    transform: translateY(0);
  }
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TechTag = styled.span`
  padding: ${({ theme }) => `4px ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.accent}20;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent}40;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
`;

export const CardActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const CardLink = styled(motion.a)<{ secondary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background-color: ${({ theme, secondary }) =>
    secondary ? "transparent" : theme.colors.accent};
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.accent : theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme, secondary }) =>
      secondary ? theme.colors.accent : "transparent"};
    color: ${({ theme, secondary }) =>
      secondary ? theme.colors.primary : theme.colors.accent};
  }
`;
