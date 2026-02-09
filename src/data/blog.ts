import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "getting-started-nextjs-app-router",
    titleKey: "Blog.post1_title",
    excerptKey: "Blog.post1_excerpt",
    date: "2025-12-15",
    readingTime: "5 min",
    tags: ["Next.js", "React", "Tutorial"],
  },
  {
    id: "post-2",
    slug: "mastering-typescript-generics",
    titleKey: "Blog.post2_title",
    excerptKey: "Blog.post2_excerpt",
    date: "2025-11-20",
    readingTime: "8 min",
    tags: ["TypeScript", "JavaScript"],
  },
  {
    id: "post-3",
    slug: "building-accessible-web-apps",
    titleKey: "Blog.post3_title",
    excerptKey: "Blog.post3_excerpt",
    date: "2025-10-05",
    readingTime: "6 min",
    tags: ["Accessibility", "Web Dev"],
  },
];
