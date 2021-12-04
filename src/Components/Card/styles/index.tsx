import styled from "styled-components";
import { borderDefault } from "Shared/styles";

export const Container = styled.div`
  ${borderDefault};
  color: #545454;
  background: #fff;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  margin-bottom: 0.65em;
  background-clip: padding-box;
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 0;
  display: table;
  box-sizing: border-box;
  padding: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  &:before {
    content: "";
    display: table;
  }
`;

export const Title = styled.h3`
  display: table-cell;
  width: 100%;
  color: #333333;
  cursor: inherit;
  font-family: inherit;
  vertical-align: top;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.3em;
  padding-top: 3px;
`;

export const Body = styled.div`
  background-color: #fafafa;
  border-top: 1px solid #d9d9d9;
`;
