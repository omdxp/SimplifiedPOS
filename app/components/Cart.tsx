// import react native
import React, {FC} from 'react';
import {Text, View, FlatList} from 'react-native';
import {DATA} from '../test_data';

// export Cart component
const Cart: FC = (): JSX.Element => {
  return (
    <View style={{padding: 5}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>My Cart</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
export default Cart;
