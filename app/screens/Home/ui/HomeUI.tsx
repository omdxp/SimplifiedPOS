
// import react native
import React, { FC } from 'react';
import { Text, View, FlatList } from 'react-native';

// import components
import ProductComponent from '../../../components/Product';
import ProductDetailsScreen from '../../ProductDetails/ui/ProductDetailsUI';

// import global styles
import globalStyles from '../../../styles';

// import test data
import { DATA } from '../../../test_data';

// import Home functions
// import {} from '../functions';

// export Home UI
const HomeUI: FC = (): JSX.Element => {
  return (
    <View style={globalStyles.mainView}>
      {/* <FlatList
        numColumns={5}
        initialNumToRender={5}
        data={DATA}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item})=> <ProductComponent title={item.title} image={item.image} price={item.price} onPress={()=>{console.log('pressed!');
        }} />}
      /> */}
      <ProductDetailsScreen image={DATA[0].image} title={DATA[0].title} description={DATA[0].title} price={DATA[0].price} />
    </View>
  );
}
export default HomeUI;
