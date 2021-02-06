import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./Spinner";

it("should render component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Spinner />, div);
  ReactDOM.unmountComponentAtNode(div);
});
