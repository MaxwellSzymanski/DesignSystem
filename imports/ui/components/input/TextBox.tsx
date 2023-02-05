import React from "react";

interface TextBoxProps {
  content: string;
  onChange: (e: string) => void;
}

function TextBox({ content, onChange }: TextBoxProps) {
  return (
    <div className="p-4 pb-2 bg-white border rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700">
      <textarea
        rows={20}
        className="w-full p-4 px-0 font-mono text-sm text-slate-700 bg-inherit focus:ring-0 dark:text-slate-100 dark:placeholder-gray-400 focus:border-transparent focus:outline-none"
        placeholder="Write here..."
        required
        onChange={(e) => onChange && onChange(e.target.value)}
        value={content}
      />
    </div>
  );
}
export default TextBox;
