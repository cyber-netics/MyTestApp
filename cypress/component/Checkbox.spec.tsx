import React from "react";
import { mount } from "@cypress/react";

import { colors, styles as theme } from "theme";
import Layout from "Layout";

import { sizeList, colorList } from "../helpers";
import Checkbox, { CheckboxProps } from "Components/Checkbox";

import {
  secondaryHeight,
  primaryFontSize,
  primaryColors,
  secondaryColors,
} from "Shared/dynamic";

const Element: React.FC<CheckboxProps> = (props) => (
  <Layout>
    <Checkbox className="checkbox-element" {...props}>
      {props.children}
    </Checkbox>
  </Layout>
);

const sizes = [
  { name: "Height", css: "height", mock: secondaryHeight },
  { name: "Font", css: "font-size", mock: primaryFontSize },
];

describe("Dynamic Colors", () => {
  describe("UnChecked", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType} />);
        cy.get(".checkbox-element").should(
          "have.css",
          "background-color",
          colors.noColor
        );
      });
    });
  });

  describe("Checked", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);
        const color = primaryColors({ theme, colorType });

        cy.get(".checkbox-element")
          .click()
          .should("have.css", "background-color", color);
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
          const size = des.mock({ theme, sizeType });

          cy.get(".checkbox-element").should("have.css", des.css, size);
          cy.log(`Size: ${sizeType} - ${size}`);
        });
      });
    });
  });
});

describe("Wave Animation", { browser: "chrome" || "edge" }, () => {
  colorList.forEach((colorType) => {
    it(colorType, () => {
      mount(<Element color={colorType}>Submit</Element>);
      const color = secondaryColors({ theme, colorType });

      cy.get(".checkbox-element")
        .click()
        .parent()
        .onHover()
        .wait(1)
        .pseudoCss("box-shadow", "after")
        .parseColor()
        .should("equal", color);
    });
  });
});

describe("Interactive Colors", { browser: "chrome" || "edge" }, () => {
  describe("Checked Hover", () => {
    colorList.forEach((colorType) => {
      it(colorType, () => {
        mount(<Element color={colorType}>Submit</Element>);
        const color = primaryColors({ theme, colorType });

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
        const color = primaryColors({ theme, colorType });

        cy.get(".checkbox-element").children().invoke("mouseover").onHover();
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
