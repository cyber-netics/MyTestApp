import { css } from "styled-components";

export const wrapper = css`
  display: inline-block;
  position: relative;
`;

export const badgeBase = css`
  color: #fff;
  margin: 1px;
  position: absolute;
  white-space: nowrap;
  font-weight: 600;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0 0 0 1px #fff;
`;

export const dot = css`
  width: calc(100% - 30%);
  height: calc(100% - 30%);
`;

export const overflow = css`
  padding: 0 8px;
  border-radius: 20px;
`;

export const circle = css`
  width: 100%;
  height: 100%;
  line-height: 1.4;
`;
