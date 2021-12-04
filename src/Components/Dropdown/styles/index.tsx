import styled from "styled-components";
import { borderDefault, backgroundHighlight } from "Shared/styles";
import { container, header, body, divider } from "./styles";
import {
  IReady,
  IActive,
  toggleAnim,
  dynamicHight,
  dynamicDivider,
  dynamicPadding,
  visibility,
} from "./dynamic";

export const Container = styled.div`
  ${container};
  ${borderDefault};
`;

export const Header = styled.div<InnerDarkLightColorTypes & IActive>`
  ${header};
  ${backgroundHighlight};
`;

export const Divider = styled.div`
  ${divider};
  ${borderDefault};
`;

export const Body = styled.div<InnerDarkLightColorTypes & IActive & IReady>`
  ${body};
  ${visibility};
  ${toggleAnim};
  ${dynamicHight};
  ${dynamicPadding};
  ${backgroundHighlight};
`;
