import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaEye } from "react-icons/fa";
import { Project } from "@/types";
import {
  Card,
  CardImageWrapper,
  CardImage,
  CardImageOverlay,
  CardContent,
  CardTitle,
  CardDescription,
  TechStack,
  TechTag,
  CardActions,
  CardLink,
  ViewButton,
} from "./styles";
import { ProjectModal } from "../ProjectModal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const placeholderImage = `https://via.placeholder.com/600x400/333333/00FF88?text=${encodeURIComponent(
    project.name
  )}`;

  return (
    <>
      <Card
        as={motion.div}
        variants={cardVariants}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <CardImageWrapper onClick={() => setIsModalOpen(true)}>
          <CardImage
            src={
              imageError ? placeholderImage : project.image || placeholderImage
            }
            alt={project.name}
            onError={handleImageError}
          />
          <CardImageOverlay>
            <ViewButton>
              <FaEye /> View Details
            </ViewButton>
          </CardImageOverlay>
        </CardImageWrapper>

        <CardContent>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>

          {project.technologies && (
            <TechStack>
              {project.technologies.map((tech, idx) => (
                <TechTag key={idx}>{tech}</TechTag>
              ))}
            </TechStack>
          )}

          <CardActions>
            <CardLink
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt /> Live Demo
            </CardLink>
            {project.githubLink && (
              <CardLink
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                secondary
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> Source Code
              </CardLink>
            )}
          </CardActions>
        </CardContent>
      </Card>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProjectModal
            project={project}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
