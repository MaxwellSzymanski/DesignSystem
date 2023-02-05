import React from "react";
import { twMerge } from "tailwind-merge";

function HR(className: string) {
  return (
    <hr
      className={twMerge(
        "my-4 border-slate-200 dark:border-slate-700",
        className
      )}
    />
  );
}

export default HR;
