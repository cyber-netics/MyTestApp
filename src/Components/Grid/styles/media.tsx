import { css } from "styled-components";

export const _col = css<{ col?: number }>`
  ${({ col }) => col && `width: calc(100% / ${col});`};
`;

export const _xs = css<{ xs?: number }>`
  ${({ xs }) => xs && `width: calc(100% / ${xs});`};
`;

export const _sm = css<{ sm?: number }>`
  @media (min-width: 576px) {
    ${({ sm }) => sm && `width: calc(100% / ${sm});`};
  }
`;

export const _md = css<{ md?: number }>`
  @media (min-width: 992px) {
    ${({ md }) => md && `width: calc(100% / ${md});`};
  }
`;

export const _lg = css<{ lg?: number }>`
  @media (min-width: 1199px) {
    ${({ lg }) => lg && `width: calc(100% / ${lg});`};
  }
`;

export const _xl = css<{ xl?: number }>`
  @media (min-width: 1455px) {
    ${({ xl }) => xl && `width: calc(100% / ${xl});`};
  }
`;
