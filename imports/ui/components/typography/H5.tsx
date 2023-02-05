import React from "react";
import { twMerge } from "tailwind-merge";

interface H5Props {
  className?: string;
  children: React.ReactNode;
}

function H5({ className, children }: H5Props) {
  return (
    <h5
      className={twMerge(
        "mb-4 text-base font-semibold uppercase text-slate-700 dark:text-slate-100  md:text-lg lg:text-lg motion-safe:transition-all",
        className
      )}
    >
      {children}
    </h5>
  );
}

export default H5;
