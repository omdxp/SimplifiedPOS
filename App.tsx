// import react native
import React from 'react';

// import redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './app/redux/store';

// import navigation container
import {NavigationContainer} from '@react-navigation/native';

// import screens
import Navigation from './app/screens/Navigation';

export default function App() {
  console.log('persistor state:', persistor.getState());

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
