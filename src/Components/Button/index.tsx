import React from "react";
import { ButtonElem } from "./styles";
import { Row } from "Components/Grid";

export interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: JSX.Element | string;
  onClick?: (e: ButtonEvent) => void;
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonElem>
      <Row>
        <span>Runing</span>
      </Row>
    </ButtonElem>
  );
};

export default Button;
