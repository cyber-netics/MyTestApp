import React from "react";
import { TableElement, TableBody, TableRow, Content } from "./elem";

export interface TableProps {
  children: JSX.Element[];
}

const Table: React.FC<TableProps> = (props) => (
  <TableElement>
    <TableBody>{props.children}</TableBody>
  </TableElement>
);

export { TableRow, Content };
export default Table;
