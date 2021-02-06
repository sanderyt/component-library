import React from "react";
import ReactDOM from "react-dom";
import TemplateName from "./TemplateName";

it("should render component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TemplateName />, div);
  ReactDOM.unmountComponentAtNode(div);
});
