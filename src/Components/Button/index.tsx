import React, { useRef, useEffect, useState } from "react";
import { ButtonElem } from "./styles";
import { Row } from "Components/Grid";

export interface ButtonProps extends ElemSizeTypes, ElemColorTypes {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: JSX.Element | string;
  onClick?: (e: ButtonEvent) => void;
}

const Button = (props: ButtonProps) => {
  const [focus, setFocus] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const focusAnim = () => {
    setFocus(true);
    setTimeout(() => {
      if (mountedRef.current) setFocus(false);
    }, 700);
  };

  const handleClick = (e: ButtonEvent) => {
    if (props.onClick) props.onClick(e);
  };

  const onClick = (e: ButtonEvent) => {
    focusAnim();
    handleClick(e);
  };

  return (
    <ButtonElem
      focus={focus}
      onClick={onClick}
      sizeType={props.size}
      colorType={props.color}
      disabled={props.disabled}
      className={props.className}
    >
      <Row>
        <span>Runing</span>
      </Row>
    </ButtonElem>
  );
};

export default Button;
