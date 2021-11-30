import { css } from "styled-components";
import { colors } from "../theme";

import {
  primaryShadow,
  primaryColors,
  secondaryColors,
  primaryHighlight,
  primaryFontColors,
  secondaryFontColors,
  primaryStatusColors,
} from "../dynamic";

export const fontColorPrimary = css`
  color: ${primaryFontColors};
`;

export const backgroundPrimary = css`
  background-color: ${primaryColors};
`;

export const backgroundSecondary = css`
  background-color: ${secondaryColors} !important;
`;

export const fontColorSecondary = css`
  color: ${secondaryFontColors};
`;

export const statusPrimary = css`
  background-color: ${primaryStatusColors};
`;

export const borderPrimary = css`
  border-color: ${primaryColors};
`;

export const borderSecondary = css`
  border-color: ${secondaryColors};
`;

export const borderDefault = css`
  border-color: ${colors.highlight};
`;

export const borderError = css`
  border-color: ${colors.error} !important;
`;

export const borderShadowError = css`
  box-shadow: 0 0 0 2px ${colors.error1} !important;
`;

export const shadowPrimary = css`
  box-shadow: 0 0 0 2px ${primaryShadow};
`;

export const backgroundHighlight = css`
  background-color: ${primaryHighlight};
`;
