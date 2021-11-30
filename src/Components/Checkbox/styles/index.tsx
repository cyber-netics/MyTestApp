import styled from "styled-components";
import { label, wrapper, checkmark, input, labelText } from "./elems";
import {
  sizeSecondary,
  borderPrimary,
  backgroundPrimary,
  borderDefault,
  fontSizePrimary,
  backgroundSecondary,
} from "Shared/styles";

interface InnerElemProps extends InnerColorTypes, InnerSizeTypes {
  checked: boolean;
}

export const Label = styled.label`
  ${label};
`;

export const LabelText = styled.div`
  ${labelText};
`;

export const Wrapper = styled.span`
  ${wrapper};
`;

export const Mark = styled.span<InnerElemProps>`
  ${checkmark};
  ${sizeSecondary};
  ${fontSizePrimary};
  ${borderDefault};
  &:hover {
    ${borderPrimary};
  }
`;

export const Input = styled.input<InnerColorTypes>`
  ${input};
  &:checked + ${Mark} {
    ${borderPrimary};
    ${backgroundPrimary};
    &:hover {
      ${backgroundSecondary};
    }
  }
`;