import React from "react";
import { mount } from "@cypress/react";

import { sizeList } from "../helpers";
import { primaryHeight } from "Shared/dynamic";

import { styles as theme } from "theme";
import Layout from "Layout";
import Thumbnail from "Components/Thumbnail";

const imgUrl =
  "https://cdn.shopify.com/s/files/1/0009/3080/7852/products/16_2_small.jpg?v=1629541016";
const Element: React.FC<{ size?: ISizeTypes }> = (props) => (
  <Layout>
    <Thumbnail
      size={props.size}
      className="thumb-element"
      alt={"imageName"}
      src={imgUrl}
    />
  </Layout>
);

describe("Dynamic Size", () => {
  sizeList.forEach((sizeType) => {
    it(sizeType, () => {
      mount(<Element size={sizeType} />);
      const size = primaryHeight({ theme, sizeType });

      cy.get(".thumb-element").should("have.css", "height", size);
      cy.get(".thumb-element").should("have.css", "width", size);
    });
  });
});

describe("Element", () => {
  it("Image Src", () => {
    mount(<Element />);
    cy.get(".thumb-element")
      .children()
      .children()
      .should("have.attr", "src", imgUrl);
  });
});
