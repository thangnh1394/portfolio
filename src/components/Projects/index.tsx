import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Section, SectionTitle } from "@components/common";
import { projects } from "@config/portfolio.config";
import ProjectCard from "./ProjectCard";
import {
  ProjectsContainer,
  FilterContainer,
  FilterButton,
  ProjectsGrid,
  NoProjectsMessage,
} from "./styles";

const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Extract unique technologies from all projects
  const technologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      project.technologies?.forEach((tech) => techSet.add(tech));
    });
    return ["all", ...Array.from(techSet).sort()];
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "all") {
      return projects;
    }
    return projects.filter((project) =>
      project.technologies?.includes(selectedFilter)
    );
  }, [selectedFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <Section id="projects" dark>
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A collection of my recent work and side projects"
        />

        <ProjectsContainer>
          {technologies.length > 1 && (
            <FilterContainer>
              {technologies.map((tech) => (
                <FilterButton
                  key={tech}
                  active={selectedFilter === tech}
                  onClick={() => setSelectedFilter(tech)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </FilterButton>
              ))}
            </FilterContainer>
          )}

          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <ProjectsGrid
                as={motion.div}
                key={selectedFilter}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </ProjectsGrid>
            ) : (
              <NoProjectsMessage
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                No projects found with {selectedFilter} technology.
              </NoProjectsMessage>
            )}
          </AnimatePresence>
        </ProjectsContainer>
      </Container>
    </Section>
  );
};

export default Projects;
