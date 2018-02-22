import React from "react";

class Category extends React.Component {
  componentWillMount() {
    // reassign utag_data property
    window.utag_data.page_type = "category";

    // firing Tealium tag again
    (function(a, b, c, d) {
      a = "//tags.tiqcdn.com/utag/tommyjohn/internal-developer/dev/utag.js";
      b = document;
      c = "script";
      d = b.createElement(c);
      d.src = a;
      d.type = "text/java" + c;
      d.async = true;
      a = b.getElementsByTagName(c)[0];
      a.parentNode.insertBefore(d, a);
    })();
  }

  render() {
    return (
      <div>
        <h1>Category</h1>
        {/* ... */}
      </div>
    )
  }
}

export default Category;
