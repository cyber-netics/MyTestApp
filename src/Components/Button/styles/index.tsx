import styled, { css } from "styled-components";
import { button, loading } from "./styles";

import { Loading } from "Components/Animation/Loading";
import { waveAnimation } from "Components/Animation/Wave";

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

const animation = css<{ focus?: boolean }>`
  ${({ focus }) => (focus ? waveAnimation : null)};
`;

export const ButtonElem = styled.button<ButtonElemProps>`
  ${button};
  ${animation};
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
