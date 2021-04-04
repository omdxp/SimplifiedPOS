// import react native
import React, {FC} from 'react';

// import stack navigation
import {createStackNavigator} from '@react-navigation/stack';

// import drawer navigation
import {createDrawerNavigator} from '@react-navigation/drawer';

// create stack navigator
const Stack = createStackNavigator();

// create drawer navigator
const Drawer = createDrawerNavigator();

// import screens
import HomeScreen from './Home/ui/HomeUI';
import ProductDetailsScreen from './ProductDetails/ui/ProductDetailsUI';
import TransactionsScreen from './Transactions/ui/TransactionsUI';
import RequestsTestScreen from './RequestsTest/ui/RequestsTestUI';

// define stack navigation
const StackNavigation: FC = (): JSX.Element => (
  <Stack.Navigator initialRouteName={'Home'}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
  </Stack.Navigator>
);

const Navigation: FC = (): JSX.Element => {
  return (
    <Drawer.Navigator initialRouteName={'Checkout'} drawerType={'permanent'}>
      <Drawer.Screen name="Checkout" component={StackNavigation} />
      <Drawer.Screen name="Transactions" component={TransactionsScreen} />
      <Drawer.Screen name="RequestsTest" component={RequestsTestScreen} />
    </Drawer.Navigator>
  );
};
export default Navigation;
