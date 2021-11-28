import styled from "styled-components";
import { button, loading } from "./styles";
import { Loading } from "Components/Animation/Loading";

import {
  hightPrimary,
  paddingPrimary,
  fontSizePrimary,
  fontColorPrimary,
  backgroundPrimary,
  backgroundSecondary,
} from "Shared/styles";

interface ButtonElemProps extends InnerColorTypes, InnerSizeTypes {
  focus?: boolean;
}

export const ButtonElem = styled.button<ButtonElemProps>`
  ${button};
  ${hightPrimary};
  ${paddingPrimary};
  ${fontSizePrimary};
  ${fontColorPrimary};
  ${backgroundPrimary};

  &:hover {
    ${backgroundSecondary};
  }
`;

export const LoadingAnim = styled(Loading)<InnerSizeTypes>`
  ${loading};
`;
