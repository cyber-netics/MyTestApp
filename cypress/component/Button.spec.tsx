import React from "react";
import { mount } from "@cypress/react";

import { sizeList } from "../helpers";
import Button, { ButtonProps } from "Components/Button";
import { primaryHeight, primaryFontSize, primarySpace } from "Shared/dynamic";

const Element: React.FC<ButtonProps> = (props) => (
  <Button className="btn-element" {...props}>
    {props.children}
  </Button>
);

const sizes = [
  { name: "Height", css: "min-height", mock: primaryHeight },
  { name: "Font", css: "font-size", mock: primaryFontSize },
  { name: "Spacing", css: "padding", mock: primarySpace, browser: "chrome" },
];

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
