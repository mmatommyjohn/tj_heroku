const setPageCtx = obj => {
  window.DY = window.DY || {};
  window.DY.recommendationContext = obj;
};

// useDY consumes the page context
// and the page's dy actions wrapped in a functions
const useDY = (DYpageCtx, dyFn) => {
  dyFn = dyFn || (() => {});
  const fire = () => {
    setPageCtx(DYpageCtx);
    dyFn();
  };

  if (window.DYO && window.DY) {
    console.log("found DY and DYO. preparing magic...");
    fire();
  } else {
    console.log("cannot find DY or DYO. Trying again...");
    window.setTimeout(fire, 500);
  }
};

export default useDY;
