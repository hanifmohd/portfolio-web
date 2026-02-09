import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    titleKey: "Projects.project1_title",
    descriptionKey: "Projects.project1_description",
    image: "/images/projects/project-1.jpg",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    githubUrl: "https://github.com/yourusername/project-1",
    liveUrl: "https://project-1.vercel.app",
    featured: true,
  },
  {
    id: "project-2",
    titleKey: "Projects.project2_title",
    descriptionKey: "Projects.project2_description",
    image: "/images/projects/project-2.jpg",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project-2",
    liveUrl: "https://project-2.vercel.app",
    featured: true,
  },
  {
    id: "project-3",
    titleKey: "Projects.project3_title",
    descriptionKey: "Projects.project3_description",
    image: "/images/projects/project-3.jpg",
    tech: ["Next.js", "next-intl", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/project-3",
    featured: false,
  },
];
