"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { navItems } from "@/data/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileNav from "./MobileNav";
import { Menu } from "lucide-react";
import { motion } from "motion/react";

export default function Header() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="hanifmohd.net"
              className="h-9 w-auto dark:invert transition-opacity hover:opacity-80"
            />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
