import React from "react";

export interface RadioButtonProps {
    id: string;
    checked: boolean;
}

function RadioButton({ id, checked }: RadioButtonProps) {
    return (
        <input
            id={id}
            className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border rounded-full appearance-none cursor-pointer border-slate-300 form-check-input checked:bg-primary-200 checked:border-primary-200 focus:outline-none"
            type="radio"
            name="flexRadioDefault"
            checked={checked}
        />
    );
}

export default RadioButton;
