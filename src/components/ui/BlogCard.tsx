"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { BlogPost } from "@/types";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const t = useTranslations();

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {post.date}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {post.readingTime}
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
        {t(post.titleKey)}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
        {t(post.excerptKey)}
      </p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
        {t("Blog.read_more")}
        <ArrowRight size={14} />
      </span>
    </motion.article>
  );
}
