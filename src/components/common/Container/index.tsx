import React from "react";
import { StyledContainer } from "./styles";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, id }) => {
  return (
    <StyledContainer className={className} id={id}>
      {children}
    </StyledContainer>
  );
};

export default Container;
