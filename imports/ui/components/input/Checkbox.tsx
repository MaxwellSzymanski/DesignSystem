import React from "react";

export interface CheckboxProps {
    checked: boolean;
}

function Checkbox({ checked }: CheckboxProps) {
    return (
        <input
            className="inline-block w-4 h-4 bg-white rounded cursor-pointer text-primary-6000 border-slate-300 focus:ring-blue-200 dark:focus:ring-blue-200 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600"
            type="checkbox"
            checked={checked}
        />
    );
}

export default Checkbox;
