import React from "react";
import { ThemeProvider } from "styled-components";
import { styles, GlobalStyle, defaults } from "theme";

interface LayoutProps extends ElemColorTypes, ElemSizeTypes {
  children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children, color, size }) => {
  const options = {
    sizeType: size || defaults.sizeType,
    colorType: color || defaults.colorType,
  };

  return (
    <ThemeProvider theme={{ ...styles, ...options }}>
      <GlobalStyle />
      <>{children}</>
    </ThemeProvider>
  );
};

export default Layout;
