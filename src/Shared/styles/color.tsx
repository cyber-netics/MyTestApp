import { css } from "styled-components";
import { colors } from "../theme";

import {
  primaryColors,
  secondaryColors,
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
  background-color: ${secondaryColors};
`;

export const fontColorSecondary = css`
  color: ${secondaryFontColors};
`;

export const statusPrimary = css`
  background-color: ${primaryStatusColors};
`;
