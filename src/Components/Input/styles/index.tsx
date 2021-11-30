import styled, { css } from "styled-components";
import { base } from "./styles";
import {
  hightPrimary,
  borderError,
  borderDefault,
  borderPrimary,
  shadowPrimary,
  borderShadowError,
} from "Shared/styles";

export interface InputElemProps extends InnerColorTypes, InnerSizeTypes {
  error?: boolean;
  onChange?: (e: EventOnChange) => void;
}

const interactiveBorder = css`
  ${borderDefault};
  &:hover {
    ${borderPrimary};
  }
  &:focus {
    ${borderPrimary};
    ${shadowPrimary};
  }
`;

const borderErrorColor = css`
  ${borderError};
  ${borderShadowError};
`;

const dynamicBorderError = css<{ error?: boolean }>`
  ${({ error }) => error && borderErrorColor};
`;

export const InputElem = styled.input<InputElemProps>`
  ${base};
  ${dynamicBorderError};

  ${hightPrimary};
  ${interactiveBorder};
`;
