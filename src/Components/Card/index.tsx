import React from "react";
import { Container, Header, Title, Body } from "./styles";

export interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = (props) => (
  <Container>
    <Header>
      <Title>
        <>{props.title}</>
      </Title>
    </Header>

    <Body>
      <>{props.children}</>
    </Body>
  </Container>
);

export default Card;
