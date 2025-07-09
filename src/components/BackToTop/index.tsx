import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUpShort } from "react-icons/bs";
import { useScrollToTop } from "@hooks/index";
import styled from "styled-components";

const MinimalButton = styled(motion.button)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.8rem;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.backToTop};
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.accent}50;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
`;

const MinimalBackToTop: React.FC = () => {
  const { isVisible, scrollToTop } = useScrollToTop(400);

  return (
    <AnimatePresence>
      {isVisible && (
        <MinimalButton
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <BsArrowUpShort />
        </MinimalButton>
      )}
    </AnimatePresence>
  );
};

export default MinimalBackToTop;
