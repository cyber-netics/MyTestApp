import React, { useEffect, useState, useRef } from "react";
import { Label, Wrapper, Input, Mark, LabelText } from "./styles";

export interface CheckboxProps extends ElemSizeTypes, ElemColorTypes {
  children?: string;
  className?: string;
  onChange?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [checked, setCheck] = useState(false);
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
      if (mountedRef.current && !focus) setFocus(false);
    }, 700);
  };

  const handleClick = () => {
    if (props.onChange) props.onChange();
  };

  const onChange = () => {
    focusAnim();
    handleClick();
    setCheck(!checked);
  };

  return (
    <Label>
      <Wrapper
        focus={focus}
        colorType={props.color}
        className="exo-checkbox-wrapper"
      >
        <Input
          type="checkbox"
          colorType={props.color}
          onChange={() => onChange()}
        />
        <Mark
          checked={true}
          sizeType={props.size}
          colorType={props.color}
          className={props.className}
        >
          {props.children && (
            <LabelText>
              <>{props.children}</>
            </LabelText>
          )}
        </Mark>
      </Wrapper>
    </Label>
  );
};

export default Checkbox;
