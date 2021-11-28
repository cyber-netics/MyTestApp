import { css } from "styled-components";
import { colors } from "../theme";

import { primaryFontColors, primaryColors } from "../dynamic";
import { secondaryColors } from "../dynamic";

export const fontColorPrimary = css`
  color: ${primaryFontColors};
`;

export const backgroundPrimary = css`
  background-color: ${primaryColors};
`;

export const backgroundSecondary = css`
  background-color: ${secondaryColors};
`;
