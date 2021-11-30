export const noTransition = async (elem: JQuery<HTMLElement>) => {
  elem[0].style.transition = "none";
  return await elem;
};
