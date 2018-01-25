import { combineReducers } from 'redux';

import ProductsReducer from './ProductsReducer';
import ProductReducer from './ProductReducer';

const RootReducer = combineReducers({
  products: ProductsReducer,
  product: ProductReducer
});

export default RootReducer;