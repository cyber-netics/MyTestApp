import { css } from "styled-components";
import { primaryHeight, primaryFontSize, tertiaryHeight } from "../dynamic";

// Height
export const hightPrimary = css`
  min-height: ${primaryHeight};
`;

// Font
export const fontSizePrimary = css`
  font-size: ${primaryFontSize};
`;

// Size
export const sizeTertiary = css`
  width: ${tertiaryHeight};
  height: ${tertiaryHeight};
`;
