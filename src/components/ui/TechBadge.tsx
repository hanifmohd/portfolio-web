import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export default function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
        className
      )}
    >
      {name}
    </span>
  );
}
