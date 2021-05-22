import React from "react";
import renderer from "react-test-renderer";
import Form from "../../components/form/FormComponent";

test("Form snapshot test", () => {
  const mockCallBack = jest.fn();
  const component = renderer.create(<Form onSubmitCallback={mockCallBack} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
