import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import NewsRow from "./NewsRow";

export default {
  component: NewsRow,
  title: "Molecules/NewsRow",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false, source: true },
  },
};

export const Sample = () => {
  const row = {
    num_comments: 1,
    url: "http://random.com",
    title: "test title",
    author: "test author",
    created_at: "2020-05-23T08:00:07.000Z",
  };
  return <NewsRow id="123" votes={123} row={row} />;
};
