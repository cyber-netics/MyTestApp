import styled, { css } from "styled-components";

export const container = css`
  color: #545454;
  background: #fff;
  border-radius: 5px;
  min-height: 50px;
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

/**
 *
 */
export const ContentName = styled.span`
  flex: 0 1 5em;
  color: #737373;
  padding-right: 1.1428571429em;
`;

export const ContentBody = styled.div`
  width: 60%;
  flex: 5;
  color: #333333;
  padding-right: 1.15em;
`;

export const BodyText = styled.p`
  margin: 0;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
