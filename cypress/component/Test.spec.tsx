import React from "react";
import { mount } from "@cypress/react";

const Button: React.FC = () => {
  return <h1>Hello</h1>;
};

describe("Avatar Sizing", () => {
  it("tesing", () => {
    mount(<Button />);
  });
});
