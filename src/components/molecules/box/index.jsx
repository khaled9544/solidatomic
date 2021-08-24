import React from "react";
import propTypes from "prop-types";
import Avatar from "../../atoms/avatar";
import { default as Text } from "../../atoms/typography";
import "./style.css";

const Box = (props) => {
  const { title, children } = props;
  return (
    <div className="box">
      <Text type="subheading">{title}</Text>
      {children}
    </div>
  );
};

const InfoBox = (props) => {
  const { imageSource } = props;
  return (
    <Box title="Personal Info">
      <Avatar size="large" imageSource={imageSource} />
    </Box>
  );
};

Box.propTypes = {
  title: propTypes.string.isRequired,
};

InfoBox.propTypes = {
  imageSource: propTypes.string,
};

InfoBox.defaultProps = {
  imageSource: "",
};

export { Box, InfoBox };
