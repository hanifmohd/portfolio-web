"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("heading")} />

        <div className="grid items-center gap-12 md:grid-cols-2">
          <FadeInOnScroll direction="left">
            <div className="relative mx-auto flex items-center justify-center">
              {/* Animated gradient background */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 blur-2xl sm:h-80 sm:w-80"
              />

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute h-80 w-80 rounded-full border-2 border-dashed border-primary/20 sm:h-[22rem] sm:w-[22rem]"
              />

              {/* Decorative dots on ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute h-80 w-80 sm:h-[22rem] sm:w-[22rem]"
              >
                <div className="absolute -top-1.5 left-1/2 h-3 w-3 rounded-full bg-primary" />
                <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 rounded-full bg-accent" />
                <div className="absolute left-0 top-1/2 h-3 w-3 rounded-full bg-primary/50" />
              </motion.div>

              {/* Image container */}
              <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-border/50 bg-gradient-to-br from-secondary via-secondary/50 to-primary/5 shadow-2xl sm:h-80 sm:w-80">
                <Image
                  src="/images/anip_1.png"
                  alt="Mohd Hanif Mohamad"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>

              {/* Corner accents */}
              <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 blur-sm" />
              <div className="absolute -left-3 -top-3 h-16 w-16 rounded-xl bg-gradient-to-br from-accent/30 to-primary/30 blur-sm" />
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
