import { useReducer } from "react";

const toggler = (currentValue: boolean, newValue: boolean): boolean => {
  return typeof newValue === "boolean" ? newValue : !currentValue;
};

function useToggle(initialValue = false) {
  return useReducer(toggler, initialValue);
}

export default useToggle;
