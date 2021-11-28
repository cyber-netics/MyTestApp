import { primaryHeight, primaryFontSize, primarySpace } from "Shared/dynamic";

const sizeList: ISizeTypes[] = ["small", "medium", "large"];

const sizes = [
  { name: "Height", css: "min-height", mock: primaryHeight },
  { name: "Font", css: "font-size", mock: primaryFontSize },
  {
    name: "Spacing",
    css: "padding",
    mock: primarySpace,
    browser: "chrome",
  },
];

describe("Dynamic Sizes", () => {
  it("visit", () => {
    cy.visit("http://localhost:8080");
    cy.wait(100);
  });

  sizes.forEach((des) => {
    describe(des.name, { browser: des.browser }, () => {
      sizeList.forEach((sizeType) => {
        it(sizeType, () => {
          const size = des.mock({ sizeType });
          cy.get(".btn-element")
            .invoke("prop", "size", sizeType)
            .should("have.css", des.css, size);
          cy.log(`Size: ${sizeType} - ${size}`);
        });
      });
    });
  });
});
