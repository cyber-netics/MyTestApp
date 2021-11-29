import React from "react";
import { Wrapper, BaseElem } from "./styles";

export interface AvatarProps extends ElemSizeTypes, ElemColorTypes {
  className?: string;
  children?: JSX.Element;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  return (
    <Wrapper>
      <BaseElem className={props.className} sizeType={props.size} />
    </Wrapper>
  );
};

export default Avatar;
