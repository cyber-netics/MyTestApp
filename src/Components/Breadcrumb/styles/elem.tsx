import { css } from "styled-components";

export const wrapper = css`
  position: relative;
`;

export const breadcrumbItem = css`
  display: flex;
  align-items: center;
`;

export const secondaryLink = css`
  text-decoration: none;
  transition: color 0.3s ease-in-out;
`;

export const breadcrumbItems = css`
  padding: 0;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  list-style-type: none;
`;

export const linkDivider = css`
  fill: currentColor;
  margin: 0 0.6em 0.6em;
  width: 10px;
  height: 10px;
  display: inline-block;
  vertical-align: middle;
  font-size: 1.1em;
  &:after {
    content: ">";
  }
`;
