import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-5px);

    svg {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const SkillIconLarge = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.3s ease;
`;

export const SkillNameLarge = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const SkillLevelDots = styled.div`
  display: flex;
  gap: 4px;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.border};
    transition: all 0.3s ease;

    &.active {
      background: ${({ theme }) => theme.colors.accent};
    }
  }
`;
