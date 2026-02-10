"use client";

import { motion } from "motion/react";
import { SkillCategory } from "@/types";
import { useTranslations } from "next-intl";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  const t = useTranslations();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <h3 className="mb-4 text-lg font-semibold text-card-foreground">
        {t(category.categoryKey)}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
          >
            {t(skill.name)}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
