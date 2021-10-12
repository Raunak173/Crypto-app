import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./Context";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);
