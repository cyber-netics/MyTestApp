import React from "react";
import { Wrapper, BadgeElem, IShapeTypes } from "./styles";

export interface BadgeProps extends ElemSizeTypes, ElemStatusColorTypes {
  count?: number;
  className?: string;
  shape?: IShapeTypes;
  children?: JSX.Element;
}

const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <Wrapper className={props.className} sizeType={props.size}>
      <BadgeElem
        shape={props.shape}
        sizeType={props.size}
        colorType={props.color}
      >
        <>{props.count && props.shape !== "dot" && props.count}</>
      </BadgeElem>
      {props.children}
    </Wrapper>
  );
};

export default Badge;
