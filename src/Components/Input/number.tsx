import React, { useState } from "react";
import { Input, InputProps } from "./input";

export const InputNumber: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState("");
  const [errInput, setErr] = useState(false);

  const errorBlink = () => {
    setErr(true);
    setTimeout(() => {
      setErr(false);
    }, 300);
  };

  const handleOnChange = (event: OnChangeTarget) => {
    const numVal = !!Number(event.value);

    if (!numVal) errorBlink();

    if (numVal) setValue(event.value);
    if (props.onChange) props.onChange(event);
  };

  return (
    <Input
      {...props}
      value={value}
      onChange={handleOnChange}
      error={errInput || props.error}
    />
  );
};
