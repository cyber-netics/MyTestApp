export const pxToNumber = (num: string) => {
  return Number(num.split("px")[0]);
};

export const approximatly = (
  subjectNum: string,
  compare: number,
  delta?: number
) => {
  const subnum = Number(subjectNum.split("px")[0]);
  expect(subnum).closeTo(Number(compare), delta || 0.1);
};
