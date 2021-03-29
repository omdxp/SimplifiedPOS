// import constants
import {ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART} from '../constants';

// import data type
import {DataObject} from '../../test_data';

// Cart actions
/**
 * Add Product To Cart
 * @param product product to be added to cart reducer.
 * @returns object to be used in cart reducer,
 */
export const addProductToCart = (product: DataObject) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});
/**
 * Delete Product From Cart
 * @param product product to be deleted from cart reducer.
 * @returns object to be used in cart reducer.
 */
export const deleteProductFromCart = (product: DataObject) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: product,
});
