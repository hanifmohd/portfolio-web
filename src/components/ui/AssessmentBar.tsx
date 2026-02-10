"use client";

import { motion } from "motion/react";
import { AssessmentMark } from "@/types";

interface AssessmentBarProps {
  mark: AssessmentMark;
  index: number;
}

export default function AssessmentBar({ mark, index }: AssessmentBarProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-12 shrink-0 text-sm font-semibold text-foreground">
        {mark.year}
      </span>
      <div className="relative h-7 flex-1 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${mark.score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
        />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
          {mark.score.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}
