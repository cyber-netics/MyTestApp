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
// import Breadcrumb from "Components/Breadcrumb";

// ReactDOM.render(
//   <Layout color="dark">
//     <div>
//       <Breadcrumb
//         active={2}
//         steps={["Cart", "Information", "Shipping", "Payment"]}
//       />
//     </div>
//   </Layout>,
//   document.getElementById("root")
// );
