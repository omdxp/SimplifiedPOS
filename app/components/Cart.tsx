// import react native
import React, {FC} from 'react';
import {Text, View, FlatList} from 'react-native';

// import components
import ProductItemComponent from '../components/ProductItem';

// import redux
import {useSelector} from 'react-redux';
import {CartState} from '../redux/interfaces';

// import global styles
import globalStyles from '../styles';
import {Colors} from '../styles/colors';

// export Cart component
const Cart: FC = (): JSX.Element => {
  // use cart selector
  const state: CartState = useSelector(state => state.CartReducer);

  return (
    <View style={globalStyles.cartView}>
      <Text style={globalStyles.cartTitleText}>My Cart</Text>
      <FlatList
        data={state.productsList}
        renderItem={({item}) => (
          <ProductItemComponent
            name={item.title}
            quantity={item.quantity}
            onPress={() => console.log('Pressed!')}
          />
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
