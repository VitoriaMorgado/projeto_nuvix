"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps {
  value?: number;
  className?: string;
}

const Progress: React.FC<ProgressProps> = React.forwardRef<
  HTMLDivElement,
  ProgressProps
>(({ value = 0, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative h-1 w-full max-w-[1000px] overflow-hidden bg-secondary",
        className,
      )}
    >
      <div
        className="h-full bg-blue-700 transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }} // Constrói o progresso
      />
    </div>
  );
});

Progress.displayName = "Progress";

export { Progress };
