import styled from "styled-components";

interface ButtonElemProps extends InnerColorTypes, InnerSizeTypes {
  focus?: boolean;
}

export const ButtonElem = styled.button<ButtonElemProps>`
  color: red;
`;
