import React from "react";
import { motion } from "framer-motion";
import * as SimpleIcons from "react-icons/si";
import { FaCode } from "react-icons/fa";
import SkillItem from "../SkillItem";
import {
  CategoryCard,
  CategoryHeader,
  CategoryTitle,
  CategoryIcon,
  SkillsList,
} from "./styles";
import { Skill } from "@/types";

interface SkillCategoryProps {
  category: string;
  skills: Skill[];
  index: number;
  isVisible: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  category,
  skills,
  index,
  isVisible,
}) => {
  const getCategoryIcon = () => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <SimpleIcons.SiReact />;
      case "backend":
        return <SimpleIcons.SiNodedotjs />;
      case "tools":
        return <SimpleIcons.SiGit />;
      default:
        return <FaCode />;
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  const formatCategoryName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <CategoryCard
      as={motion.div}
      variants={cardVariants}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 255, 136, 0.2)",
      }}
    >
      <CategoryHeader>
        <CategoryIcon>{getCategoryIcon()}</CategoryIcon>
        <CategoryTitle>{formatCategoryName(category)}</CategoryTitle>
      </CategoryHeader>

      <SkillsList>
        {skills.map((skill, skillIndex) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            index={skillIndex}
            isVisible={isVisible}
            categoryIndex={index}
          />
        ))}
      </SkillsList>
    </CategoryCard>
  );
};

export default SkillCategory;
