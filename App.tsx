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
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}
