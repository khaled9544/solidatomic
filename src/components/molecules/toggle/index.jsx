import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css";

const Toggle = (props) => {
  const { selected, toggleSelected } = props;
  const dialogButtonClasses = classNames({
    "dialog-button": true,
    disabled: !selected
  });
  const dialogContent = selected ? "On" : "Off";
  return (
    <div className="toggle-container" onClick={toggleSelected}>
      <div className={dialogButtonClasses}>
        {dialogContent}
      </div>
    </div>
  );
};

Toggle.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
};

export default Toggle;
