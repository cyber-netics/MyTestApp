import React from "react";
import { mount } from "@cypress/react";
import { sizeList } from "../helpers";

import { styles as theme } from "theme";
import Layout from "Layout";

import { primaryHeight } from "Shared/dynamic";
import Avatar, { AvatarProps } from "Components/Avatar";

const Element: React.FC<AvatarProps> = (props) => (
  <Layout>
    <Avatar {...props} />
  </Layout>
);

describe("Avatar Sizing", () => {
  const printLog = (size: string) => {
    cy.log(`Width: ${size}`);
    cy.log(`Height: ${size}`);
  };

  sizeList.forEach((sizeType) => {
    it(sizeType, () => {
      mount(<Element size={sizeType} />);
      const size = primaryHeight({ theme, sizeType });

      cy.get("span").should("have.css", "width", size);
      cy.get("span").should("have.css", "height", size);
      printLog(size);
    });
  });
});
