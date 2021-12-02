import { css, keyframes } from "styled-components";
import { colors } from "theme";
import { ITheme } from "theme";

export const fadeEffect = keyframes`
    to {
    opacity: 0;
    }
`;

const waveEffectPrimary = keyframes`
    to {
    box-shadow: 0 0 0 ${colors.primary1};
    box-shadow: 0 0 0 6px ${colors.primary1};
    }
`;

const waveEffectDark = keyframes`
    to {
    box-shadow: 0 0 0 ${colors.dark1};
    box-shadow: 0 0 0 6px ${colors.dark1};
    }
`;

const animColors = ({ theme, colorType }: InnerColorTypes & ITheme) => {
  return {
    dark: waveEffectDark,
    primary: waveEffectPrimary,
  }[colorType || theme.colorType];
};

export const waveAnim = css<InnerColorTypes>`
  ${animColors}
`;
