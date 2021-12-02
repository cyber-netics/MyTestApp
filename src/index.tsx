export * from "./@types/global";
export { default as Layout } from "./Layout";

export * from "./Components/Grid";
export * from "./Components/Input";
export * from "./Components/Divider";
export { default as Table, TableProps } from "./Components/Table";
export { default as Field, FieldProps } from "./Components/Field";
export { default as Badge, BadgeProps } from "./Components/Badge";
export { default as Radio, RadioProps } from "./Components/Radio";
export { default as Button, ButtonProps } from "./Components/Button";
export { default as Section, SectionProps } from "./Components/Section";
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
// import { BrowserRouter as Router } from "react-router-dom";

// import Layout from "./Layout";
// import Button from "Components/Button";

// ReactDOM.render(
//   <Layout color="dark">
//     <Router>
//       <Button>Submit</Button>
//     </Router>
//   </Layout>,
//   document.getElementById("root")
// );
