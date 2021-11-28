// export { default as Button } from "./Components/Button";

import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/Button";

ReactDOM.render(
  <React.StrictMode>
    <Button className="btn-element" color="primary">
      Submit
    </Button>
  </React.StrictMode>,
  document.getElementById("root")
);
