import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import Chart from "./Chart";

export default {
  component: Chart,
  title: "Organisms/Chart",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false, source: true },
  },
};

export const Sample = () => {
  const data = [
    { id: 1, votes: 9 },
    { id: 2, votes: 3 },
    { id: 3, votes: 6 },
    { id: 4, votes: 3 },
    { id: 5, votes: 8 },
  ];
  return <Chart data={data} />;
};
