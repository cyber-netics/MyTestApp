import React from "react";
import { mount } from "@cypress/react";
import { colors } from "Shared/theme";
import { primaryColors, primaryShadow, primaryHeight } from "Shared/dynamic";
import { Input, InputEmail, InputNumber, InputProps } from "Components/Input";

import { colorList, sizeList } from "../helpers";

type InputTypes = "input" | "email" | "number";
interface InputCustomProps extends InputProps {
  inputType?: InputTypes;
}

const Element: React.FC<InputCustomProps> = (props) => {
  if (props.inputType === "number")
    return <InputNumber className="input-element" {...props} />;

  if (props.inputType === "email")
    return <InputEmail className="input-element" {...props} />;
  else return <Input className="input-element" {...props} />;
};

const sizeTests = [{ name: "Height", css: "min-height", mock: primaryHeight }];
const inputTypes: InputTypes[] = ["input", "email", "number"];

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
              const size = des.mock({ sizeType });

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
            const borderColor = primaryColors({ colorType });
            cy.get(".input-element")
              .focus()
              .borderColor("have.css", borderColor);
          });

          it("focus shadow", () => {
            mount(<Element color={colorType} inputType={inputType} />);
            const shadowColor = primaryShadow({ colorType });
            cy.get(".input-element")
              .noTransition()
              .focus()
              .should("have.css", "box-shadow")
              .parseColor("rgba")
              .should("equal", shadowColor);
          });

          it("hover border", () => {
            mount(<Element color={colorType} inputType={inputType} />);
            const color = primaryColors({ colorType });
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
    const borderPrimary = primaryColors({ colorType });
    const color = isValid ? colors.error : borderPrimary;
    cy.get(".input-element")
      .type("input string text")
      .borderColor("have.css", color);
  };

  describe("Error Prop", () => {
    beforeEach(() => {
      mount(<Element error={true} />);
    });

    it("border", () => {
      cy.get(".input-element").focus().borderColor("have.css", colors.error);
    });

    it("shadow", () => {
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
      beforeEach(() => {
        mount(<Element color={colorType} inputType="email" />);
      });

      it("InValid", () => {
        verifyEmailInput("testing email input", true);
      });

      it("Valid", () => {
        verifyEmailInput("testing@gmail.com", false);
      });
    });

    describe("Number", () => {
      beforeEach(() => {
        mount(
          <Element color={colorType} inputType="number">
            Submit
          </Element>
        );
      });

      it("Invalid", () => {
        verifyNumberInput(false, colorType);
      });

      it("Valid", () => {
        verifyNumberInput(false, colorType);
      });
    });
  });
});
