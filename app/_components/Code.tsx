import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 font-mono border border-accent px-1 rounded-sm text-primary", className)} {...props} />;
};
