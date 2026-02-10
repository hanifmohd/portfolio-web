"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import AwardItem from "@/components/ui/AwardItem";
import AssessmentBar from "@/components/ui/AssessmentBar";
import { awards, assessmentMarks, sijilYears } from "@/data/awards";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";

export default function Awards() {
  const t = useTranslations("Awards");

  return (
    <section id="awards" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />

        {/* Awards */}
        <div className="mb-12">
          <h3 className="mb-6 text-xl font-semibold text-foreground">
            {t("awards_heading")}
          </h3>
          <div className="space-y-3">
            {awards.map((award, index) => (
              <AwardItem key={award.id} award={award} index={index} />
            ))}
          </div>
        </div>

        {/* Assessment Marks */}
        <FadeInOnScroll>
          <div className="mb-12">
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              {t("assessment_heading")}
            </h3>
            <div className="space-y-3 rounded-xl border border-border bg-card p-6">
              {assessmentMarks.map((mark, index) => (
                <AssessmentBar key={mark.year} mark={mark} index={index} />
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Sijil Penghargaan */}
        <FadeInOnScroll>
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              {t("sijil_heading")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {sijilYears.map((year) => (
                <span
                  key={year}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
