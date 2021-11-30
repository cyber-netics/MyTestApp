import React from "react";
import { InputElem } from "./styles";

export interface InputProps extends ElemColorTypes, ElemSizeTypes {
  name?: string;
  value?: string;
  error?: boolean;
  className?: string;
  onBlue?: () => void;
  onChange?: (e: OnChangeTarget) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const handleOnChange = (event: EventOnChange) => {
    const { value, name } = event.currentTarget;
    if (props.onChange) props.onChange({ value, name });
  };

  return (
    <InputElem
      value={props.value}
      error={props.error}
      onBlur={props.onBlue}
      sizeType={props.size}
      colorType={props.color}
      onChange={handleOnChange}
      className={props.className}
    />
  );
};
