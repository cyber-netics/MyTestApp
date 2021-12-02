import React from "react";
import { TableElement, TableBody, TableRow, Content } from "./elem";

export interface TableProps {
  children: JSX.Element[];
}

const Table: React.FC<TableProps> = (props) => (
  <TableElement>
    <TableBody>
      <TableRow>
        <Content>
          <>{props.children[0]}</>
        </Content>
      </TableRow>
      <TableRow>
        <Content>
          <>{props.children[1]}</>
        </Content>
      </TableRow>
      <TableRow>
        <Content>
          <>{props.children[2]}</>
        </Content>
      </TableRow>
    </TableBody>
  </TableElement>
);

export default Table;
