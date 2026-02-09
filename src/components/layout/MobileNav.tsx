"use client";

import { useTranslations } from "next-intl";
import { navItems } from "@/data/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const t = useTranslations();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm md:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-72 border-l border-border bg-background p-6 shadow-xl md:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-foreground">Menu</span>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {t(item.labelKey)}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
