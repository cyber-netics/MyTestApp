import React from "react";
import { mount } from "@cypress/react";
import styled from "styled-components";

const ElementStyle = styled.div`
  height: 20px;
  width: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  box-shadow: 0 0 0 6px rgba(255, 0, 0, 0);
`;

describe("test", () => {
  it("run", () => {
    mount(<ElementStyle className="test-elem" />);
    cy.get(".test-elem")
      .should("have.css", "box-shadow")
      .parseColor()
      .should("equal", "rgb(255, 0, 0)");
  });
});
