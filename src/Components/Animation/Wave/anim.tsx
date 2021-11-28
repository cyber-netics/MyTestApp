import { css, keyframes } from "styled-components";
import { colors } from "Shared/theme";

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

const animColors = ({ colorType = "primary" }: InnerColorTypes) => {
  return {
    dark: waveEffectDark,
    primary: waveEffectPrimary,
  }[colorType];
};

export const waveAnim = css<InnerColorTypes>`
  ${animColors}
`;
