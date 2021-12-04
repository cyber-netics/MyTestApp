import { css } from "styled-components";

export const label = css`
  display: flex;
  cursor: pointer;
  position: relative;
`;

export const input = css`
  position: absolute;
  visibility: hidden;
  display: none;
`;

export const inputMark = css`
  opacity: 1;
  transition: all 0.25s;
  left: calc(20% - 1%);
  top: calc(20% - 2.3%);
`;

export const checkmark = css`
  display: block;
  position: relative;
  border-width: 1px;
  border-style: solid;
  left: 0;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;
  transition: all 0.3s;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`;

export const labelText = css`
  color: #757575;
  margin-left: 25px;
`;
