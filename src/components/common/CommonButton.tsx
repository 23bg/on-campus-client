import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface CommonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  loading?: boolean;
  icon?: ReactNode;
  className?: string;
  children: React.ReactNode;
}

export default function CommonButton({
  variant = "default",
  loading,
  icon,
  className,
  children,
  ...props
}: CommonButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn("rounded-none text-sm", className)}
      {...props}
    >
      {loading ? "Loading..." : (
        <span className="flex items-center gap-2">
          {icon && <span>{icon}</span>}
          {children}
        </span>
      )}
    </Button>
  );
}
