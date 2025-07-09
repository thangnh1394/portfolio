import styled from "styled-components";
import { fadeInUp } from "@styles/animations";

interface TitleWrapperProps {
  align: "left" | "center" | "right";
}

export const TitleWrapper = styled.div<TitleWrapperProps>`
  text-align: ${({ align }) => align};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  position: relative;
  ${fadeInUp}
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.h1};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  display: inline-block;
`;

export const TitleDecoration = styled.span`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 2px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -80px;
    transform: translateY(-50%);
    width: 60px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -80px;
    transform: translateY(-50%);
    width: 60px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.5;
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: ${({ theme }) => theme.spacing.md};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;
