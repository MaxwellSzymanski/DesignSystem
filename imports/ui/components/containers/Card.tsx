import React from "react";
import { twMerge } from "tailwind-merge";
import H3 from "../typography/H3";

interface CardProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
}
function Card({ className, title, children }: CardProps) {
  return (
    <div
      className={twMerge(
        "p-6 lg:p-10 transition-all bg-white border shadow-lg hover:shadow-xl rounded-2xl dark:bg-slate-800 border-slate-200 dark:border-slate-700 flex flex-col gap-2",
        className
      )}
    >
      {title && <H3>{title}</H3>}
      {title && <hr className="mb-2 border-slate-200 dark:border-slate-700" />}
      {children}
    </div>
  );
}

export default Card;
