import React from "react";
import renderer from "react-test-renderer";
import { Button } from "../../components/custom-elements/index";

test("Button snapshot test", () => {
  const component = renderer.create(<Button />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
