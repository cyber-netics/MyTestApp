import styled, { keyframes, css } from "styled-components";
import { sizeTertiary } from "Shared/styles";

const loadingAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const loadingAnimationSafary = keyframes`
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
`;

const loadinganim = css`
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: ${loadingAnimation};

  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${loadingAnimationSafary};
`;

const base = css<InnerColorTypes>`
  ${sizeTertiary};
  border-radius: 50%;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
`;

export const Loading = styled.span`
  ${base};
  ${loadinganim};
`;
