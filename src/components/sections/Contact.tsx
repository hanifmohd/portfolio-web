"use client";

import { useTranslations } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import SocialLinks from "@/components/ui/SocialLinks";
import FadeInOnScroll from "@/components/animations/FadeInOnScroll";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="bg-secondary/30 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={t("heading")} subtitle={t("subtitle")} />

        <div className="grid gap-12 md:grid-cols-2">
          <FadeInOnScroll direction="left">
            <ContactForm />
          </FadeInOnScroll>

          <FadeInOnScroll direction="right">
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">
                  {t("or_reach")}
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:your@email.com"
                    className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail size={18} className="text-primary" />
                    your@email.com
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary" />
                    Malaysia
                  </div>
                </div>
              </div>

              <div>
                <SocialLinks />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
