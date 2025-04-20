import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function CommonInput({ className, ...props }: CommonInputProps) {
  return (
    <Input
      className={cn("rounded-none text-sm", className)}
      {...props}
    />
  );
}
