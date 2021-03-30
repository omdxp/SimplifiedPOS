import {AnyAction} from 'redux';
// import data types
import {DataObject, DataType} from '../../test_data';

// cart actions interface
export interface CartAction extends AnyAction {
  type: string;
  payload: DataObject;
}

// cart state interface
export interface CartState {
  productsList: DataType;
}

// products actions interface
export interface ProductsAction extends AnyAction {
  type: string;
  payload: DataObject;
}

// products state interface
export interface ProductsState {
  productsList: DataType;
}
