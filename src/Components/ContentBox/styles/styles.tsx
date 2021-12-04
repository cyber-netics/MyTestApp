import styled, { css } from "styled-components";
import { Divider } from "Components/Divider";

export const container = css`
  color: #545454;
  background: #fff;
  border-radius: 5px;
  min-height: 40px;
  border-width: 1px;
  border-style: solid;
  background-clip: padding-box;
`;

export const wrapper = css`
  width: 100%;
  display: table;
  position: relative;
  box-sizing: border-box;

  &:before {
    content: "";
    display: table;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  padding: 0.82em 1.2em;
`;

export const BaseDivider = styled(Divider)`
  margin: 0 1.2em;
`;

/**
 *
 */
export const ContentName = styled.span`
  flex: 0 1 5em;
  color: #737373;
  padding-right: 9.15px;
`;

export const ContentBody = styled.div`
  flex: 5;
  width: 60%;
  color: #333333;
  display: flex;
  padding-right: 1.15em;
`;

export const BodyText = styled.p`
  margin: 0;
  width: 90%;
  // overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 9.15px;
`;

/**
 *
 */
export const ContentFooter = styled.div`
  max-width: 10em;
  font-size: 0.95em;
  font-weight: 500;
`;

export const FooterWrapper = styled.a`
  cursor: pointer;
  color: #000000;
  font-size: 0.855em;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
`;

export const ActionButton = styled.span`
  color: #000000;
`;

export const FooterText = styled.span`
  color: #333333;
  cursor: pointer;
  font-weight: 500;
  text-align: right;
  white-space: nowrap;
  padding-left: 0.75em;
`;

/**
 *
 */
export const OptionLabel = styled.span`
  color: #545454;
  font-size: 13.5px;
  white-space: nowrap;
  padding-left: 7px;
`;