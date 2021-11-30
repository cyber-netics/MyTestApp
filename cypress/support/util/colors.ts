import Color from "color";

export const extractRgb = (str: string) => {
  const match = str.match(
    /(#([\da-f]{3}){1,2}|(rgb|hsl|rgba)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl|rgba)\(\d{1,3}%?(,\s?\d{1,3}%?){2,3}\))/
  );
  if (match === null) {
    throw new Error("Element does not contain rgb color");
  }
  return match[0];
};

export const convertRgb = (rgba: string) => {
  const color = new Color(rgba);
  const arr = color.rgb().array();

  if (arr.length > 3) arr.pop();
  return new Color(arr).rgb().toString();
};
