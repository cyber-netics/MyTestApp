import { css } from "styled-components";
import { openAnimation, closeAnimation } from "./anim";

export interface IReady {
  init?: boolean;
}
export interface IActive {
  active?: boolean;
}

export const visibility = css<IActive>`
  opacity: ${({ active }) => {
    return active ? 1 : 0.2;
  }};
  visibility: ${({ active }) => {
    return active ? "visible" : "hidden";
  }};
`;

export const dynamicHight = css<IActive>`
  height: ${({ active }) => {
    return active ? "200px" : "0";
  }};
`;

export const dynamicDivider = css<IActive>`
  visibility: ${({ active }) => {
    return active ? "visible" : "hidden";
  }};
`;

export const dynamicPadding = css<IActive>`
  padding: ${({ active }) => {
    return active ? "1px" : "0";
  }};
`;

export const toggleAnim = css<IActive & { init?: boolean }>`
  ${({ active, init }) => {
    return !init && (active ? openAnimation : closeAnimation);
  }};
`;
