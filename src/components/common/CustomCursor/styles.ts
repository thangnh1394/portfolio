import styled from "styled-components";

export const CursorDot = styled.div`
  position: fixed;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: difference;
`;

export const CursorOutline = styled.div`
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9997;
  mix-blend-mode: difference;
`;
