import { css } from "styled-components";
import { borderRadius } from "Shared/styles";
import { fadeEffect, waveAnim } from "./anim";

const base = css`
  position: absolute;
  inset: 0;
  display: block;
  opacity: 1;
  content: "";
`;

const animation = css<InnerColorTypes>`
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation: ${fadeEffect} 1.5s cubic-bezier(0.08, 0.82, 0.17, 1),
    ${waveAnim} 1s cubic-bezier(0.08, 0.82, 0.17, 1);
`;

export const waveAnimation = css`
  &:after {
    ${base};
    ${animation};
    ${borderRadius};
  }
`;
