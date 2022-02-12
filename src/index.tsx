import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";
import { Divider, Typography } from "antd";

ReactDOM.render(
  <React.StrictMode>
    <Divider orientation="center">
      <Typography.Title>VDP APKs</Typography.Title>
    </Divider>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
