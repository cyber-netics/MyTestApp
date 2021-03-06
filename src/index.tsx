export * from "./@types/global";
export { default as Layout } from "./Layout";

export * from "./Components/Grid";
export * from "./Components/Input";
export * from "./Components/Divider";
export * from "./Components/ContentBox";

export { default as Card, CardProps } from "./Components/Card";
export { default as Field, FieldProps } from "./Components/Field";
export { default as Badge, BadgeProps } from "./Components/Badge";
export { default as Radio, RadioProps } from "./Components/Radio";
export { default as Button, ButtonProps } from "./Components/Button";
export { default as Section, SectionProps } from "./Components/Section";
export { default as Table, TableRow, Content } from "./Components/Table";
export { default as Dropdown, DropdownProps } from "./Components/Dropdown";
export { default as Checkbox, CheckboxProps } from "./Components/Checkbox";
export { default as Select, Option, SelectProps } from "./Components/Select";
export { default as Thumbnail, ThumbnailProps } from "./Components/Thumbnail";
export { Input, InputEmail, InputNumber, InputProps } from "./Components/Input";

export {
  default as Breadcrumb,
  BreadcrumbProps,
} from "./Components/Breadcrumb";

// import React from "react";
// import ReactDOM from "react-dom";
// import Layout from "Layout";
// import Dropdown from "Components/Dropdown";

// ReactDOM.render(
//   <Layout color="dark">
//     <div style={{ padding: "1rem" }}>
//       <Dropdown header={<div>Hello</div>}>
//         <div style={{ padding: "1.5rem" }}>
//           <h1>hello world</h1>
//         </div>
//       </Dropdown>
//     </div>
//   </Layout>,
//   document.getElementById("root")
// );
