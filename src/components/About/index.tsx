import React from "react";
import { motion } from "framer-motion";
import { Container, Section, SectionTitle, Button } from "@components/common";
import { contact } from "@config/portfolio.config";
import { useIntersectionObserver } from "@hooks/index";
import {
  AboutContainer,
  AboutContent,
  ContactGrid,
  ContactCard,
  ContactIcon,
  ContactInfo,
  ContactLabel,
  ContactValue,
  ContactActions,
  SocialLinks,
  SocialLink,
  AboutDecoration,
} from "./styles";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaComments,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import ContactForm from "./ContactForm";

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: "#EA4335",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone}`,
      color: "#34A853",
    },
    {
      icon: <SiZalo />,
      label: "Zalo",
      value: contact.zalo,
      href: `https://zalo.me/${contact.zalo}`,
      color: "#0068FF",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Vietnam",
      href: "#",
      color: "#FBBC04",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: contact.github,
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: contact.linkedin,
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook />,
      href: contact.facebook,
      label: "Facebook",
    },
  ].filter((link) => link.href);

  return (
    <Section id="about" dark>
      <AboutDecoration />
      <Container>
        <SectionTitle
          title="Let's Connect"
          subtitle="I'm always interested in hearing about new projects and opportunities"
        />

        <AboutContainer ref={ref}>
          <AboutContent
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <ContactGrid>
              {contactMethods.map((method, index) => (
                <ContactCard
                  key={index}
                  as={motion.div}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 10px 30px ${method.color}30`,
                  }}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  accentColor={method.color}
                >
                  <ContactIcon color={method.color}>{method.icon}</ContactIcon>
                  <ContactInfo>
                    <ContactLabel>{method.label}</ContactLabel>
                    <ContactValue>{method.value}</ContactValue>
                  </ContactInfo>
                </ContactCard>
              ))}
            </ContactGrid>

            <motion.div variants={itemVariants}>
              <ContactActions>
                <Button
                  size="large"
                  icon={<FaComments />}
                  onClick={() =>
                    (window.location.href = `mailto:${contact.email}`)
                  }
                >
                  Start a Conversation
                </Button>
                <Button
                  size="large"
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf"; // Add your resume to public folder
                    link.download = "Resume.pdf";
                    link.click();
                  }}
                >
                  Download Resume
                </Button>
              </ContactActions>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks>
                <p>Or find me on social media</p>
                <div>
                  {socialLinks.map((social, index) => (
                    <SocialLink
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </SocialLink>
                  ))}
                </div>
              </SocialLinks>
            </motion.div>

            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </AboutContent>
        </AboutContainer>
      </Container>
    </Section>
  );
};

export default About;
