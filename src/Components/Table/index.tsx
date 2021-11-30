import React from "react";
import { TableElement, TableBody, RowTable, Content } from "./elem";

export interface TableProps {
  children?: JSX.Element;
}

const Table: React.FC<TableProps> = (props) => (
  <TableElement>
    <TableBody>
      <RowTable>
        <Content>
          <>{props.children}</>
        </Content>
      </RowTable>
    </TableBody>
  </TableElement>
);

export default Table;
