import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

it("should render component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});
