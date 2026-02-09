"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  const t = useTranslations("Experience");

  return (
    <section id="experience" className="bg-secondary/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />

        <div>
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
