import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("Nav");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Page not found
      </p>
      <Button href="/">{t("home")}</Button>
    </div>
  );
}
