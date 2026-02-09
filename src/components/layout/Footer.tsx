import { getTranslations } from "next-intl/server";
import SocialLinks from "@/components/ui/SocialLinks";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Portfolio. {t("copyright")}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("built_with")} Next.js
          </p>
          <SocialLinks iconSize={16} />
        </div>
      </div>
    </footer>
  );
}
