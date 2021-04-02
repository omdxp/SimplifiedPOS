import {AnyAction} from 'redux';
import {store} from '../store';

// import data types
import {DataObject, DataType, Transaction} from '../../interfaces';

/**
 * Root State
 */
export type RootState = ReturnType<typeof store.getState>;

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
// transactions actions interface
export interface TransactionsAction extends AnyAction {
  type: string;
  payload: Transaction;
}
// transactions state interface
export interface TransactionsState {
  transactions: Transaction[];
}
