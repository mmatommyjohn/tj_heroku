const ProductsReducer = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_PRODUCTS":
      const dt = action.products;
      return Object.keys(dt).map(key => dt[key]);
    default:
      return state;
  }
};

export default ProductsReducer;