"use client";

import { useTranslations } from "next-intl";
import { Award } from "@/types";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { Trophy } from "lucide-react";

interface AwardItemProps {
  award: Award;
  index: number;
}

export default function AwardItem({ award, index }: AwardItemProps) {
  const t = useTranslations();

  return (
    <FadeInOnScroll delay={index * 0.1}>
      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-sm">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Trophy size={18} className="text-primary" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-medium text-card-foreground">
            {t(award.titleKey)}
          </p>
        </div>
        <span className="shrink-0 text-sm font-semibold text-primary">
          {award.year}
        </span>
      </div>
    </FadeInOnScroll>
  );
}
