import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  ModalImage,
  ModalTitle,
  ModalDescription,
  TechSection,
  TechGrid,
  TechItem,
  ModalActions,
  ActionButton,
} from "./styles";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 },
    },
  };

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        as={motion.div}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <ModalImage
            src={
              project.image ||
              `https://via.placeholder.com/800x500/333333/00FF88?text=${encodeURIComponent(
                project.name
              )}`
            }
            alt={project.name}
          />

          <ModalTitle>{project.name}</ModalTitle>
          <ModalDescription>{project.description}</ModalDescription>

          {project.technologies && (
            <TechSection>
              <h4>Technologies Used</h4>
              <TechGrid>
                {project.technologies.map((tech, idx) => (
                  <TechItem key={idx}>{tech}</TechItem>
                ))}
              </TechGrid>
            </TechSection>
          )}

          <ModalActions>
            <ActionButton
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              primary
            >
              <FaExternalLinkAlt /> View Live Demo
            </ActionButton>
            {project.githubLink && (
              <ActionButton
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> View Source Code
              </ActionButton>
            )}
          </ModalActions>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
