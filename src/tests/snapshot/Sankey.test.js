import React from "react";
import renderer from "react-test-renderer";
import Sankey from "../../components/sankey-chart/Sankey";
import mockdata from "../../assets/mock.json";

test("Sankey chart snapshot test", () => {
  const component = renderer.create(<Sankey data={mockdata["data"]}></Sankey>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
