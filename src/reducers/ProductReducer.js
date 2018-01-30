const defaultState = {
  images: [],
  options: [
    {values: []},
    {values: []}
  ],
  main_image: {
    data: ''
  }
}


const ProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "RECEIVE_PRODUCT":
      return action.product;
    default:
      return state;
  }
};

export default ProductReducer;
