// import react native
import React from 'react';

// import navigation container
import {NavigationContainer} from '@react-navigation/native';

// import screens
import Navigation from './app/screens/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
