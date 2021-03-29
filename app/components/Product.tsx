
// import react native
import React from 'react';
import { Text, View, Image } from 'react-native';

// import global styles
import globalStyles from '../styles';

// export Product component
export default function Product() {
  return (
    <View style={globalStyles.productView}>
      <Image
          source={require('../assets/images/test_product.jpg')}
          style={globalStyles.productImage}
        />
      <View style={globalStyles.productTextView}>
        <Text style={globalStyles.productTitleText}>Product name</Text>
        <Text style={globalStyles.productPriceText}>Product price</Text>
      </View>
    </View>
  );
}

