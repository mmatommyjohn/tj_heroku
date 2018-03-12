import React from "react";
import useDY from "../analytics/DYscripts";
import tealium from "../analytics/Tealium";
// all DY dynamic actions for this page within a function
const dyFn = (DYO = window.DYO) => {
  DYO.smartObject("Dynamic Banner Adder", {
    target: "dy_Dynamic_Banner_Adder",
    inline: true
  });
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.dy_page_ctx = { type: "HOMEPAGE", lng: "en_US" };
  }
  componentDidMount() {
    useDY(this.dy_page_ctx, dyFn);
    tealium.setPageType("homepage");
    tealium.fire();
  }
  render() {
    return (
      <div>
        <div id="banner">
          <div id="dy_Dynamic_Banner_Adder" />
        </div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
