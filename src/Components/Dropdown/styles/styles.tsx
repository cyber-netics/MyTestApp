import { css } from "styled-components";

export const container = css`
  display: block;
  position: relative;
`;

export const body = css`
  color: #545454;
  font-size: 14px;
  border: 1px solid;
  border-top: 0 !important;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  transition: all 0.15s ease-in-out;
`;

export const header = css`
  padding: 1rem;
  height: 20px;
  cursor: pointer;
  border: 1px solid;
  border-bottom: 0 !important;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
`;

export const divider = css`
  border-style: solid;
  width: 96%;
  right: 2%;
  position: absolute;
  border-width: 1px;
  border-bottom: 1px;
  transition: all 0.15s ease-in-out;
`;
