
// import react native
import React from 'react';
import { Text, View, ListView } from 'react-native';

// import components
import ProductComponent from '../../../components/Product';

// import global styles
import globalStyles from '../../../styles';

// import Home functions
// import {} from '../functions';

// export Home UI
export default function HomeUI() {
  return (
    <View style={globalStyles.mainView}>
      
      <ProductComponent title={'Product name'} image={'https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg'} price={'Product price'} />
    </View>
  );
}
