import React from "react";
import { ButtonIcon, StyledButton } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: any;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {icon && iconPosition === "left" && <ButtonIcon>{icon}</ButtonIcon>}
      {children}
      {icon && iconPosition === "right" && <ButtonIcon>{icon}</ButtonIcon>}
    </StyledButton>
  );
};

export default Button;
