type Subject = JQuery<HTMLElement>;

export const pseudoCss = (elem: Subject, style: number, psudo?: string) => {
  const win = elem[0].ownerDocument.defaultView;
  if (!win) throw new Error("Element styles not available");

  const elemStyles: CSSStyleDeclaration = win?.getComputedStyle(
    elem[0],
    `:${psudo || ""}`
  );

  return elemStyles[style];
};
