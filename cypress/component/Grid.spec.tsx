import React from "react";
import { mount } from "@cypress/react";
import { Row, Col } from "Components/Grid";
import "../helpers/base.css";

const Element: React.FC<{ col: number }> = (props) => {
  return (
    <div style={{ width: "100%", margin: "0", padding: 0 }}>
      <Row>
        <Col className="column" sm={props.col}>
          <div
            style={{
              height: "15px",
              backgroundColor: "red",
            }}
          ></div>
        </Col>
        <>
          {props.col > 1 && (
            <Col className="column" sm={props.col}>
              <div
                style={{
                  height: "15px",
                  backgroundColor: "red",
                }}
              ></div>
            </Col>
          )}
        </>
      </Row>
    </div>
  );
};

const columns = [1, 2, 3, 4];

const sizes = [
  { size: "Small", width: 576 },
  { size: "Medium", width: 992 },
  { size: "Large", width: 1199 },
  { size: "Xlarge", width: 1455 },
];

describe("tesing", () => {
  columns.forEach((col) => {
    describe(`column-${col}`, () => {
      sizes.forEach(({ size, width }) => {
        it(`${size} - ${width}`, () => {
          cy.viewport(width, 750);
          mount(<Element col={col} />);

          cy.get(".column")
            .should("have.css", "width")
            .approximatly(width / col);

          cy.get(".column").each(($elem) => {
            expect($elem.position().top).equal(0);
          });
        });
      });
    });
  });
});
