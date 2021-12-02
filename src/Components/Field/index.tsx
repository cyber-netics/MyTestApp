import React from "react";
import { FieldRow, FieldCol } from "./styles";

export interface FieldProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

const Field: React.FC<FieldProps> = (props: {
  children: JSX.Element | JSX.Element[];
  className?: string;
}) => {
  return (
    <FieldRow>
      <>
        {!Array.isArray(props.children) && (
          <FieldCol col={1}>
            <>{props.children}</>
          </FieldCol>
        )}
      </>

      <>
        {Array.isArray(props.children) &&
          props.children.map((child, index) => {
            if (!Array.isArray(props.children)) return;

            return (
              <FieldCol
                key={index}
                className={props.className}
                col={props.children.length}
              >
                <>{child}</>
              </FieldCol>
            );
          })}
      </>
    </FieldRow>
  );
};

export default Field;
