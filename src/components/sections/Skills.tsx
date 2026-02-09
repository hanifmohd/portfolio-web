"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillCard from "@/components/ui/SkillCard";
import { skillCategories } from "@/data/skills";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="bg-secondary/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <StaggerItem key={category.categoryKey}>
              <SkillCard category={category} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
