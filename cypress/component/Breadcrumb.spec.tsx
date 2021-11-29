import React from "react";
import { mount } from "@cypress/react";
import { secondaryFontColors, secondaryFontSize } from "Shared/dynamic";
import Breadcrumb, { BreadcrumbProps } from "Components/Breadcrumb";

import { sizeList, steps } from "../helpers";

const Element: React.FC<BreadcrumbProps> = (props) => (
  <Breadcrumb className="breadcrumb-element" {...props}>
    {props.children}
  </Breadcrumb>
);

describe("Font Color", () => {
  it("Active", () => {
    steps.forEach((step, index) => {
      mount(<Element steps={steps} active={index} />);

      const activeColor = secondaryFontColors({ colorType: "dark" });
      cy.get(".breadcrumb-element")
        .find("li")
        .eq(index)
        .should("have.text", steps[index])
        .should("have.css", "color", activeColor);
    });
  });

  it("Inactive", () => {
    steps.forEach((step, index) => {
      mount(<Element steps={steps} active={index} />);

      const inactiveColor = secondaryFontColors({ colorType: "primary" });
      cy.get(".breadcrumb-element>li")
        .eq(index - 1)
        .find("a")
        .should("have.css", "color", inactiveColor);
    });
  });
});

describe("Font Size", () => {
  sizeList.forEach((sizeType) => {
    it(sizeType, () => {
      mount(<Element steps={steps} size={sizeType} />);
      const size = secondaryFontSize({ sizeType });

      cy.get(".breadcrumb-element>li")
        .find("a")
        .should("have.css", "font-size", size);
    });
  });
});
