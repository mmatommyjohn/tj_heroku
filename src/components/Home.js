import React from "react";

const useDY = () => {
  const dyFn = () => {
    window.DYO.smartObject("Dynamic Banner Adder", {
      target: "dy_Dynamic_Banner_Adder",
      inline: true
    });
  };
  if (window.DYO) {
    dyFn();
  } else {
    console.log("cannot find DYO. Trying again...");
    window.setTimeout(useDY, 500);
  }
};

class Home extends React.Component {
  componentDidMount() {
    useDY();
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
