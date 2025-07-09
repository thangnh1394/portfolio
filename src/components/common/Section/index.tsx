import React from "react";
import { StyledSection } from "./styles";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  dark = false,
  fullHeight = false,
}) => {
  return (
    <StyledSection
      id={id}
      className={`${className} section-padding`}
      dark={dark}
      fullHeight={fullHeight}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
