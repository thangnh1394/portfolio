import React from "react";
import { ContentWrapper, LayoutContainer } from "./styles";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentWrapper>{children}</ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
