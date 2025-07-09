import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = styled.div`
  width: 100%;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

export const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.accent : theme.colors.secondary};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.textSecondary};
  border: 2px solid
    ${({ theme, active }) =>
      active ? theme.colors.accent : theme.colors.border};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.accent};
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const NoProjectsMessage = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.body};
`;
