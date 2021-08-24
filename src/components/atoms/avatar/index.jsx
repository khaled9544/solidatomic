import React from "react";
import classNames from "classnames";
import propTypes from "prop-types";

import "./style.css";

const Avatar = (props) => {
  const { size, imageSource } = props;
  const style = {
    backgroundImage: `url(${imageSource})`,
  };
  const classes = classNames({
    avatar: true,
    [`avatar-${size}`]: true,
  });
  return <div className={classes} style={style} />;
};

const FallBackAvatar = (props) => {
  const { letter, size } = props;
  const classes = classNames({
    avatar: true,
    [`avatar-${size}`]: true,
  });
  return <div className={classes}>{letter}</div>;
};

FallBackAvatar.defaultProps = {
  letter: "",
  size: "small",
};

Avatar.defaultProps = {
  size: "small",
};

Avatar.propTypes = {
  size: propTypes.oneOf(["large", "small"]),
  imageSource: propTypes.string.isRequired,
};

FallBackAvatar.propTypes = {
  size: propTypes.oneOf(["large", "small"]),
  letter: propTypes.string,
};

export default Avatar;
