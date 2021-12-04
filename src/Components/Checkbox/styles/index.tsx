import styled from "styled-components";
import { label, wrapper, checkmark, input, labelText } from "./styles";
import {
  sizeSecondary,
  borderPrimary,
  backgroundPrimary,
  borderDefault,
  fontSizePrimary,
  backgroundSecondary,
} from "Shared/styles";
import { waveOnFocus, WaveOnFocusProps } from "Components/Animation/Wave";

interface InnerElemProps extends InnerColorTypes, InnerSizeTypes {
  checked: boolean;
}

export const Label = styled.label`
  ${label};
`;

export const LabelText = styled.div`
  ${labelText};
`;

export const Wrapper = styled.span.attrs({
  radius: "4",
})<WaveOnFocusProps>`
  ${wrapper};
  ${waveOnFocus};
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
