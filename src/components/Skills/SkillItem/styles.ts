import styled from "styled-components";

export const SkillItemWrapper = styled.div`
  width: 100%;
`;

export const SkillInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const SkillIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.2rem;
`;

export const SkillName = styled.span`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SkillLevel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 400;
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ level: number }>`
  height: 100%;
  background: ${({ theme, level }) => {
    if (level >= 90) return theme.colors.accent;
    if (level >= 70) return theme.colors.accentAlt;
    if (level >= 50) return "#FFA500";
    return "#FF6B6B";
  }};
  border-radius: 4px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

export const ProgressText = styled.span`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;
