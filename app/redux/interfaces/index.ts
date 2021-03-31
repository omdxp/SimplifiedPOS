import {AnyAction} from 'redux';
// import data types
import {DataObject, DataType} from '../../test_data';

/**
 * Cart Interfaces
 */
// cart actions interface
export interface CartAction extends AnyAction {
  type: string;
  payload: DataObject;
}

// cart state interface
export interface CartState {
  productsList: DataType;
}

/**
 * Products Interfaces
 */
// products actions interface
export interface ProductsAction extends AnyAction {
  type: string;
  payload: DataObject;
}

// products state interface
export interface ProductsState {
  productsList: DataType;
}

/**
 * Transactions Interfaces
 */
// transaction interface
export interface Transaction {
  id: string;
  productsList: DataType;
  synchronized: boolean;
  refunded: boolean;
}
// transactions actions interface
export interface TransactionsAction extends AnyAction {
  type: string;
  payload: Transaction;
}
// transactions state interface
export interface TransactionsState {
  transactions: Transaction[];
}
