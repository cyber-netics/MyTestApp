import React from "react";
import { Container, Wrapper } from "./styles";
import { ContentItem, Divider, IContent } from "./elems";

export interface ContentBoxProps {
  items: IContent[];
}

const ContentBox: React.FC<ContentBoxProps> = (props) => {
  return (
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
};

export default ContentBox;
