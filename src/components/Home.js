import React from "react";

class Home extends React.Component {
  componentDidMount() {
    const DYscript1 = document.createElement("script");

    DYscript1.src = "//cdn.dynamicyield.com/api/8769373/api_dynamic.js";
    DYscript1.async = true;
    const DYscript2 = document.createElement("script");

    DYscript2.src = "//cdn.dynamicyield.com/api/8769373/api_static.js";
    DYscript2.async = true;

    document.body.appendChild(DYscript1);
    document.body.appendChild(DYscript2);
  }
  render() {
    return (
      <div>
        <div id="banner" />
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
