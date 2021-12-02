import { createGlobalStyle } from "styled-components";

/**
 *
 * Colors
 *
 */
export const colors = {
  dark: "rgb(0, 0, 0)",
  dark1: "rgb(48, 48, 48)",
  dark2: "rgba(114, 114, 114, 0.3)",
  dark3: "rgb(0 0 0 / 6%)",

  primary: "rgb(24, 144, 255)",
  primary1: "rgb(64, 169, 255)",
  primary2: "rgba(24, 144, 255, 0.3)",
  primary3: "#1890ff",

  highlight: "rgb(230, 230, 230)",
  highlight1: "rgb(115, 115, 115)",
  hightlight2: "rgb(217, 217, 217)",
  highlight3: "rgb(250, 250, 250)",

  success: "rgb(82, 196, 26)",
  error: "rgb(255, 77, 79)",
  error1: "rgba(255, 77, 79, 0.3)",
  noColor: "rgba(0, 0, 0, 0)",
  light: "rgb(255, 255, 255)",
};

const theme = {
  colors: {
    primary: {
      dark: colors.dark,
      primary: colors.primary,
    },

    secondary: {
      dark: colors.dark1,
      primary: colors.primary1,
    },

    font: {
      primary: {
        dark: colors.light,
        primary: colors.light,
      },
      secondary: {
        dark: colors.dark,
        primary: colors.highlight1,
      },
    },

    shadow: {
      primary: {
        dark: colors.dark2,
        primary: colors.primary2,
      },
      secondary: {
        dark: colors.dark3,
        primary: colors.primary3,
      },
    },

    highlight: {
      primary: {
        dark: colors.dark3,
        light: colors.light,
        primary: colors.highlight3,
      },
    },

    status: {
      error: colors.error,
      neutral: colors.dark2,
      success: colors.success,
    },
  },

  sizes: {
    primary: {
      small: "40px",
      medium: "50px",
      large: "55px",
    },
    secondary: {
      small: "16px",
      medium: "17px",
      large: "18px",
    },
    tertiary: {
      small: "10px",
      medium: "11px",
      large: "12px",
    },
  },

  spacing: {
    primary: {
      small: "4px 15px",
      medium: "5px 25px",
      large: "6px 30px",
    },
    secondary: {
      small: "1px",
      medium: "2px",
      large: "3px;",
    },
  },

  font: {
    primary: {
      small: "13.425px",
      medium: "14.5px",
      large: "15.5px",
    },
    secondary: {
      small: "12px",
      medium: "13px",
      large: "14px",
    },
  },
};

/**
 *
 * Config
 */
type IStyleType = {
  sizeType: ISizeTypes;
  colorType: IColorTypes;
};

type ThemeProps = typeof theme & IStyleType;

export interface ITheme {
  theme: ThemeProps;
}

export const defaults: IStyleType = {
  sizeType: "small",
  colorType: "primary",
};

export const styles: ThemeProps = Object.assign({}, { ...theme, ...defaults });

/**
 *
 * Global Style
 */
export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica, Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol", sans-serif;
  }

  body {
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .fade {
    transition: all 1s ease-out;
  }
`;
