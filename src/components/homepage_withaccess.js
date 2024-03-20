import React from "react";
import { MenuBar } from "./menubar";
import "./homepage_withaccess.css";

const HomePageWith = () => {
  return (
    <div className="home-page-with">
      <div className="div-2">
        <div className="overlap">
          <p className="oil-gas-iot-insights">Oil &amp; Gas IoT Insights</p>
          <p className="p">
            Learn about cutting-edge applications of the Internet of Things in the oil and gasoline industry, explore
            curated resources and case studies, and find insights into the connected technologies shaping the oil and
            gasoline industry.
          </p>
          <MenuBar className="menu-bar-instance" property1="default" />
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-4">Find Use Cases</div>
                </div>
              </div>
              <div className="arrow-wrapper">
                <img className="arrow" alt="Arrow" src="arrow-3.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageWith;
