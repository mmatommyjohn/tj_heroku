const ProductsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case "RECEIVE_PRODUCTS":
      console.log('ACTION:', action);
      const dt = action.products;
      // Object.keys(dt).map(key => dt[key]);
      return Object.keys(dt).map(key => dt[key]);
    default:
      return state;
  }
};

export default ProductsReducer;