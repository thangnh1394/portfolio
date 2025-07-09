import styled from "styled-components";

interface StyledSectionProps {
  dark?: boolean;
  fullHeight?: boolean;
}

export const StyledSection = styled.section<StyledSectionProps>`
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.secondary : theme.colors.primary};
  min-height: ${({ fullHeight }) => (fullHeight ? "100vh" : "auto")};
  display: ${({ fullHeight }) => (fullHeight ? "flex" : "block")};
  align-items: ${({ fullHeight }) => (fullHeight ? "center" : "stretch")};
  position: relative;
  overflow: hidden;

  &:nth-child(even) {
    background-color: ${({ theme, dark }) =>
      dark ? theme.colors.primary : "transparent"};
  }
`;
