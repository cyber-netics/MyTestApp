import { css } from "styled-components";

export const borderRadius = css<{ radius?: number }>`
  border-radius: ${({ radius }) => {
    return radius ? `${radius}px` : "inherit";
  }} !important;
`;
