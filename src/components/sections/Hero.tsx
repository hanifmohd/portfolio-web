"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import SocialLinks from "@/components/ui/SocialLinks";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-4 pt-16"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative shrink-0"
        >
          {/* Glow behind image */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 to-accent/25 blur-2xl"
          />

          {/* Rotating border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, var(--primary), var(--accent), transparent, var(--primary))",
              maskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
              WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 2px))",
            }}
          />

          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-border/30 bg-gradient-to-br from-secondary to-primary/5 shadow-2xl sm:h-56 sm:w-56">
            <Image
              src="/images/anip_1.png"
              alt="Mohd Hanif Mohamad"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 text-lg font-medium text-primary"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {t("name")}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-5 text-xl font-semibold text-muted-foreground sm:text-2xl"
          >
            {t("role")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-7 max-w-lg text-lg text-muted-foreground"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-6 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <Button href="#about" size="lg">
              {t("cta_about")}
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              {t("cta_contact")}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center md:justify-start"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
