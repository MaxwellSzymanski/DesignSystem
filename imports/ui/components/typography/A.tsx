import React from "react";
import { twMerge } from "tailwind-merge";

interface AProps {
  className?: string;
  children: React.ReactNode;
  title?: string;
  href?: string;
}

function A({ className, children, href, title }: AProps) {
  return (
    <a
      className={twMerge(
        "text-base font-normal text-primary-600 dark:text-slate-200 bg-primary-200 rounded-md px-2 py-0.5",
        className
      )}
      href={href}
      onClick={(e) => {
        e.stopPropagation();
        alert("link");
      }}
    >
      {title ? title : children}
    </a>
  );
}

export default A;
