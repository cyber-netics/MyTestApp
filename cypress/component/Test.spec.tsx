import React from "react";
import { mount } from "@cypress/react";

const Button: React.FC = () => {
  return (
    <div className="button-elem">
      <h1>Hello</h1>
    </div>
  );
};

describe("Avatar Sizing", () => {
  it("tesing", () => {
    mount(<Button />);
    cy.get(".button-elem").should("have.text", "Hello");
  });
});
