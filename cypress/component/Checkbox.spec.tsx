import React from "react";
import { mount } from "@cypress/react";
import Checkbox, { CheckboxProps } from "Components/Checkbox";
import { sizeList, colorList } from "../helpers";
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

const colors = [
  { name: "Background", css: "background-color", mock: primaryColors },
];

describe("Interactive", () => {
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

        cy.get(".checkbox-element").children().invoke("mouseover").onHover();
        cy.get(".checkbox-element").should("have.css", "border-color", color);
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

describe("Dynamic Colors", () => {
  colors.forEach((des) => {
    describe(des.name, () => {
      colorList.forEach((colorType) => {
        it(colorType, () => {
          mount(<Element color={colorType}>Submit</Element>);
          const color = des.mock({ colorType });

          cy.get(".checkbox-element")
            .onHover()
            .click()
            .should("have.css", des.css, color);
          cy.log(`Color: ${colorType} - ${color}`);
        });
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
