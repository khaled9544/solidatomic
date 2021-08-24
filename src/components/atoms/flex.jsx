import React from "react";

const centerFlexStyle = {
  display: "flex",
  alignItems: "center",
};

const Flex = (props) => {
  const { children } = props;
  return <div style={{ ...centerFlexStyle }}>{children}</div>;
};

const SpaceArround = (props) => {
  const { children } = props;
  return (
    <div style={{ ...centerFlexStyle, justifyContent: "space-around" }}>
      {children}
    </div>
  );
};

const SpaceBetween = (props) => {
  const { children } = props;
  return (
    <div style={{ ...centerFlexStyle, justifyContent: "space-between" }}>
      {children}
    </div>
  );
};

export { Flex, SpaceArround, SpaceBetween };
