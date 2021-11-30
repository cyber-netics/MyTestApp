import React from "react";
import { Container, Wrapper, Header, Title, Description, Body } from "./styles";

export interface SectionProps {
  title?: string;
  description?: string;
  children?: JSX.Element;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <>
            {props.title && (
              <>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
              </>
            )}
          </>
        </Header>
        <Body>{props.children}</Body>
      </Wrapper>
    </Container>
  );
};

export default Section;
