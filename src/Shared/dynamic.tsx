import { theme } from "./theme";

/**
 *
 * Colors
 */
export const primaryColors = ({ colorType = "primary" }: InnerColorTypes) => {
  return theme.colors.primary[colorType];
};

export const secondaryColors = ({ colorType = "primary" }: InnerColorTypes) => {
  return theme.colors.secondary[colorType];
};

export const primaryShadow = ({ colorType = "primary" }: InnerColorTypes) => {
  return theme.colors.shadow.primary[colorType];
};

export const secondaryShadow = ({ colorType = "primary" }: InnerColorTypes) => {
  return theme.colors.shadow.secondary[colorType];
};

export const primaryStatusColors = ({
  colorType = "success",
}: InnerStatusColorTypes) => {
  return theme.colors.status[colorType];
};

export const primaryFontColors = ({
  colorType = "primary",
}: InnerColorTypes) => {
  return theme.colors.font.primary[colorType];
};

export const secondaryFontColors = ({
  colorType = "primary",
}: InnerColorTypes) => {
  return theme.colors.font.secondary[colorType];
};

export const primaryHighlight = ({
  colorType = "primary",
}: InnerColorTypes) => {
  return theme.colors.highlight.primary[colorType];
};

/**
 *
 * Sizes
 */
export const primaryHeight = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.sizes.primary[sizeType];
};

export const secondaryHeight = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.sizes.secondary[sizeType];
};

export const tertiaryHeight = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.sizes.tertiary[sizeType];
};

export const primaryFontSize = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.font.primary[sizeType];
};

export const secondaryFontSize = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.font.secondary[sizeType];
};

export const primarySpace = ({ sizeType = "small" }: InnerSizeTypes) => {
  return theme.spacing.primary[sizeType];
};
