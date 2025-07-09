import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useScrollSpy } from "@hooks/index";
import { useTheme } from "../../contexts/ThemeContext";
import { navigationItems } from "@config/navigation.config";
import { personal } from "@config/portfolio.config";
import {
  Nav,
  NavContainer,
  NavBrand,
  NavMenu,
  NavItem,
  NavLink,
  MobileIcon,
  MobileMenuOverlay,
  ThemeToggle,
  NavActions,
} from "./styles";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(navigationItems.map((item) => item.id));
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        <NavContainer className="container">
          <NavBrand
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
          >
            {personal.name.split(" ")[0]}
          </NavBrand>

          <NavActions>
            <NavMenu isOpen={isOpen}>
              {navigationItems.map((item) => (
                <NavItem key={item.id}>
                  <NavLink
                    href={`#${item.id}`}
                    isActive={activeSection === item.id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.icon && <i className={item.icon} />}
                    <span>{item.label}</span>
                  </NavLink>
                </NavItem>
              ))}
            </NavMenu>

            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </ThemeToggle>

            <MobileIcon onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </MobileIcon>
          </NavActions>
        </NavContainer>
      </Nav>

      {/* Mobile menu overlay */}
      <MobileMenuOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
    </>
  );
};

export default Navigation;
