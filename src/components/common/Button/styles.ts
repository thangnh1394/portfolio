import styled, { css } from "styled-components";

interface StyledButtonProps {
  variant: "primary" | "secondary" | "outline";
  size: "small" | "medium" | "large";
  fullWidth: boolean;
}

const sizeStyles = {
  small: css`
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    font-size: ${({ theme }) => theme.fontSizes.small};
  `,
  medium: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.fontSizes.body};
  `,
  large: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.fontSizes.h3};
  `,
};

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.accent};

    &:hover {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.accent};
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.accent};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  text-decoration: none;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size }) => sizeStyles[size]}
  ${({ variant }) => variantStyles[variant]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      transform: translate(-50%, -50%);
      animation: ripple 0.6s ease-out;
    }
  }

  @keyframes ripple {
    to {
      width: 200%;
      height: 200%;
      opacity: 0;
    }
  }
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
