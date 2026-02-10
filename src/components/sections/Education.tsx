"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import EducationCard from "@/components/ui/EducationCard";
import { educations } from "@/data/education";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function Education() {
  const t = useTranslations("Education");

  return (
    <section id="education" className="bg-secondary/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2">
          {educations.map((edu) => (
            <StaggerItem key={edu.id}>
              <EducationCard education={edu} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
