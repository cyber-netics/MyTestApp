// export { default as Button } from "./Components/Button";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Button from "./Components/Button";
import Badge from "./Components/Badge";
import Checkbox from "./Components/Checkbox";
import Radio from "./Components/Radio";
import Select, { Option } from "./Components/Select";
import { InputNumber } from "./Components/Input";
import Thumbnail from "Components/Thumbnail";
import { Row, Col } from "Components/Grid";
import styled from "styled-components";

const Container = styled.div`
  html body {
    margin: 0 !important;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Container style={{ width: "100%", margin: "0" }}>
      <Row>
        <Col md={2} xl={2}>
          <div
            style={{
              borderRight: "1px solid #ffff",
              height: "15px",
              backgroundColor: "red",
            }}
          ></div>
        </Col>
        <Col md={2} xl={2}>
          <div
            style={{
              borderRight: "1px solid #ffff",
              height: "15px",
              backgroundColor: "red",
            }}
          ></div>
        </Col>
      </Row>
      {/* <div>
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
      </div> */}
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
