import React from "react";
import Toggle from "../../molecules/toggle";
import { default as Text } from "../../atoms/typography";
import { SpaceBetween } from "../../atoms/flex";
import './style.css';

const Header = () => (
  <div className="header">
    <SpaceBetween>
      <Text type="heading">Demo</Text>
      <Toggle />
    </SpaceBetween>
  </div>
);
export default Header;
