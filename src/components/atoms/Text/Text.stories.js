import React from "react";
import Text, { TextVariant } from "./Text";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { includeVariants } from "../../../utils";

export default {
  component: Text,
  title: "Atoms/Text",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false, source: true },
  },
};

export const Sample = () => {
  const sample = text("text", "Sample Text");
  const variant = select(
    "Variant",
    includeVariants(TextVariant),
    TextVariant.regular
  );

  return <Text variant={variant}>{sample}</Text>;
};

export const ClickableText = () => {
  const sample = text("text", "This Text is clickable");
  const variant = select(
    "Variant",
    includeVariants(TextVariant),
    TextVariant.regular
  );

  return (
    <Text variant={variant} clickable>
      {sample}
    </Text>
  );
};

export const InlineText = () => {
  const sample = text("text", "This Text is rendered as Display:Inline");
  const variant = select(
    "Variant",
    includeVariants(TextVariant),
    TextVariant.regular
  );

  return (
    <Text variant={variant} inline>
      {sample}
    </Text>
  );
};
