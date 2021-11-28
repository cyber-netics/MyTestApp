import { extractRgb, convertRgb } from "../util/colors";

export const parseColor = (color: string, type: string) => {
  const rgbColor = extractRgb(color);

  if (type === "rgba") return rgbColor;
  return convertRgb(rgbColor);
};
