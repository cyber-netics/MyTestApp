import React from "react";
import arrowImg from "Assets/test.svg";
import {
  Wrapper,
  SelectElem,
  OptionElem,
  GroupElem,
  Caret,
  Arrow,
} from "./styles";

export interface SelectProps extends ElemColorTypes, ElemSizeTypes {
  name?: string;
  value?: string;
  className?: string;
  children?: JSX.Element[];
}

export interface OptionProps extends ElemSizeTypes {
  key: string;
  value?: string;
}

export interface GroupProps {
  label?: string;
}

const Select: React.FC<SelectProps> = (props) => {
  return (
    <Wrapper>
      <SelectElem
        name={props.name}
        sizeType={props.size}
        colorType={props.color}
        className={props.className}
      >
        {props.children?.map((child) => {
          return React.cloneElement(child, { size: props.size });
        })}
      </SelectElem>
      <Caret>
        <Arrow src={arrowImg} />
      </Caret>
    </Wrapper>
  );
};

export const Group: React.FC<GroupProps> = (props) => {
  return <GroupElem label={props.label}>{props.children}</GroupElem>;
};

export const Option: React.FC<OptionProps> = (props) => {
  return (
    <OptionElem sizeType={props.size} value={props.value}>
      {props.children}
    </OptionElem>
  );
};

export default Select;
