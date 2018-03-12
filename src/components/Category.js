import React from "react";
import tealium from "../analytics/Tealium";

class Category extends React.Component {
  componentWillMount() {
    tealium.setPageType("category");
    tealium.fire();
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
