import React from "react";
import { TitleWrapper, Title, Subtitle, TitleDecoration } from "./styles";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  decorated?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  decorated = true,
}) => {
  return (
    <TitleWrapper align={align}>
      <Title>
        {title}
        {decorated && <TitleDecoration />}
      </Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleWrapper>
  );
};

export default SectionTitle;
