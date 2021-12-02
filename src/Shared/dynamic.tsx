import { ITheme } from "theme";

/**
 *
 * Colors
 */
export const primaryColors = ({
  theme,
  colorType,
}: InnerColorTypes & ITheme) => {
  return theme.colors.primary[colorType || theme.colorType];
};

export const secondaryColors = ({
  theme,
  colorType,
}: InnerColorTypes & ITheme) => {
  return theme.colors.secondary[colorType || theme.colorType];
};

export const primaryShadow = ({
  theme,
  colorType,
}: InnerColorTypes & ITheme) => {
  return theme.colors.shadow.primary[colorType || theme.colorType];
};

export const secondaryShadow = ({
  theme,
  colorType,
}: InnerColorTypes & ITheme) => {
  return theme.colors.shadow.secondary[colorType || theme.colorType];
};

export const primaryFontColors = ({
  theme,
  colorType,
}: InnerColorTypes & ITheme) => {
  return theme.colors.font.primary[colorType || theme.colorType];
};

export const secondaryFontColors = ({
  theme,
  colorType,
}: InnerColorTypes & ITheme) => {
  return theme.colors.font.secondary[colorType || theme.colorType];
};

export const primaryHighlight = ({
  theme,
  colorType,
}: InnerDarkLightColorTypes & ITheme) => {
  return theme.colors.highlight.primary[colorType || theme.colorType];
};

export const primaryStatusColors = ({
  theme,
  colorType = "success",
}: InnerStatusColorTypes & ITheme) => {
  return theme.colors.status[colorType];
};

/**
 *
 * Sizes
 */
export const primaryHeight = ({ theme, sizeType }: InnerSizeTypes & ITheme) => {
  return theme.sizes.primary[sizeType || theme.sizeType];
};

export const secondaryHeight = ({
  theme,
  sizeType,
}: InnerSizeTypes & ITheme) => {
  return theme.sizes.secondary[sizeType || theme.sizeType];
};

export const tertiaryHeight = ({
  theme,
  sizeType,
}: InnerSizeTypes & ITheme) => {
  return theme.sizes.tertiary[sizeType || theme.sizeType];
};

export const primaryFontSize = ({
  theme,
  sizeType,
}: InnerSizeTypes & ITheme) => {
  return theme.font.primary[sizeType || theme.sizeType];
};

export const secondaryFontSize = ({
  theme,
  sizeType,
}: InnerSizeTypes & ITheme) => {
  return theme.font.secondary[sizeType || theme.sizeType];
};

export const primarySpace = ({ theme, sizeType }: InnerSizeTypes & ITheme) => {
  return theme.spacing.primary[sizeType || theme.sizeType];
};

export const secondarySpace = ({
  theme,
  sizeType,
}: InnerSizeTypes & ITheme) => {
  return theme.spacing.secondary[sizeType || theme.sizeType];
};
