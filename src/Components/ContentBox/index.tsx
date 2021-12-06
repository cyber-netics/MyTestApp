import React from "react";
import { Container, Wrapper } from "./styles";
import { ContentItem, OptionItem, Divider } from "./elems";
import { IContent, IOption } from "./elems"; //Types

export interface ContentBoxProps {
  items: IContent[];
  className?: string;
}
export const ContentBox: React.FC<ContentBoxProps> = (props) => (
  <Container>
    <Wrapper className={props.className}>
      {props.items.map((item, i) => (
        <>
          <ContentItem
            {...item}
            key={`${i}${item.name}`}
            className="content-item"
          />
          <Divider index={i} length={props.items.length} />
        </>
      ))}
    </Wrapper>
  </Container>
);

export interface OptionBoxProps {
  items: IOption[];
  className?: string;
}
export const OptionBox: React.FC<OptionBoxProps> = (props) => (
  <Container>
    <Wrapper className={props.className}>
      {props.items.map((item, i) => (
        <>
          <OptionItem
            {...item}
            key={`${i}${item.name}`}
            className="option-item"
          />
          <Divider index={i} length={props.items.length} />
        </>
      ))}
    </Wrapper>
  </Container>
);
