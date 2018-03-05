import React from "react";

class Home extends React.Component {
  componentDidMount() {
    window.DYO.smartObject("Dynamic Banner Adder", {
      target: "dy_Dynamic_Banner_Adder",
      inline: true
    });
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
