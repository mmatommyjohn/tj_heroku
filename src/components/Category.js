import React from "react";
import tealium from "../analytics/Tealium";
import useDY from "../analytics/DYscripts";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.dy_page_ctx = { type: "CATEGORY", data: ["CLOTHES"], lng: "en_US" };
  }
  componentWillMount() {
    tealium.setPageType("category");
    tealium.fire();
    useDY(this.dy_page_ctx);
  }

  render() {
    return (
      <div>
        <h1>Category</h1>
        {/* ... */}
      </div>
    );
  }
}

export default Category;
