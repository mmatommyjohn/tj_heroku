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
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case "RECEIVE_PRODUCT":
      return action.product;
    default:
      return state;
  }
};

export default ProductReducer;
