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
      // check if element already exists in the cart
      if (state.productsList.includes(action.payload)) {
        const index: number = state.productsList.findIndex(
          element => element.title === action.payload.title,
        );
        state.productsList[index].quantity += 1;
      } else {
        state.productsList = [action.payload, ...state.productsList];
      }
      return {
        ...state,
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
