import { shallow } from "enzyme";
import React from "react";
import NewsRow from "./NewsRow";

const row = {
  num_comments: 1,
  url: "http://random.com",
  title: "test title",
  author: "test author",
};

describe("News Row Component", () => {
  it("should render row without errors", () => {
    const wrapper = shallow(
      <NewsRow
        id="123"
        votes={123}
        row={row}
        addVote={() => {}}
        hideRow={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
