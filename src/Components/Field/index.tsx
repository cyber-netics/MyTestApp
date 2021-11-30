import React from "react";
import { Row, Col } from "Components/Grid";

interface IProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

const Field: React.FC<IProps> = (props) => {
  return (
    <Row>
      <>
        {!Array.isArray(props.children) && (
          <Col col={1}>
            <>{props.children}</>
          </Col>
        )}
      </>

      <>
        {Array.isArray(props.children) &&
          props.children.map((child, index) => {
            if (!Array.isArray(props.children)) return;
            return (
              <Col
                key={index}
                className={props.className}
                col={props.children.length}
              >
                <>{child}</>
              </Col>
            );
          })}
      </>
    </Row>
  );
};

export default Field;
