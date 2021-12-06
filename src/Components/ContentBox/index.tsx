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
    <Wrapper>
      {props.items.map((item, i) => (
        <>
          <ContentItem key={`${i}${item.name}`} {...item} />
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
    <Wrapper>
      {props.items.map((item, i) => (
        <>
          <OptionItem
            {...item}
            key={`${i}${item.name}`}
            className={props.className}
          />
          <Divider index={i} length={props.items.length} />
        </>
      ))}
    </Wrapper>
  </Container>
);
