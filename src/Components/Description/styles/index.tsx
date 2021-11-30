import styled from "styled-components";
import { borderDefault } from "Shared/styles";
import Radio from "Components/Radio";

export const Container = styled.div`
  background: #fff;
  background-clip: padding-box;
  color: #545454;
  padding: 0.5em;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
`;

export const Wrapper = styled.div`
  ${borderDefault};
  border-width: 1px;
  border-style: solid;
  display: table;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  color: #545454;
  border-radius: 5px;
`;

export const Divider = styled.div`
  border-top: 1px solid #e6e6e6;
  margin: 0 1.2em;
`;

/**
 *
 */
export const Content = styled.div`
  flex: 1;
  display: flex;
  padding: 0.82em 1.2em;
`;

export const ContentName = styled.div`
  color: #737373;
  padding-right: 1.1428571429em;
  flex: 0 1 5em;
`;

export const ContentInfo = styled.div`
  width: 60%;
  flex: 5;
  color: #333333;
  padding-right: 1.15em;
`;

export const ContentAction = styled.div`
  max-width: 10em;
  font-size: 0.95em;
  font-weight: 500;
`;

export const InfoText = styled.p`
  width: 90%;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ActionWrapper = styled.a`
  text-decoration: none;
  color: #000000;
  transition: color 0.2s ease-in-out;
  font-size: 0.855em;
  cursor: pointer;
`;

export const ActionButton = styled.span`
  color: #000000;
`;

export const RadioWrapper = styled.div`
  padding-right: 0.5em;
`;

export const RadioButton = styled(Radio)<{ onChange: () => void }>`
  padding-right: 1.14em;
  flex: 0 1 0.2em;
`;

export const ResultName = styled.span`
  font-weight: 500;
  color: #333333;
`;
