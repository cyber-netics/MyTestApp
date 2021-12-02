import styled from "styled-components";
import { select, wrapper, arrow, caret } from "./elem";
import {
  hightPrimary,
  borderDefault,
  borderPrimary,
  shadowPrimary,
  fontSizePrimary,
} from "Shared/styles";

export const Wrapper = styled.div`
  ${wrapper};
`;

export const Arrow = styled.img`
  ${arrow};
`;

export const Caret = styled.div`
  ${caret};
`;

export const SelectElem = styled.select<InnerSizeTypes & InnerColorTypes>`
  ${select};
  ${hightPrimary};
  ${borderDefault};
  &:hover {
    ${borderPrimary};∂
  }
  &:focus {
    ${borderPrimary};
    ${shadowPrimary};
  }
`;

export const OptionElem = styled.option<InnerSizeTypes>`
  ${fontSizePrimary};
`;

export const GroupElem = styled.optgroup``;
