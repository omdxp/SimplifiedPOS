
// import react native
import React from 'react';
import { Text, View, FlatList } from 'react-native';

// import components
import ProductComponent from '../../../components/Product';

// import global styles
import globalStyles from '../../../styles';

// import test data
import { DATA } from '../../../test_data';

// import Home functions
// import {} from '../functions';

// export Home UI
export default function HomeUI() {
  return (
    <View style={globalStyles.mainView}>
      <FlatList
        horizontal
        data={DATA}
        ItemSeparatorComponent={()=><View style={globalStyles.spaceView} />}
        renderItem={({item})=> <ProductComponent title={item.title} image={item.image} price={item.price} />}
      />
    </View>
  );
}
