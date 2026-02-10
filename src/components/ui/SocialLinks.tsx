import { socialLinks } from "@/data/social";
import { Mail, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  email: Mail,
  globe: Globe,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({
  className,
  iconSize = 20,
}: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] || Globe;
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label={link.platform}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
