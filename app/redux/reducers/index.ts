// import interfaces
import {CartAction, CartState} from '../interfaces';

// import constants
import {ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART} from '../constants';

// Cart reducer
export const initialCartState: CartState = {
  productsList: [],
};
export const CartReducer = (
  state: CartState = initialCartState,
  action: CartAction,
) => {
  switch (action.type) {
    // this is for adding a product to cart
    case ADD_PRODUCT_TO_CART:
      return {
        productsList: [action.payload, ...state.productsList],
      };
    // this is for deleting a product from cart
    case DELETE_PRODUCT_FROM_CART:
      state.productsList = state.productsList.filter(
        element => element != action.payload,
      );
      return state;
    // default case
    default:
      return state;
  }
};
