import styled from "styled-components";
import { label, input, checkmark, inputMark, labelText } from "./elems";
import {
  borderPrimary,
  borderSecondary,
  backgroundPrimary,
  backgroundSecondary,
  sizeSecondary,
  sizeTertiary,
  disabled,
  borderDefault,
  fontSizePrimary,
} from "Shared/styles";

export const RadioWrapper = styled.div`
  display: inline-block;
`;

export const Label = styled.label<{ disabled?: boolean }>`
  ${label};
  ${disabled};
`;

export const LabelText = styled.div`
  ${labelText};
`;

export const Mark = styled.span<InnerColorTypes & InnerSizeTypes>`
  ${checkmark};
  ${sizeSecondary};
  ${fontSizePrimary};
  ${borderDefault};
  &:hover {
    ${borderPrimary}
  }
`;

export const Input = styled.input<InnerColorTypes & InnerSizeTypes>`
  ${input};

  &:checked + ${Mark} {
    ${borderPrimary};

    &::after {
      ${inputMark};
      ${sizeTertiary};
      ${backgroundPrimary};
    }

    &:hover {
      ${borderSecondary}
      &::after {
        ${backgroundSecondary};
      }
    }
  }
`;
