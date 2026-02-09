"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("heading")} />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeInOnScroll direction="left">
            <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
              <Image
                src="/images/anip_1.png"
                alt="Mohd Hanif Mohamad"
                fill
                className="rounded-2xl object-cover"
                priority
              />
              <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-xl bg-primary/20" />
              <div className="absolute -left-2 -top-2 h-16 w-16 rounded-xl bg-accent/20" />
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll direction="right">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("bio_1")}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("bio_2")}
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
