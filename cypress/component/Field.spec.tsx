import React from "react";
import { mount } from "@cypress/react";
import Field from "Components/Field";
import "../helpers/base.css";

interface ElemProps {
  className?: string;
}
const Elem: React.FC<ElemProps> = (props) => {
  return (
    <div
      {...props}
      style={{
        height: "15px",
        minWidth: "15px",
        background: "red",
      }}
    >
      <div
        style={{
          border: "1px solid #fff",
          height: "15px",
          minWidth: "15px",
        }}
      ></div>
    </div>
  );
};

const elems = [0, 1, 2, 3, 4, 5];

describe("Elements", () => {
  it("Row", () => {
    mount(
      <Field>
        {elems.map((elem) => (
          <Elem key={elem} />
        ))}
      </Field>
    );
  });

  it("One Line", () => {
    mount(
      <Field className="elementasdf">
        {elems.map((elem) => (
          <Elem className="element" key={elem} />
        ))}
      </Field>
    );

    cy.get(".element").each(($elem) => {
      expect($elem.position().top).equal(0);

      //
      const elementWidth = $elem.width();
      const winWidth = window.innerWidth / elems.length;
      expect(elementWidth).closeTo(winWidth, 0.1);

      //
      const top = $elem.position().top;
      expect(top).equal(0);
    });
  });
});
