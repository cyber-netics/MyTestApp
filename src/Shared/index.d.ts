declare global {
  // onClick event
  type ButtonEvent = React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>;

  // Dynamic
  type IColorTypes = "primary" | "dark" | "light";
  type ISizeTypes = "small" | "medium" | "large";
  type IStatusColorTypes = "success" | "error" | "neutral";

  // Dynamic colors/Sizes
  interface ElemSizeTypes {
    size?: ISizeTypes;
  }

  interface ElemColorTypes {
    color?: IColorTypes;
  }

  interface InnerSizeTypes {
    sizeType?: ISizeTypes;
  }

  interface InnerColorTypes {
    colorType?: IColorTypes;
  }

  interface ElemStatusColorTypes {
    color?: IStatusColorTypes;
  }

  interface InnerStatusColorTypes {
    colorType?: IStatusColorTypes;
  }
}

export {};
