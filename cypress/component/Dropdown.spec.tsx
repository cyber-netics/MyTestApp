import React from "react";
import { mount } from "@cypress/react";

import { styles as theme } from "theme";
import Layout from "Layout";

import { darkLightColors } from "../helpers";
import { primaryHighlight } from "Shared/dynamic";
import Dropdown from "Components/Dropdown";

const Element: React.FC<ElemDarkLightColorTypes> = (props) => (
  <Layout>
    <Dropdown header="hello" className="drop-element" color={props.color} />
  </Layout>
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

      const color = primaryHighlight({ theme, colorType });
      cy.get(".drop-header").should("have.css", "background-color", color);
    });
  });
});
