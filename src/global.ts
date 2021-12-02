declare global {
  // Events
  type ButtonEvent = React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>;
  type EventOnChange = React.FormEvent<HTMLInputElement>;
  type OnChangeTarget = { value: string; name: string };

  // Dynamic
  type IColorTypes = "primary" | "dark";
  type ISizeTypes = "small" | "medium" | "large";
  type IStatusColorTypes = "success" | "error" | "neutral";
  type IDarkLightColorTypes = "dark" | "light";

  interface InnerDarkLightColorTypes {
    colorType?: IDarkLightColorTypes;
  }

  interface ElemDarkLightColorTypes {
    color?: IDarkLightColorTypes;
  }

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
