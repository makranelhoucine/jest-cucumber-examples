import * as React from "react";
import * as ReactDOM from "react-dom";
import * as renderer from "react-test-renderer";

import Component from "./";

describe("Layout: Footer should...", () => {
  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Component />, div);
  });

  test("Render match snapshot", () => {
    const component = renderer.create(<Component />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
