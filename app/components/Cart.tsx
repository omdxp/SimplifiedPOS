// import react native
import React, {FC} from 'react';
import {Text, View, FlatList} from 'react-native';

// import components
import ProductItemComponent from '../components/ProductItem';

// import global styles
import globalStyles from '../styles';
import {Colors} from '../styles/colors';

// import test data
import {DATA} from '../test_data';

// export Cart component
const Cart: FC = (): JSX.Element => {
  return (
    <View style={globalStyles.cartView}>
      <Text style={globalStyles.cartTitleText}>My Cart</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <ProductItemComponent name={item.title} quantity={2} />
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
