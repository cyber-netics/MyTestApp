import { keyframes, css } from "styled-components";

const open = keyframes`
  from { height: 0px; }
  to { height: 100%; }
`;

const close = keyframes`
  from { height: 100%; }
  to { height: 0px; }
`;

export const closeAnimation = css`
  animation-duration: 0.25s ease;
  animation-name: ${close};
`;

export const openAnimation = css`
  animation-duration: 0.25s ease
  animation-name: ${open};
  animation-fill-mode: forwards;
`;
