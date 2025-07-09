import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const ModalHeader = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 10;
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    transform: rotate(90deg);
  }
`;

export const ModalBody = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.xl};
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ModalDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const TechSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const TechItem = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background-color: ${({ theme }) => theme.colors.accent}20;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.accent}40;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.a<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.accent : "transparent"};
  color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 600;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background-color: ${({ theme, primary }) =>
      primary ? "transparent" : theme.colors.accent};
    color: ${({ theme, primary }) =>
      primary ? theme.colors.accent : theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;
