import React from "react";
import { Link } from "react-router-dom";
import useDY from "../analytics/DYscripts";
import tealium from "../analytics/Tealium";

const Mark = () => {
  useDY({ type: "LOADING", lng: "en_US" });
  tealium.setPageType("loading");
  tealium.fire();
  return (
    <div className="mark">
      <Link to="/home">
        <svg className="home__icon" x="0px" y="0px" viewBox="0 0 68 90">
          <path d="M 1,1 H 67 V 23 H 1 V 1 Z" className="horizontal_bar" />
          <path d="M 1,45 H 23 V 89 H 1 V 45 Z" className="vertical_bar_left" />
          <path
            d="M 45,45 H 67 V 89 H 45 V 45 Z"
            className="vertical_bar_right"
          />
        </svg>
      </Link>
    </div>
  );
};
export default Mark;
