declare global {
  // onClick event
  type ButtonEvent = React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>;

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
}

export {};
