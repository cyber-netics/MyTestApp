import React from "react";
import { mount } from "@cypress/react";

import { sizeList, colorList } from "../helpers";
import Button, { ButtonProps } from "Components/Button";
import {
  primarySpace,
  primaryColors,
  primaryHeight,
  primaryFontSize,
  secondaryColors,
  primaryFontColors,
} from "Shared/dynamic";

const Element: React.FC<ButtonProps> = (props) => (
  <Button className="btn-element" {...props}>
    {props.children}
  </Button>
);

type clickTypes = "Once" | "Twice";
const clicks: clickTypes[] = ["Once", "Twice"];

const sizes = [
  { name: "Height", css: "min-height", mock: primaryHeight },
  { name: "Font", css: "font-size", mock: primaryFontSize },
  { name: "Spacing", css: "padding", mock: primarySpace, browser: "chrome" },
];

const colors = [
  { name: "Background", css: "background-color", mock: primaryColors },
  { name: "Font", css: "color", mock: primaryFontColors },
];

const interactiveColorTest = [
  {
    name: "Hover",
    css: "backgroundColor",
    mock: secondaryColors,
    browser: "chrome",
  },
  {
    name: "Wave Animation",
    pseudo: "after",
    css: "boxShadow",
    mock: secondaryColors,
    browser: "chrome",
  },
];

describe("Interactive", () => {
  interactiveColorTest.forEach((des) => {
    describe(des.name, { browser: des.browser }, () => {
      colorList.forEach((colorType) => {
        it(colorType, () => {
          mount(<Element color={colorType}>Submit</Element>);
          const color = secondaryColors({ colorType });

          cy.get(".btn-element")
            .click()
            .onHover()
            .pseudoCss(des.css, des.pseudo)
            .parseColor()
            .should("equal", color);
        });
      });
    });
  });
});

describe("Dynamic Sizes", () => {
  sizes.forEach((des) => {
    describe(des.name, { browser: des.browser }, () => {
      sizeList.forEach((sizeType) => {
        it(sizeType, () => {
          mount(<Element size={sizeType}>Submit</Element>);
          const size = des.mock({ sizeType });

          cy.get(".btn-element").should("have.css", des.css, size);
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

          cy.get(".btn-element").should("have.css", des.css, color);
          cy.log(`Color: ${colorType} - ${color}`);
        });
      });
    });
  });
});

describe("Element", () => {
  describe("onClick", () => {
    clicks.forEach((clicked) => {
      it(clicked, () => {
        const onClick = cy.stub().as(`clicked-${clicked}`);
        mount(<Element onClick={onClick}>Submit</Element>);
        cy.get(".btn-element").timesToClick(clicked);
        cy.get(`@clicked-${clicked}`).should(`have.been.called${clicked}`);
      });
    });
  });

  describe("Child", () => {
    ["Submit", "Element"].forEach((name) => {
      it(`Text "${name}"`, () => {
        mount(<Element>{name}</Element>);
        cy.get(".btn-element").should("have.text", name);
      });
    });
  });
});
