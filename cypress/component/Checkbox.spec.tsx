import React from "react";
import { mount } from "@cypress/react";
import Checkbox, { CheckboxProps } from "Components/Checkbox";
import { sizeList, colorList } from "../helpers";
import { colors } from "Shared/theme";

import {
  secondaryHeight,
  primaryFontSize,
  primaryColors,
} from "Shared/dynamic";

const Element: React.FC<CheckboxProps> = (props) => (
  <Checkbox className="checkbox-element" {...props}>
    {props.children}
  </Checkbox>
);

const sizes = [
  { name: "Height", css: "height", mock: secondaryHeight },
  { name: "Font", css: "font-size", mock: primaryFontSize },
];

describe("Dynamic Colors", () => {
  describe("Clicked", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);
        const color = primaryColors({ colorType });

        cy.get(".checkbox-element")
          .click()
          .should("have.css", "background-color", color);
      });
    });
  });

  describe("Not Clicked", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);
        const color = primaryColors({ colorType });

        cy.get(".checkbox-element").should(
          "have.css",
          "background-color",
          colors.noColor
        );
      });
    });
  });
});

describe("Dynamic Sizes", () => {
  sizes.forEach((des) => {
    describe(des.name, () => {
      sizeList.forEach((sizeType) => {
        it(sizeType, () => {
          mount(<Element size={sizeType}>Submit</Element>);
          const size = des.mock({ sizeType });

          cy.get(".checkbox-element").should("have.css", des.css, size);
          cy.log(`Size: ${sizeType} - ${size}`);
        });
      });
    });
  });
});

describe("Interactive", { browser: "chrome" || "edge" }, () => {
  describe("Checked Hover", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);
        const color = primaryColors({ colorType });

        cy.get(".checkbox-element")
          .click()
          .onHover()
          .pseudoCss("background-color")
          .parseColor()
          .should("equal", color);
      });
    });
  });

  describe("Border Hover", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);
        const color = primaryColors({ colorType });

        cy.get(".checkbox-element")
          .children()
          .invoke("mouseover")
          .onHover()
          .wait(3);
        cy.get(".checkbox-element").should("have.css", "border-color", color);
      });
    });
  });
});

describe("Child", () => {
  ["Checkbox", "Element"].forEach((name) => {
    it(`Text "${name}"`, () => {
      mount(<Element>{name}</Element>);
      cy.get(".checkbox-element").should("have.text", name);
    });
  });
});
