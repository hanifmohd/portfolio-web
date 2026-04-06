"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { Database, Gauge, BookOpen, BarChart2, Bot, Server, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Work } from "@/types";

const icons: Record<Work["iconName"], React.ReactNode> = {
  Database: <Database size={52} strokeWidth={1.2} />,
  Gauge: <Gauge size={52} strokeWidth={1.2} />,
  BookOpen: <BookOpen size={52} strokeWidth={1.2} />,
  BarChart2: <BarChart2 size={52} strokeWidth={1.2} />,
  Bot: <Bot size={52} strokeWidth={1.2} />,
  Server: <Server size={52} strokeWidth={1.2} />,
};

interface WorkCardProps {
  work: Work;
  index: number;
}

export default function WorkCard({ work, index }: WorkCardProps) {
  const t = useTranslations("Works");
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg) scale(1.03)`;
      card.style.transition = "transform 0.08s linear";

      if (spotlightRef.current) {
        const sx = e.clientX - rect.left;
        const sy = e.clientY - rect.top;
        spotlightRef.current.style.background = `radial-gradient(350px circle at ${sx}px ${sy}px, ${work.glowColor}22, transparent 55%)`;
      }
    },
    [work.glowColor]
  );

  const handleMouseEnter = useCallback(() => setHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    }
    setHovered(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1200px" }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card h-full cursor-default select-none"
      >
        {/* Spotlight glow following cursor */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Glow border + shadow on hover */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 rounded-2xl z-20 transition-all duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            boxShadow: `0 0 0 1px ${work.glowColor}55, 0 25px 50px -12px ${work.glowColor}30`,
          }}
        />

        {/* Gradient header */}
        <div
          className={`relative h-44 bg-gradient-to-br ${work.gradient} flex items-center justify-center overflow-hidden`}
        >
          {/* Decorative circles */}
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -left-6 -bottom-6 w-28 h-28 rounded-full bg-white/10" />
          <div className="absolute right-16 bottom-4 w-16 h-16 rounded-full bg-white/5" />
          {/* Shimmer overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%, rgba(255,255,255,0.06) 100%)",
            }}
          />
          {/* Icon */}
          <div className="relative z-10 text-white drop-shadow-lg">
            {icons[work.iconName]}
          </div>
          {/* Year badge */}
          <div className="absolute top-4 right-4 bg-black/25 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full border border-white/20">
            {work.year}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col gap-3">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: work.glowColor }}
          >
            {t(work.categoryKey as Parameters<typeof t>[0])}
          </span>
          <h3 className="text-xl font-bold text-card-foreground leading-snug">
            {t(work.titleKey as Parameters<typeof t>[0])}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t(work.descriptionKey as Parameters<typeof t>[0])}
          </p>
          <p className="text-xs text-muted-foreground flex items-start gap-1.5">
            <MapPin size={12} className="shrink-0 mt-0.5" />
            {work.department}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {work.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.75 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15 + i * 0.06 + 0.4,
                  duration: 0.3,
                  ease: "backOut",
                }}
                className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
