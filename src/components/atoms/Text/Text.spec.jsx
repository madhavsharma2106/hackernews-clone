import { shallow } from "enzyme";
import React from "react";
import Text, { TextVariant } from "./Text";

describe("Text Component", () => {
  it("should render with default properties", () => {
    const wrapper = shallow(<Text></Text>);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render with variants ", () => {
    const wrapper = shallow(<Text variant={TextVariant.subText}> Test</Text>);
    expect(wrapper).toMatchSnapshot();
  });
});
