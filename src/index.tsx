// export { default as Button } from "./Components/Button";

import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/Button";
import Badge from "./Components/Badge";
import Checkbox from "./Components/Checkbox";
import { InputNumber } from "./Components/Input";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <div>
        <Button className="btn-element" color="primary">
          Submit
        </Button>
      </div>
      <div>
        <Badge size="small" />
      </div>
      <div>
        <Checkbox size="large" />
      </div>
      <div>
        <Checkbox size="large" />
      </div>
      <div>
        <InputNumber />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
