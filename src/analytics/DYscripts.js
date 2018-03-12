const setPageCtx = obj => {
  const DY = window.DY;
  DY.API("spa", { context: obj });
};

// useDY consumes the page context
// and the page's dy actions wrapped in a functions
const useDY = (DYpageCtx, dyFn) => {
  dyFn = dyFn || (() => {});
  const fire = () => {
    setPageCtx(DYpageCtx);
    dyFn();
  };

  const fireDY = () => {
    if (window.DYO && window.DY) {
      console.log("found DY and DYO. preparing magic...");
      fire();
      window.clearInterval(intID);
    } else {
      console.log("cannot find DY or DYO. Trying again...");
    }
  };

  const intID = window.setInterval(fireDY, 500);
};

export default useDY;
