import React from "react";
import { twMerge } from "tailwind-merge";

interface SmallTextProps {
  className?: string;
  children: React.ReactNode;
}

function SmallText({ className, children }: SmallTextProps) {
  return (
    <p
      className={twMerge(
        "mb-4 text-xs font-semibold text-slate-700 dark:text-slate-100 motion-safe:transition-all",
        className
      )}
    >
      {children}
    </p>
  );
}

export default SmallText;
