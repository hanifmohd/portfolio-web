"use client";

import { useTranslations } from "next-intl";
import { Experience } from "@/types";
import TechBadge from "./TechBadge";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const t = useTranslations();

  return (
    <FadeInOnScroll
      direction={index % 2 === 0 ? "left" : "right"}
      delay={index * 0.1}
    >
      <div className="relative pl-8 pb-10 last:pb-0">
        {/* Timeline line */}
        <div className="absolute left-[11px] top-2 h-full w-px bg-border last:hidden" />

        {/* Timeline dot */}
        <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-primary bg-background" />

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-card-foreground">
              {t(experience.roleKey)}
            </h3>
            <span className="text-sm text-muted-foreground">
              {formatDate(experience.startDate)} -{" "}
              {experience.endDate
                ? formatDate(experience.endDate)
                : t("Experience.present")}
            </span>
          </div>
          <p className="mb-3 font-medium text-primary">
            {t(experience.companyKey)}
          </p>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {t(experience.descriptionKey)}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {experience.tech.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
