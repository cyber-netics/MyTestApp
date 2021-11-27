import React from "react";
import { Container } from "./styles";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <Container>{props.label}</Container>;
};

export default Button;
