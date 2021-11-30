// export { default as Button } from "./Components/Button";

import React from "react";
import ReactDOM from "react-dom";
import Button from "./Components/Button";
import Badge from "./Components/Badge";
import Checkbox from "./Components/Checkbox";
import Radio from "./Components/Radio";
import Select, { Option } from "./Components/Select";
import { InputNumber } from "./Components/Input";
import Thumbnail from "Components/Thumbnail";

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
      <div>
        <Radio />
      </div>

      <div>
        <Select>
          <Option key="opt1" value="Option One">
            Option One
          </Option>
          <Option key="opt2" value="Option Two">
            Option Two
          </Option>
        </Select>
      </div>

      <div>
        <Thumbnail
          alt={"imageName"}
          src={
            "https://cdn.shopify.com/s/files/1/0009/3080/7852/products/16_2_small.jpg?v=1629541016"
          }
        />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
