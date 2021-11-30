import React, { useState } from "react";
import { Input, InputProps } from "./input";

const Regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class RegexValidate {
  static email(input: string): boolean {
    return Regex.test(input);
  }
}

export const InputEmail: React.FC<InputProps> = (props) => {
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(false);

  const handleOnChange = (event: OnChangeTarget) => {
    if (props.onChange) props.onChange(event);
    setStatus(RegexValidate.email(event.value));
  };

  return (
    <Input
      {...props}
      onChange={handleOnChange}
      error={error || props.error}
      onBlue={() => setError(!status)}
    />
  );
};
