import React from "react";
import { twMerge } from "tailwind-merge";

interface H3Props {
  className?: string;
  children: React.ReactNode;
}

function H3({ className, children }: H3Props) {
  return (
    <h3
      className={twMerge(
        "mb-4 text-xl font-bold text-slate-700 dark:text-slate-100  md:text-3xl lg:text-4xl motion-safe:transition-all",
        className
      )}
    >
      {children}
    </h3>
  );
}

export default H3;
