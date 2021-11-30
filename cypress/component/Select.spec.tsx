import React from "react";
import { mount } from "@cypress/react";
import Select, { Option, SelectProps } from "Components/Select";
import { sizeList } from "../helpers";

import {
  primaryHeight,
  primaryFontSize,
  primaryColors,
  primaryShadow,
} from "Shared/dynamic";

const optionList = [
  { key: "1", name: "Option One" },
  { key: "2", name: "Option Two" },
];

const Element: React.FC<SelectProps> = (props) => (
  <Select className="select-element" {...props}>
    {optionList.map((option) => (
      <Option key={option.key} value={option.name}>
        {option.name}
      </Option>
    ))}
  </Select>
);

describe("Interactive", { browser: "chrome" || "edge" }, () => {
  describe("Hover", () => {
    sizeList.forEach((colorType) => {
      describe(colorType, () => {
        it("Border Color", () => {
          const color = primaryColors({ colorType: "primary" });
          mount(<Element />);
          cy.get(".select-element").invoke("show").onHover();
          cy.get(".select-element").focus().borderColor("have.css", color);
        });

        it("Border Shadow", () => {
          mount(<Element />);
          cy.get(".select-element").invoke("show").onHover();
          const shadowColor = primaryShadow({ colorType: "primary" });
          cy.get(".select-element")
            .focus()
            .pseudoCss("box-shadow")
            .parseColor("rgba")
            .should("equal", shadowColor);
        });
      });
    });
  });
});

describe("Dynamic Size", () => {
  describe("Height", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType} />);
        const size = primaryHeight({ sizeType });
        cy.get(".select-element").should("have.css", "min-height", size);
      });
    });
  });

  describe("Font", () => {
    sizeList.forEach((sizeType) => {
      it(sizeType, () => {
        mount(<Element size={sizeType} />);
        const size = primaryFontSize({ sizeType });

        cy.get(".select-element")
          .children()
          .should("have.css", "font-size", size);
      });
    });
  });
});

describe("Option", () => {
  it("Value", () => {
    optionList.forEach((option) => {
      mount(<Element />);

      cy.get(".select-element")
        .select(option.name)
        .invoke("select")
        .should("have.value", option.name);
    });
  });
});
