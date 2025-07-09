import React, { Suspense, lazy } from "react";
import { GlobalStyles } from "@styles/index";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "@components/ErrorBoundary";
import SEO from "@components/SEO";
import NavigationIndicator from "@components/Navigation/NavigationIndicator";
import {
  AppContainer,
  MainContent,
  LoadingScreen,
  LoadingSpinner,
  BackgroundDecoration,
} from "./App.styles";

// Lazy load components
const Navigation = lazy(() => import("@components/Navigation"));
const Hero = lazy(() => import("@components/Hero"));
const Projects = lazy(() => import("@components/Projects"));
const Skills = lazy(() => import("@components/Skills"));
const About = lazy(() => import("@components/About"));
const BackToTop = lazy(() => import("@components/BackToTop"));

// Loading component
const Loading: React.FC = () => (
  <LoadingScreen>
    <LoadingSpinner>
      <div className="spinner-border text-accent" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </LoadingSpinner>
  </LoadingScreen>
);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <SEO />
        <GlobalStyles />

        <AppContainer>
          <BackgroundDecoration />

          <Suspense fallback={<Loading />}>
            <Navigation />
            <NavigationIndicator />

            <MainContent>
              <Hero />
              <Projects />
              <Skills />
              <About />
            </MainContent>

            <BackToTop />
          </Suspense>
        </AppContainer>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
