import React from "react";

class Home extends React.Component {
  componentDidMount() {
    const DYscript1 = document.createElement("script");

    script.src = "//cdn.dynamicyield.com/api/8769373/api_dynamic.js";
    script.async = true;
    const DYscript2 = document.createElement("script");

    script.src = "//cdn.dynamicyield.com/api/8769373/api_static.js";
    script.async = true;

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
