import React from "react";
import classNames from "classnames";

import "./Text.scss";

export const TextVariant = {
  regular: "regular-text",
  subText: "sub-text",
  link: "link-text",
};

function Text({ variant = TextVariant.regular, children, style }) {
  const classes = classNames([`text-${variant}`]);

  return (
    <p style={style} className={classes}>
      {children}
    </p>
  );
}

export default Text;
