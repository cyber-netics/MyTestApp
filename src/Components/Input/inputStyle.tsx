import styled from "styled-components";
import { inputStyles } from "./styles";

export const InputStyle = styled.div`
  &&& {
    &:first-child {
      ${inputStyles};
    }
  }
`;
