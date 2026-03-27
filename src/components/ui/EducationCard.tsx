"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Education } from "@/types";
import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
  const t = useTranslations();

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <GraduationCap size={24} className="text-primary" />
        </div>
        <span className="rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
          {education.year ?? t("Education.ongoing")}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-card-foreground">
        {t(education.qualificationKey)}
      </h3>
      <p className="text-sm font-medium text-primary">
        {t(education.institutionKey)}
      </p>
    </motion.div>
  );
}
