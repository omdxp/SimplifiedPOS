// import react native
import React, {FC} from 'react';
import {Text, View, FlatList} from 'react-native';

// import components
import ProductItemComponent from '../components/ProductItem';

// import test data
import {DATA} from '../test_data';

// export Cart component
const Cart: FC = (): JSX.Element => {
  return (
    <View style={{padding: 5}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>My Cart</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <ProductItemComponent name={item.title} quantity={2} />
        )}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
export default Cart;
