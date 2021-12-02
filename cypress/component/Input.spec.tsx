import React from "react";
import { mount } from "@cypress/react";

import { colorList, sizeList } from "../helpers";
import { colors, styles as theme } from "theme";
import Layout from "Layout";

import { primaryColors, primaryShadow, primaryHeight } from "Shared/dynamic";
import { Input, InputEmail, InputNumber, InputProps } from "Components/Input";

type InputTypes = "input" | "email" | "number";
interface InputCustomProps extends InputProps {
  inputType?: InputTypes;
}

const InputElement: React.FC<InputCustomProps> = (props) => {
  if (props.inputType === "number") return <InputNumber {...props} />;
  if (props.inputType === "email") return <InputEmail {...props} />;
  else return <Input {...props} />;
};

const Element: React.FC<InputCustomProps> = (props) => (
  <Layout>
    <InputElement className="input-element" {...props} />
  </Layout>
);

const inputTypes: InputTypes[] = ["input", "email", "number"];
const sizeTests = [{ name: "Height", css: "min-height", mock: primaryHeight }];

/**
 *
 *
 */
describe("Dynamic Sizes", () => {
  inputTypes.forEach((inputType) => {
    describe(inputType, () => {
      sizeTests.forEach((des) => {
        describe(des.name, () => {
          sizeList.forEach((sizeType) => {
            it(sizeType, () => {
              mount(
                <Element size={sizeType} inputType={inputType}>
                  Submit
                </Element>
              );
              const size = des.mock({ theme, sizeType });

              cy.get(".input-element").should("have.css", des.css, size);
              cy.log(`Size: ${sizeType} - ${size}`);
            });
          });
        });
      });
    });
  });
});

describe("Dynamic Colors", () => {
  inputTypes.forEach((inputType) => {
    describe(inputType, () => {
      colorList.forEach((colorType) => {
        describe(colorType, () => {
          it("focus border", () => {
            mount(<Element color={colorType} inputType={inputType} />);
            const borderColor = primaryColors({ theme, colorType });
            cy.get(".input-element")
              .focus()
              .borderColor("have.css", borderColor);
          });

          it("focus shadow", () => {
            mount(<Element color={colorType} inputType={inputType} />);
            const shadowColor = primaryShadow({ theme, colorType });
            cy.get(".input-element")
              .noTransition()
              .focus()
              .should("have.css", "box-shadow")
              .parseColor("rgba")
              .should("equal", shadowColor);
          });

          it("hover border", () => {
            mount(<Element color={colorType} inputType={inputType} />);
            const color = primaryColors({ theme, colorType });
            cy.get(".input-element")
              .noTransition()
              .click()
              .trigger("mouseover")
              .borderColor("have.css", color);
          });
        });
      });
    });
  });
});

describe("Border Error", () => {
  const verifyEmailInput = (inputText: string, hasErr: boolean) => {
    cy.get(".input-element")
      .type(inputText)
      .blur()
      .invoke("val")
      .then((text) => {
        expect(text).equal(inputText);
      });

    cy.get(".input-element").borderColor(
      `${!hasErr ? "not." : ""}have.css`,
      colors.error
    );
  };

  const verifyNumberInput = (isValid: boolean, colorType: IColorTypes) => {
    const borderPrimary = primaryColors({ theme, colorType });
    const color = isValid ? colors.error : borderPrimary;
    cy.get(".input-element")
      .type("input string text")
      .borderColor("have.css", color);
  };

  describe("Error Prop", () => {
    it("border", () => {
      mount(<Element error={true} />);
      cy.get(".input-element").focus().borderColor("have.css", colors.error);
    });

    it("shadow", () => {
      mount(<Element error={true} />);
      cy.get(".input-element")
        .noTransition()
        .focus()
        .should("have.css", "box-shadow")
        .parseColor("rgba")
        .should("equal", colors.error1);
    });
  });

  colorList.forEach((colorType) => {
    describe("Email", () => {
      it("InValid", () => {
        mount(<Element color={colorType} inputType="email" />);
        verifyEmailInput("testing email input", true);
      });

      it("Valid", () => {
        mount(<Element color={colorType} inputType="email" />);
        verifyEmailInput("testing@gmail.com", false);
      });
    });

    describe("Number", () => {
      it("Invalid", () => {
        mount(<Element color={colorType} inputType="number" />);
        verifyNumberInput(false, colorType);
      });

      it("Valid", () => {
        mount(<Element color={colorType} inputType="number" />);
        verifyNumberInput(false, colorType);
      });
    });
  });
});
