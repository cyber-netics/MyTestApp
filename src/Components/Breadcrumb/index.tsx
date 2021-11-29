import React from "react";
import {
  Wrapper,
  BreadcrumbItems,
  BreadcrumbItem,
  LinkDivider,
  SecondaryLink,
} from "./styles";

export interface BreadcrumbProps extends ElemSizeTypes, ElemColorTypes {
  steps: string[];
  className?: string;
  active?: number | string;
}

interface LinkItemProps extends BreadcrumbProps {
  link: string;
  index: number;
  children: JSX.Element;
}

const notLastElem = (length: number, index: number): boolean => {
  return length - 1 !== index;
};

const LinkItem = ({ active, steps, link, index, children }: LinkItemProps) => (
  <>
    <SecondaryLink active={active === link}>{children}</SecondaryLink>
    {notLastElem(steps.length, index) && <LinkDivider />}
  </>
);

const Breadcrumb: React.FC<BreadcrumbProps> = (props) => {
  return (
    <Wrapper>
      <BreadcrumbItems className={props.className}>
        {props.steps.map((link, index) => (
          <BreadcrumbItem
            key={`${link}${index}`}
            sizeType={props.size}
            className="breadcrumb-item"
          >
            <>
              <LinkItem
                link={link}
                index={index}
                steps={props.steps}
                active={props.steps[Number(props.active)]}
              >
                <span>{link}</span>
              </LinkItem>
            </>
          </BreadcrumbItem>
        ))}
      </BreadcrumbItems>
    </Wrapper>
  );
};

export default Breadcrumb;
