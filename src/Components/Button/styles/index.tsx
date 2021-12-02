import styled from "styled-components";
import { button, buttonText, loading } from "./styles";
import { borderRadius } from "Shared/styles";

import { Loading } from "Components/Animation/Loading";
import { waveOnFocus } from "Components/Animation/Wave";

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
  radius?: number;
}

export const ButtonElem = styled.button<ButtonElemProps>`
  ${button};
  ${waveOnFocus};
  ${hightPrimary};
  ${borderRadius};
  ${paddingPrimary};
  ${backgroundPrimary};
  ${fontColorPrimary};

  &:hover {
    ${backgroundSecondary};
  }
`;

export const ButtonText = styled.span`
  ${buttonText};
  ${fontSizePrimary};
`;

export const LoadingAnim = styled(Loading)<InnerSizeTypes>`
  ${loading};
`;
