import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  color: red;
`;

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <Container>{props.label}</Container>;
};

export default Button;
