import React from "react";
import { twMerge } from "tailwind-merge";

interface GradientProps {
  className?: string;
  children: React.ReactNode;
}

function Gradient({ className, children }: GradientProps) {
  return (
    <span
      className={twMerge(
        "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-sky-500",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Gradient;
