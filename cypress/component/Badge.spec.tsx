import React from "react";
import { mount } from "@cypress/react";

import { styles as theme } from "theme";
import Layout from "Layout";

import Badge, { BadgeProps } from "Components/Badge";
import { sizeList, statusList, shapeList } from "../helpers";

import {
  secondaryHeight,
  secondaryFontSize,
  primaryStatusColors,
} from "Shared/dynamic";

const Element: React.FC<BadgeProps> = (props) => (
  <Layout>
    <Badge className="badge-element" {...props} />
  </Layout>
);

describe("Dynamic Sizes", () => {
  describe("Height", () => {
    shapeList.forEach((shapeType) => {
      describe(shapeType, () => {
        sizeList.forEach((sizeType) => {
          it(sizeType, () => {
            mount(<Element shape={shapeType} size={sizeType} />);
            const size = secondaryHeight({ theme, sizeType });
            const elem = cy.get(".badge-element");

            elem.should("have.css", "height", size);
            elem.should("have.css", "width", size);
            cy.log(`Size: ${sizeType} - ${size}`);
          });
        });
      });
    });
  });

  describe("Font", () => {
    shapeList.forEach((shapeType) => {
      describe(shapeType, () => {
        sizeList.forEach((sizeType) => {
          it(sizeType, () => {
            mount(<Element shape={shapeType} size={sizeType} />);
            const size = secondaryFontSize({ theme, sizeType });
            const elem = cy.get(".badge-element").children();

            elem.should("have.css", "font-size", size);
            cy.log(`Size: ${sizeType} - ${size}`);
          });
        });
      });
    });
  });
});

describe("Dynamic Colors", () => {
  describe("Background", () => {
    shapeList.forEach((shapeType) => {
      describe(shapeType, () => {
        statusList.forEach((colorType) => {
          it(colorType, () => {
            mount(<Element color={colorType} />);
            const color = primaryStatusColors({ theme, colorType });

            cy.get(".badge-element")
              .children()
              .should("have.css", "background-color", color);

            cy.log(`Color: ${colorType} - ${color}`);
          });
        });
      });
    });
  });
});

describe("InnerText", () => {
  describe("Size", () => {
    shapeList.forEach((shapeType) => {
      describe(shapeType, () => {
        shapeList.forEach((shapeType) => {
          it(shapeType, () => {
            mount(<Element shape={shapeType} count={10} />);
            const elem = cy.get(".badge-element").children();

            shapeType !== "dot" && elem.should("have.text", 10);
            shapeType === "dot" && elem.should("not.have.text", 10);
          });
        });
      });
    });
  });
});
