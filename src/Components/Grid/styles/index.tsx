import styled from "styled-components";
import { _col, _xs, _sm, _md, _lg, _xl } from "./media";

export const RowGrid = styled.div`
  row-gap: 0px;
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
`;

export const ColGrid = styled.div`
  ${_col};
  ${_xs};
  ${_sm};
  ${_md};
  ${_lg};
  ${_xl};
`;
