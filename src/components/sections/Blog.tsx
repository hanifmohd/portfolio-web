"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blog";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function Blog() {
  const t = useTranslations("Blog");

  return (
    <section id="blog" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
