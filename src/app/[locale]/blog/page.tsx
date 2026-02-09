import { setRequestLocale } from "next-intl/server";
import Blog from "@/components/sections/Blog";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="pt-20">
      <Blog />
    </div>
  );
}
