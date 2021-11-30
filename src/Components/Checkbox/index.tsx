import React, { useState } from "react";
import { Label, Wrapper, Input, Mark, LabelText } from "./styles";

export interface CheckboxProps extends ElemSizeTypes, ElemColorTypes {
  children?: string;
  className?: string;
  onChange?: () => void;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [checked, setCheck] = useState(false);

  return (
    <Label>
      <Wrapper>
        <Input
          type="checkbox"
          id="checkbox-inner"
          colorType={props.color}
          onChange={() => setCheck(!checked)}
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
