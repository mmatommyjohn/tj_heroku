import React from "react";
import tealium from "../analytics/Tealium";
import useDY from "../analytics/DYscripts";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.dy_page_ctx = {
      type: "CART",
      data: ["BOXERS", "SOCKS"],
      lng: "en_US"
    };
  }

  componentWillMount() {
    tealium.setPageType("cart");
    tealium.fire();
    useDY(this.dy_page_ctx);
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
        {/* ... */}
      </div>
    );
  }
}

export default Cart;
