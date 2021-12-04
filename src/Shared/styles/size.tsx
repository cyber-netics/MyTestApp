import { css } from "styled-components";
import {
  primaryHeight,
  tertiaryHeight,
  secondaryHeight,
  primaryFontSize,
  secondaryFontSize,
} from "../dynamic";

// Height
export const hightPrimary = css`
  min-height: ${primaryHeight};
`;

// Font
export const fontSizePrimary = css`
  font-size: ${primaryFontSize};
`;

// Size
export const sizePrimary = css`
  width: ${primaryHeight};
  height: ${primaryHeight};
`;

export const sizeTertiary = css`
  width: ${tertiaryHeight};
  height: ${tertiaryHeight};
`;

export const fontSizeSecondary = css`
  font-size: ${secondaryFontSize};
`;

export const sizeSecondary = css`
  width: ${secondaryHeight};
  height: ${secondaryHeight};
`;
