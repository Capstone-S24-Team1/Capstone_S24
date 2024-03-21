import PropTypes from "prop-types";
import React from "react";
import "./app.css";

export const MenuBar = ({ property1, className }) => {
  return (
    <div className={`menu-bar ${className}`}>
      <div className="group">
        <div className="overlap-group">
          <div className="text-wrapper">Log In</div>
          <div className="div">Search</div>
          <div className="text-wrapper-2">Home</div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  property1: PropTypes.oneOf(["variant-2"]),
};
