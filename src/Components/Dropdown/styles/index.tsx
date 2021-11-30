import styled from "styled-components";
import { borderDefault, backgroundHighlight } from "Shared/styles";
import { container, header, body, divider } from "./elem";
import {
  IReady,
  IActive,
  toggleAnim,
  dynamicHight,
  dynamicDivider,
  dynamicPadding,
} from "./dynamic";

export const Container = styled.div`
  ${container};
`;

export const Header = styled.div<InnerDarkLightColorTypes>`
  ${header};
  ${borderDefault};
  ${backgroundHighlight};
`;

export const Divider = styled.div`
  ${divider};
  ${borderDefault};
  ${dynamicDivider};
`;

export const Body = styled.div<InnerDarkLightColorTypes & IActive & IReady>`
  ${body};
  ${toggleAnim};
  ${dynamicHight};
  ${borderDefault};
  ${dynamicPadding};
  ${backgroundHighlight};
`;
