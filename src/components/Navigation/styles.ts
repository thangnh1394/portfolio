import styled from "styled-components";

interface NavProps {
  scrolled: boolean;
}

interface MenuProps {
  isOpen: boolean;
}

interface NavLinkProps {
  isActive: boolean;
}

export const Nav = styled.nav<NavProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  background-color: ${({ theme, scrolled }) =>
    scrolled ? theme.colors.overlay : "transparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  transition: ${({ theme }) => theme.transitions.normal};
  z-index: ${({ theme }) => theme.zIndex.navigation};
  box-shadow: ${({ theme, scrolled }) =>
    scrolled ? theme.shadows.medium : "none"};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavBrand = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.h2};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: scale(1.05);
  }
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const NavMenu = styled.ul<MenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 100px ${({ theme }) => theme.spacing.xl}
      ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.md};
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ theme }) => theme.shadows.large};
    z-index: ${({ theme }) => theme.zIndex.navigation - 1};
  }
`;

export const NavItem = styled.li`
  position: relative;
`;

export const NavLink = styled.a<NavLinkProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.accent : theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.body};
  transition: ${({ theme }) => theme.transitions.fast};
  position: relative;
  padding: ${({ theme }) => theme.spacing.xs} 0;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  i {
    font-size: 1.2rem;
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: block;
    }
  }

  span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: ${({ isActive }) => (isActive ? "100%" : "0")};
      height: 2px;
      background-color: ${({ theme }) => theme.colors.accent};
      transition: width 0.3s ease;
    }
  }

  &:hover span::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.h3};
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm} 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.8rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MobileMenuOverlay = styled.div<MenuProps>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: ${({ theme }) => theme.zIndex.navigation - 2};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const ThemeToggle = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  margin-left: ${({ theme }) => theme.spacing.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    transform: rotate(180deg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    top: 30px;
    right: 80px;
  }
`;
