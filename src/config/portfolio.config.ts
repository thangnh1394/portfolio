import type { PortfolioConfig } from "../types";

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Your Name",
    title: "Full Stack Developer",
    introduction:
      "Passionate developer with expertise in modern web technologies. I love creating elegant solutions to complex problems and building user-friendly applications.",
    profilePhoto: "/assets/profile.jpg", // Add your photo to public/assets/
    availabilityStatus: {
      available: true,
      message: "Available for opportunities",
    },
  },

  projects: [
    {
      id: "1",
      name: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      liveLink: "https://example-ecommerce.com",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/assets/projects/ecommerce.jpg",
    },
    {
      id: "2",
      name: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      liveLink: "https://example-taskapp.com",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      image: "/assets/projects/taskapp.jpg",
    },
    {
      id: "3",
      name: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.",
      liveLink: "https://example-weather.com",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      image: "/assets/projects/weather.jpg",
    },
    {
      id: "4",
      name: "Social Media Analytics",
      description:
        "Analytics dashboard for social media metrics with data visualization, trend analysis, and automated reporting.",
      liveLink: "https://example-analytics.com",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "/assets/projects/analytics.jpg",
    },
    {
      id: "5",
      name: "Real Estate Portal",
      description:
        "Full-featured real estate portal with advanced search, virtual tours, and integrated mapping functionality.",
      liveLink: "https://example-realestate.com",
      technologies: ["React", "Next.js", "Prisma", "Google Maps API"],
      image: "/assets/projects/realestate.jpg",
    },
    {
      id: "6",
      name: "Learning Management System",
      description:
        "Online learning platform with video streaming, progress tracking, and interactive course content.",
      liveLink: "https://example-lms.com",
      technologies: ["React", "Node.js", "AWS", "WebRTC"],
      image: "/assets/projects/lms.jpg",
    },
  ],

  skills: {
    frontend: [
      { name: "React", icon: "React", level: 90 },
      { name: "TypeScript", icon: "Typescript", level: 85 },
      { name: "JavaScript", icon: "Javascript", level: 95 },
      { name: "HTML/CSS", icon: "Html5", level: 95 },
      { name: "Next.js", icon: "Nextdotjs", level: 80 },
      { name: "Vue.js", icon: "Vuedotjs", level: 75 },
      { name: "Tailwind CSS", icon: "Tailwindcss", level: 85 },
      { name: "Redux", icon: "Redux", level: 80 },
    ],
    backend: [
      { name: "Node.js", icon: "Nodedotjs", level: 85 },
      { name: "Python", icon: "Python", level: 80 },
      { name: "Express.js", icon: "Express", level: 85 },
      { name: "MongoDB", icon: "Mongodb", level: 80 },
      { name: "PostgreSQL", icon: "Postgresql", level: 75 },
      { name: "GraphQL", icon: "Graphql", level: 70 },
      { name: "Docker", icon: "Docker", level: 75 },
      { name: "AWS", icon: "Amazonaws", level: 70 },
    ],
    tools: [
      { name: "Git", icon: "Git", level: 90 },
      { name: "VS Code", icon: "Visualstudiocode", level: 95 },
      { name: "Figma", icon: "Figma", level: 80 },
      { name: "Postman", icon: "Postman", level: 85 },
      { name: "Jest", icon: "Jest", level: 75 },
      { name: "Webpack", icon: "Webpack", level: 70 },
      { name: "Jira", icon: "Jira", level: 80 },
      { name: "Linux", icon: "Linux", level: 75 },
    ],
  },

  contact: {
    email: "your.email@example.com",
    phone: "+84 123 456 789",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    facebook: "https://facebook.com/yourusername",
    zalo: "0123456789",
  },
};

// Export for easy access
export const { personal, projects, skills, contact } = portfolioConfig;
