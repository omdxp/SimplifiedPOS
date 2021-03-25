
// import redux
import { createStore, combineReducers, AnyAction } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore } from 'redux-persist';

// import redux reducers
import {} from '../reducers';
import { PersistConfig } from 'redux-persist/es/types';

// define app reducers
const appReducers = combineReducers({
  // you need to add your reducers here
});

// define root reducer
const rootReducer = (state:any, action:AnyAction) => {
  return appReducers(state, action);
}

// config persist store
const persistConfig: PersistConfig<Object> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['']
}

// define persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export store
export const store = createStore(persistedReducer);

// export persistor
export const persistor = persistStore(store);
