// import redux
import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

// import redux reducers
import {CartReducer, ProductsReducer, TransactionsReducer} from '../reducers';
import {PersistConfig} from 'redux-persist/es/types';

// define app reducers
const appReducers = combineReducers({
  CartReducer,
  ProductsReducer,
  TransactionsReducer,
});

// define root reducer
const rootReducer = (state: any, action: any) => {
  return appReducers(state, action);
};

// config persist store
const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['CartReducer', 'ProductsReducer', 'TransactionsReducer'],
};

// define persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export store
export const store = createStore(persistedReducer);

// export persistor
export const persistor = persistStore(store);
