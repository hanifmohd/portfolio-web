import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    companyKey: "Experience.exp1_company",
    roleKey: "Experience.exp1_role",
    descriptionKey: "Experience.exp1_description",
    startDate: "2023-01",
    endDate: null,
    tech: ["Next.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    id: "exp-2",
    companyKey: "Experience.exp2_company",
    roleKey: "Experience.exp2_role",
    descriptionKey: "Experience.exp2_description",
    startDate: "2021-06",
    endDate: "2022-12",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    id: "exp-3",
    companyKey: "Experience.exp3_company",
    roleKey: "Experience.exp3_role",
    descriptionKey: "Experience.exp3_description",
    startDate: "2020-01",
    endDate: "2021-05",
    tech: ["JavaScript", "PHP", "MySQL", "Git"],
  },
];
