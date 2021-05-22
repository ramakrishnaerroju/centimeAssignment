import React from "react";
import { Button } from "../components/custom-elements/index";
import { shallow } from "enzyme";

describe("Testing Button component", () => {
  it("Renders correctly in DOM", () => {
    shallow(<Button btnText="test" />);
  });

  it("Expects to find button HTML element in the DOM", () => {
    const wrapper = shallow(<Button btnText="test" />);
    expect(wrapper.find("button")).toHaveLength(1);
  });

  it("Expects to see Button click event working", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button callback={mockCallBack} btnText="test" />);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
