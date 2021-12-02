import { Row, Col } from "Components/Grid";
import styled from "styled-components";

export const FieldRow = styled(Row)`
  justify-content: space-between;
`;

export const FieldCol = styled(Col)`
  width: ${({ col }) => {
    const gap = col && col > 1 ? 0.5 * col : 0;
    return ` calc(100% / ${col} - ${gap}%)`;
  }};
`;
