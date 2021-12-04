import styled from "styled-components";
import { fontSizeSecondary, fontColorSecondary } from "Shared/styles";
import {
  wrapper,
  breadcrumbItems,
  breadcrumbItem,
  linkDivider,
  secondaryLink,
} from "./elem";

export const Wrapper = styled.nav`
  ${wrapper};
`;

export const BreadcrumbItems = styled.ol`
  ${breadcrumbItems}
`;

export const BreadcrumbItem = styled.li<InnerSizeTypes>`
  ${breadcrumbItem};
  ${fontSizeSecondary};
`;

export const LinkDivider = styled.span`
  ${linkDivider};
  ${fontColorSecondary};
`;

type IActive = { active?: boolean };
const activeAttrs = ({ active }: IActive) => {
  return {
    colorType: !active ? "dark" : "primary",
  };
};

export const SecondaryLink = styled.a.attrs<IActive>(activeAttrs)<IActive>`
  ${secondaryLink};
  ${fontColorSecondary};
`;
