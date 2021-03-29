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
