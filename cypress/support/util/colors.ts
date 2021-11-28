import Color from "color";

export const extractRgb = (str: string) => {
  var match = str.match(
    /(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/
  );

  if (match === null) {
    throw new Error("Element dose not contain rgb color");
  }

  return match[0];
};

export const convertRgb = (rgba: string) => {
  const color = Color(rgba);
  const arr = color.rgb().array();

  if (arr.length > 3) arr.pop();
  return Color(arr).rgb().toString();
};
