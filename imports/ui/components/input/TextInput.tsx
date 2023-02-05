import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useOnClickOutside from "../../../hooks/useClickOutside";

export interface TextInputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: string) => void;
  onClickOutside?: () => void;
}

function TextInput({
  className = "relative",
  placeholder = "Type here",
  value,
  onChange,
  onClickOutside,
}: TextInputProps) {
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    onClickOutside && onClickOutside();
  });

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={twMerge(
        "border-slate-300 border font-weight-600 py-2.5 px-4 rounded-lg text-slate-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200",
        className
      )}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      ref={ref}
    />
  );
}

export default TextInput;
