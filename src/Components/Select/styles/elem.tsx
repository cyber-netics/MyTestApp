import { css } from "styled-components";

export const select = css`
  outline: none;
  appearance: none;
  word-break: normal;
  font-weight: 500;
  color: red;
  font-size: 14px;
  width: 100%;

  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  color: #000000d9;

  padding-left: 15px;
  padding-right: 0;
`;

export const wrapper = css`
  width: 100%;
  position: relative;
`;

export const arrow = css`
  width: 10px;
  margin-left: 8px;
  margin-top: 3px;
`;

export const caret = css`
  position: absolute;
  display: block;
  width: 2.1428571429em;
  height: 43%;
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
  border-left: 1px rgba(179, 179, 179, 0.5) solid;
`;
