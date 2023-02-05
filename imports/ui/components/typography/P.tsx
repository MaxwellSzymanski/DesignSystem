import React from "react";
import { twMerge } from "tailwind-merge";

interface PProps {
  className?: string;
  children: React.ReactNode;
}

function P({ className, children }: PProps) {
  return (
    <p
      className={twMerge(
        "text-base font-normal text-slate-500 dark:text-slate-200",
        className
      )}
    >
      {children}
    </p>
  );
}

export default P;
