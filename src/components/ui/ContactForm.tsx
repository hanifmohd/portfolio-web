"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import Button from "./Button";
import { Send } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder - integrate with your preferred form service later
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          {t("name_label")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder={t("name_placeholder")}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          {t("email_label")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder={t("email_placeholder")}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          {t("message_label")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t("message_placeholder")}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
        />
      </div>

      <Button type="submit" className="w-full gap-2">
        <Send size={16} />
        {t("send_button")}
      </Button>

      {status === "success" && (
        <p className="text-center text-sm font-medium text-green-600 dark:text-green-400">
          {t("success")}
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm font-medium text-red-600 dark:text-red-400">
          {t("error")}
        </p>
      )}
    </form>
  );
}
