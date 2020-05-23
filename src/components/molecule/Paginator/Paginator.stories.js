import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import Paginator from "./Paginator";

export default {
  component: Paginator,
  title: "Molecules/Paginator",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false, source: true },
  },
};

export const Sample = () => {
  const pageInfo = {
    current: 1,
    total: 3,
  };
  return <Paginator pageInfo={pageInfo} />;
};

export const FirstPage = () => {
  const pageInfo = {
    current: 0,
    total: 3,
  };
  return <Paginator pageInfo={pageInfo} />;
};

export const LastPage = () => {
  const pageInfo = {
    current: 2,
    total: 3,
  };
  return <Paginator pageInfo={pageInfo} />;
};
