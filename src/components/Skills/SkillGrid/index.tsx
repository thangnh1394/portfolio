import React from "react";
import { motion } from "framer-motion";
import * as SimpleIcons from "react-icons/si";
import { FaCode } from "react-icons/fa";
import {
  GridContainer,
  SkillCard,
  SkillIconLarge,
  SkillNameLarge,
  SkillLevelDots,
} from "./styles";
import { Skill } from "@/types";

interface SkillGridProps {
  skills: Skill[];
  isVisible: boolean;
}

const SkillGrid: React.FC<SkillGridProps> = ({ skills, isVisible }) => {
  const getSkillIcon = (iconName?: string) => {
    if (!iconName) return <FaCode />;

    const iconKey = `Si${iconName}` as keyof typeof SimpleIcons;
    const IconComponent = SimpleIcons[iconKey];

    return IconComponent ? <IconComponent /> : <FaCode />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <GridContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          as={motion.div}
          variants={itemVariants}
          whileHover={{
            y: -5,
            boxShadow: "0 10px 30px rgba(0, 255, 136, 0.3)",
          }}
        >
          <SkillIconLarge>{getSkillIcon(skill.icon)}</SkillIconLarge>
          <SkillNameLarge>{skill.name}</SkillNameLarge>
          <SkillLevelDots>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.round((skill.level || 80) / 20) ? "active" : ""
                }
              />
            ))}
          </SkillLevelDots>
        </SkillCard>
      ))}
    </GridContainer>
  );
};

export default SkillGrid;
