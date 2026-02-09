import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    categoryKey: "Skills.frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    categoryKey: "Skills.backend",
    skills: [
      { name: "Node.js" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "REST API" },
      { name: "GraphQL" },
    ],
  },
  {
    categoryKey: "Skills.tools",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Vercel" },
      { name: "CI/CD" },
      { name: "Linux" },
    ],
  },
  {
    categoryKey: "Skills.other",
    skills: [
      { name: "Figma" },
      { name: "Agile/Scrum" },
      { name: "Testing" },
      { name: "SEO" },
    ],
  },
];
