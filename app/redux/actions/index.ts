// import constants
import {
  ADD_PRODUCT_FROM_API,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_PRODUCTS,
  ADD_PRODUCT_TO_PRODUCTS_REPLACED,
  ADD_REFUND_TO_TRANSACTION,
  ADD_TRANSACTION_TO_TRANSACTIONS,
  DELETE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_PRODUCTS,
  UPDATE_PRODUCT_QUANTITY,
} from '../constants';

// import data type
import {DataObject} from '../../test_data';
import {
  CartAction,
  ProductsAction,
  Transaction,
  TransactionsAction,
} from '../interfaces';

// Cart actions
/**
 * Add Product To Cart
 * @param product product to be added to cart reducer.
 * @returns object to be used in cart reducer,
 */
export const addProductToCart = (product: DataObject): CartAction => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});
/**
 * Delete Product From Cart
 * @param product product to be deleted from cart reducer.
 * @returns object to be used in cart reducer.
 */
export const deleteProductFromCart = (product: DataObject): CartAction => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: product,
});

// Products actions
/**
 * Add Product To Products
 * @param product product to be added to products reducer.
 * @returns object to be used in products reducer.
 */
export const addProductToProducts = (product: DataObject): ProductsAction => ({
  type: ADD_PRODUCT_TO_PRODUCTS,
  payload: product,
});
/**
 * Delete Product From Products
 * @param product product to be deleted from products reducer.
 * @returns object to be used in products reducer.
 */
export const deleteProductFromProducts = (
  product: DataObject,
): ProductsAction => ({
  type: DELETE_PRODUCT_FROM_PRODUCTS,
  payload: product,
});
/**
 * Update Produce Qunatity
 * @param product product used to update its quantity.
 * @returns object to be used in products reducer.
 */
export const updateProductQuantity = (product: DataObject): ProductsAction => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: product,
});
/**
 * Add Product To Products Replaced
 * @param product product to be added to products reducer and replaced if necessary.
 * @returns object to be used in products reducer.
 */
export const addProductToProductsReplaced = (
  product: DataObject,
): ProductsAction => ({
  type: ADD_PRODUCT_TO_PRODUCTS_REPLACED,
  payload: product,
});
/**
 * Add Product From Api
 * @param product product to be added to products from api.
 * @returns object to be used in products reducer.
 */
export const addProductFromApi = (product: DataObject): ProductsAction => ({
  type: ADD_PRODUCT_FROM_API,
  payload: product,
});

// Transaction actions
/**
 *  Add Transaction To Transactions
 * @param transaction transaction to be added to transactions
 * @returns object to be used in transactions reducer.
 */
export const addTransactionToTransactions = (
  transaction: Transaction,
): TransactionsAction => ({
  type: ADD_TRANSACTION_TO_TRANSACTIONS,
  payload: transaction,
});
/**
 * Add Refund To Transaction
 * @param transaction transaction to be refunded.
 * @returns object to be used in transactions reducer.
 */
export const addRefundToTransaction = (
  transaction: Transaction,
): TransactionsAction => ({
  type: ADD_REFUND_TO_TRANSACTION,
  payload: transaction,
});
