"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import WorkCard from "@/components/ui/WorkCard";
import { works } from "@/data/works";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Works() {
  const t = useTranslations("Works");

  const statItems = [
    { value: 6, suffix: "", label: t("stat1_label") },
    { value: 19, suffix: "+", label: t("stat2_label") },
    { value: 4, suffix: "", label: t("stat3_label") },
    { value: 6, suffix: "", label: t("stat4_label") },
  ];

  return (
    <section id="works" className="py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />

        {/* Animated stats */}
        <div className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), var(--accent))",
                }}
              />
              <div className="relative z-10">
                <div className="text-4xl font-black text-primary mb-1 tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Work cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {works.map((work, i) => (
            <WorkCard key={work.id} work={work} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
