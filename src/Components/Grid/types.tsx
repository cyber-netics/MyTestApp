export interface GridProps {
  col?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface RowProps {
  children: JSX.Element | JSX.Element[];
}

export interface ColProps extends GridProps {
  children: JSX.Element;
}
