import React from "react";
import { twMerge } from "tailwind-merge";

interface ULProps {
  className?: string;
  children: React.ReactNode;
}

function UL({ className, children }: ULProps) {
  return (
    <ul
      className={twMerge(
        "ml-2 py-2 space-y-2 list-disc list-inside text-base font-normal text-slate-500 dark:text-slate-200",
        className
      )}
    >
      {children}
    </ul>
  );
}

export default UL;
