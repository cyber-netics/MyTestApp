import styled from "styled-components";
import { sizePrimary, borderDefault } from "Shared/styles";

export const Contaienr = styled.div<InnerColorTypes & InnerSizeTypes>`
  ${sizePrimary};
  border-radius: 8px;
  background: #fff;
  position: relative;
  text-align: left;
  margin-right: 0.8em;
  font-weight: normal;
  &:after {
    ${borderDefault};
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    z-index: 2;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  z-index: 1;
  text-align: left;
  font-weight: normal;
`;

export const ThumbnailImage = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  margin: 0;
  width: 100%;
`;
