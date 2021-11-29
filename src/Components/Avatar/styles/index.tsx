import styled from "styled-components";
import { sizePrimary } from "Shared/styles";

export const Container = styled.div`
  position: relative;
  display: block;
  padding: 0.25em;
`;

export const Wrapper = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  line-height: 1;
`;

export const BaseElem = styled.span<InnerSizeTypes>`
  ${sizePrimary};
  line-height: 40px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: #ccc;
  border-radius: 2px;
`;
