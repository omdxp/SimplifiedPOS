// import react native
import React, {FC} from 'react';

// import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

// create stack navigator
const Stack = createStackNavigator();

// import screens
import HomeScreen from './Home/ui/HomeUI';
import ProductDetailsScreen from './ProductDetails/ui/ProductDetailsUI';

const Navigation: FC = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};
export default Navigation;
