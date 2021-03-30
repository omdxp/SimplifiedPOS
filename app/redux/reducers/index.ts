// import interfaces
import {
  CartAction,
  CartState,
  ProductsAction,
  ProductsState,
} from '../interfaces';

// import constants
import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_PRODUCTS,
  DELETE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_PRODUCTS,
  UPDATE_PRODUCT_QUANTITY,
} from '../constants';

// Cart reducer
export const initialCartState: CartState = {
  productsList: [],
};
export const CartReducer = (
  state: CartState = initialCartState,
  action: CartAction,
): CartState => {
  switch (action.type) {
    // this is for adding a product to cart
    case ADD_PRODUCT_TO_CART:
      // check if element already exists in the cart
      const index: number = state.productsList.findIndex(
        element => element.title === action.payload.title,
      );
      if (index === -1) {
        state.productsList = [action.payload, ...state.productsList];
      } else {
        state.productsList[index].quantity += 1;
      }
      return {
        ...state,
      };
    // this is for deleting a product from cart
    case DELETE_PRODUCT_FROM_CART: {
      state.productsList = state.productsList.filter(
        element => element != action.payload,
      );
      return {
        ...state,
      };
    }
    // default case
    default:
      return state;
  }
};

// Products reducer
export const initialProductsState: ProductsState = {
  productsList: [],
};
export const ProductsReducer = (
  state: ProductsState = initialProductsState,
  action: ProductsAction,
): ProductsState => {
  switch (action.type) {
    // this is for adding a product to products
    case ADD_PRODUCT_TO_PRODUCTS: {
      // check if item is already added to update only the quantity
      const index: number = state.productsList.findIndex(
        element => element.title === action.payload.title,
      );
      if (index === -1) {
        state.productsList = [action.payload, ...state.productsList];
      } else {
        state.productsList[index].quantity += 1;
      }
      return {
        ...state,
      };
    }
    // this is for deleting a product from products
    case DELETE_PRODUCT_FROM_PRODUCTS: {
      state.productsList = state.productsList.filter(
        element => element != action.payload,
      );
      return {
        ...state,
      };
    }
    // this is for updating the quantity of a given product
    case UPDATE_PRODUCT_QUANTITY: {
      // check if item is in products list
      const index: number = state.productsList.findIndex(
        element => element.title === action.payload.title,
      );
      if (index === -1) {
        return state;
      } else {
        // check if quantity is negative
        state.productsList[index].quantity =
          action.payload.quantity <= 0 ? 0 : action.payload.quantity;
        return {
          ...state,
        };
      }
    }
    // default case
    default:
      return state;
  }
};
