const tealium = {};
tealium.fire = function(a, b, c, d) {
  a = "//tags.tiqcdn.com/utag/tommyjohn/internal-developer/dev/utag.js";
  b = document;
  c = "script";
  d = b.createElement(c);
  d.src = a;
  d.type = "text/java" + c;
  d.async = true;
  a = b.getElementsByTagName(c)[0];
  a.parentNode.insertBefore(d, a);
};

tealium.setPageType = pageType => (window.utag_data.page_type = pageType);

tealium.setUtag = obj => (window.utag_data = obj);

export default tealium;
