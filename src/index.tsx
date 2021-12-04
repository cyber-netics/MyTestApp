export * from "./@types/global";
export { default as Layout } from "./Layout";

export * from "./Components/Grid";
export * from "./Components/Input";
export * from "./Components/Divider";
export * from "./Components/ContentBox";

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
// import { BrowserRouter as Router } from "react-router-dom";

// import Layout from "Layout";
// import { OptionBox, ContentBox } from "Components/ContentBox";
// import Radio from "Components/Radio";

// ReactDOM.render(
//   <Layout color="dark">
//     <div>
//       <div style={{ padding: "2rem" }}>
//         <OptionBox
//           items={[
//             { name: "Regular Shipping", result: "Free" },
//             { name: "Overnight Shipping", result: "Free" },
//           ]}
//         />
//       </div>
//       <div style={{ padding: "2rem" }}>
//         <ContentBox
//           items={[
//             {
//               name: "Contact",
//               body: "example123@gmail.com",
//               action: {
//                 actionName: "Change",
//                 function: () => {
//                   console.log("change...");
//                 },
//               },
//             },
//             {
//               name: "Address",
//               body: "12345 Testing st. Helloworld, CA 913010",
//               action: {
//                 actionName: "Change",
//                 function: () => {
//                   console.log("change...");
//                 },
//               },
//             },
//           ]}
//         />
//       </div>
//     </div>
//   </Layout>,
//   document.getElementById("root")
// );
