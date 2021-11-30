import { css } from "styled-components";

export const borderRadius = css<{ radius?: number }>`
  border-radius: ${({ radius }) => {
    return radius ? `${radius}px` : "inherit";
  }} !important;
`;

export const disabled = css<{ disabled?: boolean }>`
  ${(props) =>
    props.disabled &&
    `
      cursor: not-allowed;
      opacity: 0.4;
  `}
`;
