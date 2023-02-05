import React, { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../../hooks/useClickOutside";
import Icon, { IconType } from "../icon/Icon";
import SmallText from "../typography/SmallText";

export type DropDownOptionType = {
  id: number;
  option: string | JSX.Element;
  icon?: IconType;
};

export interface DropDownProps {
  options: DropDownOptionType[];
  defaultOptionId?: number;
  label?: string;
  isEdited?: boolean;
  icon?: IconType;
  onChange?: (optionId: DropDownOptionType) => void;
}

export default function DropDown({
  options,
  defaultOptionId,
  label,
  onChange,
  icon,
  isEdited,
}: DropDownProps) {
  const [isOpen, toggleOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<DropDownOptionType>(
    options[0]
  );

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    toggleOpen(false);
  });

  useEffect(() => {
    if (defaultOptionId)
      setSelectedOption(
        options.find((option) => option.id === defaultOptionId) ?? options[0]
      );
  }, [defaultOptionId, options]);

  function changeOption(option: DropDownOptionType) {
    if (onChange) onChange(option);
    setSelectedOption(option);
    toggleOpen(false);
  }

  function renderOptions() {
    return (
      <div
        className="absolute left-0 w-full mt-2 overflow-scroll origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-52 dark:bg-slate-600"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="p-2" role="none">
          {options.map((option) => {
            return (
              <button
                key={`menu-item-${option.option}`}
                id={`menu-item-${option.option}`}
                className="flex items-center w-full gap-2 px-4 py-2 pr-8 text-base rounded-md text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
                role="menuitem"
                tabIndex={-1}
                onClick={() => {
                  changeOption(option);
                }}
              >
                {option.icon && <Icon icon={option.icon} />}
                {option.option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function renderLabel() {
    return (
      label && (
        <label
          htmlFor="text-input"
          className={`block ml-1 dark:text-slate-100 ${
            isEdited ? "text-primary-700" : "text-slate-700"
          }`}
        >
          <SmallText className="mb-1">{label}</SmallText>
        </label>
      )
    );
  }

  function renderIcon() {
    const displayedIcon = selectedOption.icon ? selectedOption.icon : icon;
    return (
      displayedIcon && (
        <Icon
          icon={displayedIcon}
          className="mr-3"
          color={isEdited ? "primary" : "slate"}
        />
      )
    );
  }

  return (
    <div className="relative z-10 inline-block text-left" ref={ref}>
      <div>
        {renderLabel()}
        <button
          type="button"
          className={`transition-all inline-flex items-center justify-center w-full px-4 py-2.5 text-base border rounded-lg shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-indigo-500 ${
            isEdited
              ? "text-primary-700 bg-primary-50  border-primary-700 hover:bg-blue-100 dark:border-primary-600 dark:bg-slate-700 dark:text-slate-100"
              : "text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
          }`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => toggleOpen(!isOpen)}
        >
          {renderIcon()}
          <p className="flex flex-grow">{selectedOption.option}</p>
          <Icon
            icon="chevron-down"
            color={isEdited ? "blue" : "slate"}
            className={
              isOpen
                ? "ml-2 transform rotate-180 transition-all"
                : "ml-2 transition-all"
            }
          />
        </button>
      </div>
      {isOpen && renderOptions()}
    </div>
  );
}
