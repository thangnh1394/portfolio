import React from "react";
import { motion } from "framer-motion";
import { Container, Section, SectionTitle } from "@components/common";
import { skills } from "@config/portfolio.config";
import { useIntersectionObserver } from "@hooks/index";
import { SkillsContainer, SkillsGrid, SkillsBackground } from "./styles";
import SkillCategory from "./SkillCategory";

const Skills: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Section id="skills">
      <SkillsBackground />
      <Container>
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        <SkillsContainer ref={ref}>
          <SkillsGrid
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {Object.entries(skills).map(([category, skillList], index) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skillList}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </Container>
    </Section>
  );
};

export default Skills;
