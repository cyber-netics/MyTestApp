import React from "react";
import { mount } from "@cypress/react";

import { primaryHighlight } from "Shared/dynamic";
import { darkLightColors } from "../helpers";
import Dropdown from "Components/Dropdown";

const Element: React.FC<ElemDarkLightColorTypes> = (props) => (
  <Dropdown header="hello" className="drop-element" color={props.color} />
);

describe("Open / Close", () => {
  beforeEach(() => {
    mount(<Element />);
  });

  it("Closed", () => {
    cy.get(".drop-element").should("have.css", "height", "0px");
  });

  it("Open", () => {
    cy.get(".drop-header").click();
    cy.get(".drop-element").should("have.css", "height", "200px");
  });
});

describe("Dynamic Color", () => {
  darkLightColors.forEach((colorType) => {
    it(colorType, () => {
      mount(<Element color={colorType} />);

      const color = primaryHighlight({ colorType });
      cy.get(".drop-header").should("have.css", "background-color", color);
    });
  });
});
