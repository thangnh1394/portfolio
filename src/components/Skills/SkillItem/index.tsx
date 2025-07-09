import React from "react";
import { motion } from "framer-motion";
import * as SimpleIcons from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { useAnimatedValue } from "@hooks/index";
import {
  SkillItemWrapper,
  SkillInfo,
  SkillIcon,
  SkillName,
  SkillLevel,
  ProgressBar,
  ProgressFill,
  ProgressText,
} from "./styles";
import { Skill } from "@/types";

interface SkillItemProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
  categoryIndex: number;
}

const SkillItem: React.FC<SkillItemProps> = ({
  skill,
  index,
  isVisible,
  categoryIndex,
}) => {
  const animatedLevel = useAnimatedValue({
    from: 0,
    to: skill.level || 80,
    duration: 1000,
    isActive: isVisible,
  });

  const getSkillIcon = (iconName?: string) => {
    if (!iconName) return <FaCode />;

    const iconKey = `Si${iconName}` as keyof typeof SimpleIcons;
    const IconComponent = SimpleIcons[iconKey];

    return IconComponent ? <IconComponent /> : <FaCode />;
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: categoryIndex * 0.2 + index * 0.1,
      },
    },
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Proficient";
    if (level >= 40) return "Intermediate";
    return "Beginner";
  };

  return (
    <SkillItemWrapper as={motion.div} variants={itemVariants}>
      <SkillInfo>
        <SkillIcon>{getSkillIcon(skill.icon)}</SkillIcon>
        <SkillName>{skill.name}</SkillName>
        <SkillLevel>{getSkillLevelText(animatedLevel)}</SkillLevel>
      </SkillInfo>

      <ProgressBar>
        <ProgressFill
          as={motion.div}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${animatedLevel}%` : 0 }}
          transition={{ duration: 1, delay: categoryIndex * 0.2 + index * 0.1 }}
          level={animatedLevel}
        />
        <ProgressText>{animatedLevel}%</ProgressText>
      </ProgressBar>
    </SkillItemWrapper>
  );
};

export default SkillItem;
