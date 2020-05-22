import React from "react";
import classNames from "classnames";

import "./Text.scss";

export const TextVariant = {
  regular: "regular",
  subText: "sub",
  link: "link",
  whiteHeading: "white-heading",
  subTextDark: "sub-text-dark",
};

function Text({
  variant = TextVariant.regular,
  clickable = false,
  children,
  style,
  inline = false,
  onClick,
}) {
  const classes = classNames([
    `${variant}-text`,
    clickable && `pointer`,
    inline && `inline-text`,
  ]);

  return (
    <p style={style} className={classes} onClick={onClick}>
      {children}
    </p>
  );
}

export default Text;
