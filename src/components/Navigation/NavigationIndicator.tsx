import React from "react";
import styled from "styled-components";
import { useScrollSpy } from "@hooks/index";
import { navigationItems } from "@config/navigation.config";

const IndicatorContainer = styled.div`
  position: fixed;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;

const Dot = styled.a<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.accent : theme.colors.textSecondary};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.3)};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textPrimary};
    padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
    border-radius: 4px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
    right: 25px;
  }
`;

const NavigationIndicator: React.FC = () => {
  const activeSection = useScrollSpy(navigationItems.map((item) => item.id));

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <IndicatorContainer>
      {navigationItems.map((item) => (
        <Dot
          key={item.id}
          href={`#${item.id}`}
          isActive={activeSection === item.id}
          data-label={item.label}
          onClick={(e) => {
            e.preventDefault();
            handleClick(item.id);
          }}
        />
      ))}
    </IndicatorContainer>
  );
};

export default NavigationIndicator;
