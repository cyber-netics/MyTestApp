import styled from "styled-components";
import { inputStyles } from "./styles";
import { InputProps } from "./input";

export const InputStyle = styled.div<InputProps>`
  &&& {
    &:first-child {
      ${inputStyles};
    }
  }
`;
