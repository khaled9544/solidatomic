import React from "react";
import Toggle from '../../molecules/toggle';
import { default as Text } from "../../atoms/typography";
import { SpaceBetween } from "../../atoms/flex";

const Header = () => {
  return (
    <>
      <SpaceBetween>
        <Text type="heading">
            Demo
        </Text>
        <Toggle />
      </SpaceBetween>
    </>
  );
};

export default Header;
