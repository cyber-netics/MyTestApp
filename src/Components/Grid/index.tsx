import React from "react";
import { ColProps, RowProps } from "./types";
import { RowGrid, ColGrid } from "./styles";

export const Row: React.FC<RowProps> = (props) => (
  <RowGrid>
    <>{props.children}</>
  </RowGrid>
);

export const Col: React.FC<ColProps> = (props) => (
  <ColGrid {...props}></ColGrid>
);
