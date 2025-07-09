export interface NavItem {
  id: string;
  label: string;
  icon?: string;
}

export const navigationItems: NavItem[] = [
  {
    id: "hero",
    label: "Home",
    icon: "bi-house",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "bi-code-slash",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "bi-gear",
  },
  {
    id: "about",
    label: "About",
    icon: "bi-person",
  },
];
