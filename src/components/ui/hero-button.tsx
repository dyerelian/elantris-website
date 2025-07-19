import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/components/ui/button";

interface HeroButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "hero" | "heroSecondary";
}

export function HeroButton({ className, variant = "hero", ...props }: HeroButtonProps) {
  return (
    <Button
      className={cn(
        "px-8 py-6 text-lg font-semibold rounded-xl shadow-nature transition-all duration-300 hover:scale-105 hover:shadow-glow",
        variant === "hero" && "bg-gradient-primary text-white border-0",
        variant === "heroSecondary" && "bg-secondary text-secondary-foreground border border-secondary hover:bg-secondary/90",
        className
      )}
      {...props}
    />
  );
}