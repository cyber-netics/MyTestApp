import { css } from "styled-components";

export const label = css`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;

  &:after {
    width: 0;
    height: 0;
    content: "\a0";
    overflow: hidden;
    display: inline-block;
  }
`;

export const wrapper = css`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  box-sizing: border-box;
`;

export const checkmark = css`
  position: relative;
  border-radius: 4px;
  transition: all 0.3s;

  width: auto;
  display: block;
  border-width: 1px;
  border-style: solid;

  &:after {
    top: 49%;
    left: 25%;
    content: " ";
    display: table;
    position: absolute;
    border: 2px solid #fff;
    box-sizing: border-box;
    border-top: 0;
    border-left: 0;
    width: calc(100% - 60%);
    height: calc(100% - 40%);
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
  }
`;

export const input = css`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  display: none;

  &:after {
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid #1890ff;
    border-radius: 2px;
    visibility: hidden;
    animation-fill-mode: backwards;
    content: "";
  }
`;

export const labelText = css`
  color: #757575;
  margin-left: 25px;
`;
