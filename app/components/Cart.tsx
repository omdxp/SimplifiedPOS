// import react native
import React, {FC, useReducer} from 'react';
import {Text, View, FlatList} from 'react-native';

// import components
import ProductItemComponent from '../components/ProductItem';

// import redux
import {useSelector} from 'react-redux';

// import global styles
import globalStyles from '../styles';
import {Colors} from '../styles/colors';

// export Cart component
const Cart: FC = (): JSX.Element => {
  // use cart selector
  const state = useSelector(state => state.CartReducer);
  console.log('Cart component:', state);

  return (
    <View style={globalStyles.cartView}>
      <Text style={globalStyles.cartTitleText}>My Cart</Text>
      <FlatList
        data={state.productsList}
        renderItem={({item}) => (
          <ProductItemComponent name={item.title} quantity={item.quantity} />
        )}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{borderBottomWidth: 1, borderBottomColor: Colors.lightGrey}}
          />
        )}
      />
    </View>
  );
};
export default Cart;
