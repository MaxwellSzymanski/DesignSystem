import React from "react";

export interface TagProps {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

function Tag({ className = "relative", children, onClick }: TagProps) {
  const CLASS = `bg-primary-100 text-primary-700 dark:bg-primary-700 dark:text-primary-100 inline-flex px-2.5 py-1 rounded-full font-medium text-xs items-center space-x-1 justify-center w-fit gap-1 ${
    onClick ? "cursor-pointer" : "cursor-default"
  } ${className}`;
  return (
    <span className={CLASS} onClick={(e) => onClick && onClick(e)}>
      {children}
    </span>
  );
}

export default Tag;
