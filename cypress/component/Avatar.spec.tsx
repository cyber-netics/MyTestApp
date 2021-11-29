import React from "react";
import { mount } from "@cypress/react";
import Avatar from "Components/Avatar";
import { primaryHeight } from "Shared/dynamic";
import { sizeList } from "../helpers";

describe("Avatar Sizing", () => {
  const printLog = (size: string) => {
    cy.log(`Width: ${size}`);
    cy.log(`Height: ${size}`);
  };

  sizeList.forEach((sizeType) => {
    it(sizeType, () => {
      mount(<Avatar size={sizeType} />);
      const size = primaryHeight({ sizeType });

      cy.get("span").should("have.css", "width", size);
      cy.get("span").should("have.css", "height", size);
      printLog(size);
    });
  });
});
