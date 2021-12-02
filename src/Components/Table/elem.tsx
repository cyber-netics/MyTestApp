import styled from "styled-components";

export const TableElement = styled.table`
  margin-top: 0.7em;
  margin-bottom: 1em;
  position: relative;
  z-index: 1;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableBody = styled.tbody`
  width: 100%;
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const DescribleItem = styled.th`
  padding-top: 0;
  padding-bottom: 0;
  text-align: left;
  width: 100%;
  font-weight: normal;
`;

export const TableRow = styled.tr`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`;

export const Content = styled.td`
  white-space: nowrap;
`;

export const Describe = styled.th`
  padding-top: 0;
  padding-bottom: 0;
  text-align: left;
  width: 100%;
  font-weight: normal;
`;

export const Spaceing = styled.tr`
  height: 0.5em;
`;

export const Prefix = styled.span`
  color: #717171;
  font-size: 0.857em;
  margin-right: 0.75em;
  vertical-align: 0.2em;
`;

export const TextSimple = styled.span`
  width: 1em;
  text-align: left;
  white-space: nowrap;
`;

export const TextSmall = styled.span`
  display: block;
  color: #717171;
  font-size: 0.85em;
`;

export const TextHighlight = styled.span`
  color: #323232;
  text-align: left;
  font-size: 1.14em;
  white-space: nowrap;
`;

export const TextBold = styled.span`
  color: #323232;
  text-align: left;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
`;

export const TextFinal = styled.span`
  color: #323232;
  font-size: 1.714em;
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1em;
  text-align: right;
  white-space: nowrap;
`;
