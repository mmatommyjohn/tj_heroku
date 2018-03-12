import React from "react";
import tealium from "../analytics/Tealium";
import useDY from "../analytics/DYscripts";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.dy_page_ctx = { type: "PRODUCT", lng: "en_US" };
  }

  componentWillMount() {
    tealium.setPageType("product");
    tealium.fire();
    useDY(this.dy_page_ctx);
  }

  render() {
    return (
      <div>
        <h1>Product</h1>
        {/* ... */}
      </div>
    );
  }
}

export default Product;
