import React from "react";
import { mount } from "@cypress/react";
import Radio, { RadioProps } from "Components/Radio";
import { sizeList, colorList } from "../helpers";
import { colors } from "Shared/theme";

import {
  primaryColors,
  secondaryHeight,
  primaryFontSize,
  secondaryColors,
} from "Shared/dynamic";

const Element: React.FC<RadioProps> = (props) => (
  <Radio className="radio-element" {...props}>
    <>{props.children}</>
  </Radio>
);

const sizeTests = [
  { name: "Height", css: "height", mock: secondaryHeight },
  { name: "Font", css: "font-size", mock: primaryFontSize },
];

describe("Dynamic Colors", () => {
  describe("Clicked", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);
        const color = primaryColors({ colorType });
        cy.get(".exo-radio").invoke("show").check({ force: true });
        cy.get(".exo-radio").invoke("show")

        cy.get(".radio-element")
          .pseudoCss("background-color", "after")
          .parseColor()
          .should("equal", color);
      });
    });
  });
});

describe("Dynamic Sizes", () => {
  sizeTests.forEach((des) => {
    describe(des.name, () => {
      sizeList.forEach((sizeType) => {
        it(sizeType, () => {
          mount(<Element size={sizeType}>Submit</Element>);
          const size = des.mock({ sizeType });

          cy.get(".radio-element").should("have.css", des.css, size);
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
        mount(<Element color={colorType} />);
        const color = primaryColors({ colorType });

        cy.get(".radio-element")
          .click()
          .onHover()
          .pseudoCss("background-color", "after")
          .parseColor()
          .should("equal", color);
      });
    });
  });

  // describe("Border Hover", () => {
  //   colorList.forEach((colorType) => {
  //     it(colorType, () => {
  //       mount(<Element color={colorType} />);
  //       const color = primaryColors({ colorType });

  //       cy.get(".radio-element").children().invoke("mouseover").onHover();
  //       cy.get(".radio-element").borderColor("have.css", color);
  //     });
  //   });
  // });
});

describe("Label", () => {
  ["Checkbox", "Element"].forEach((name) => {
    it(`Text "${name}"`, () => {
      mount(<Element>{name}</Element>);
      cy.get(".radio-element").should("have.text", name);
    });
  });
});
