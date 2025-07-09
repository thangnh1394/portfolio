import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { personal } from "@config/portfolio.config";
import { Container } from "@components/common";
import {
  HeroSection,
  HeroContent,
  HeroGrid,
  TextContent,
  ImageContent,
  AvailabilityBadge,
  PulseDot,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  ProfileImageWrapper,
  ProfileImage,
  ProfileImageDecoration,
  ScrollIndicator,
  SocialLinks,
  SocialLink,
  BackgroundParticles,
} from "./styles";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import { contact } from "@config/portfolio.config";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeroSection id="hero">
      <BackgroundParticles />
      <Container>
        <HeroContent>
          <HeroGrid>
            <TextContent
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {personal.availabilityStatus.available && (
                <motion.div variants={itemVariants}>
                  <AvailabilityBadge>
                    <PulseDot />
                    {personal.availabilityStatus.message}
                  </AvailabilityBadge>
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <HeroTitle>
                  Hi, I'm <span>{personal.name}</span>
                </HeroTitle>
              </motion.div>

              <motion.div variants={itemVariants}>
                <HeroSubtitle>{personal.title}</HeroSubtitle>
              </motion.div>

              <motion.div variants={itemVariants}>
                <HeroDescription>{personal.introduction}</HeroDescription>
              </motion.div>

              <motion.div variants={itemVariants}>
                <SocialLinks>
                  {contact.github && (
                    <SocialLink
                      href={contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </SocialLink>
                  )}
                  {contact.linkedin && (
                    <SocialLink
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </SocialLink>
                  )}
                  {contact.facebook && (
                    <SocialLink
                      href={contact.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </SocialLink>
                  )}
                  {contact.email && (
                    <SocialLink
                      href={`mailto:${contact.email}`}
                      aria-label="Email"
                    >
                      <FaEnvelope />
                    </SocialLink>
                  )}
                </SocialLinks>
              </motion.div>
            </TextContent>

            <ImageContent
              as={motion.div}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <ProfileImageWrapper>
                <ProfileImageDecoration />
                <ProfileImage
                  src={personal.profilePhoto}
                  alt={personal.name}
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${personal.name}&size=400&background=00FF88&color=111111`;
                  }}
                />
              </ProfileImageWrapper>
            </ImageContent>
          </HeroGrid>
        </HeroContent>

        <ScrollIndicator onClick={scrollToProjects}>
          <span>Scroll to explore</span>
          <FaArrowDown />
        </ScrollIndicator>
      </Container>
    </HeroSection>
  );
};

export default Hero;
