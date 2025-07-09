import styled from "styled-components";

export const CategoryCard = styled.div`
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.cardBg} 0%, ${theme.colors.secondary}50 100%)`};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.xl};
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent}50;
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const CategoryIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.accent}20;
  border: 2px solid ${({ theme }) => theme.colors.accent}40;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
`;

export const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.h3};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;
