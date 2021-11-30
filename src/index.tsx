// export { default as Button } from "./Components/Button";

import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/Button";
import Badge from "./Components/Badge";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div>
        <Button className="btn-element" color="primary">
          Submit
        </Button>
      </div>
      <div>
        <Badge size="medium" />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
