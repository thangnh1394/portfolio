import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PreloaderContainer,
  LoaderContent,
  LogoLoader,
  LoadingBar,
  LoadingProgress,
  LoadingText,
  LoadingPercentage,
} from "./styles";

interface PreloaderProps {
  onLoadComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: { duration: 0 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: [0.8, 1.1, 1],
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <PreloaderContainer
          as={motion.div}
          variants={containerVariants}
          initial="visible"
          exit="exit"
        >
          <LoaderContent>
            <LogoLoader
              as={motion.div}
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <span>P</span>
            </LogoLoader>

            <LoadingBar>
              <LoadingProgress
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </LoadingBar>

            <LoadingText>
              <span>Loading Portfolio</span>
              <LoadingPercentage>{Math.round(progress)}%</LoadingPercentage>
            </LoadingText>
          </LoaderContent>
        </PreloaderContainer>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
