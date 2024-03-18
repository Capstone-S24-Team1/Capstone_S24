import PropTypes from "prop-types";
import React from "react";
import "./menubar.css";

export const MenuBar = ({ property1, className }) => {
  return (
    <div className={`menu-bar ${className}`}>
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Log Out</div>
          <div className="div">Search</div>
          <div className="text-wrapper-2">Upload</div>
          <div className="text-wrapper-3">Home</div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  property1: PropTypes.oneOf(["default"]),
};

export default MenuBar;